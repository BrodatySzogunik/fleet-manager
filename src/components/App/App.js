import { Vehicle } from "./../../common/Vehicle.class.js"
import { addInputsValidation, removeInputsValidation, setDefaultInputsValue,addErrorBorder } from "./../../common/helpers.js"
import { validateFulfilledData } from "./../../common/validation.js"

let fleet = [
    new Vehicle("Truck", "Iveco", "Daily", 4343125, 15000, "Used"),
    new Vehicle("Car", "Skoda", "Octavia", 2343875, 5000, "Used"),
    new Vehicle("Motor", "Suzuki", "Hayabusa", 9, 85000, "New"),
    new Vehicle("Car", "VW", "Passat B5", 784390, 200, "Wrecked"),
]

const generateMainContent = () => {
    const mainContentElement = document.getElementById("main-content")
    mainContentElement.innerHTML = `<div class="row mt-2 g-2">${fleet.map(item => item.generateItem()).join("")}</div>`
    fleet.forEach((item) => item.assignDefaultInputValue())
}

const generateHeader = () => {
    const headerElement = document.querySelector("#header")
    const header = document.createElement("div")
    header.classList.add("bg-secondary", "bg-gradient", "bg-opacity-10", "w-100", "d-flex", "justify-content-center", "align-items-center")
    header.style.height = "100px"

    const headerContent = document.createElement("h1")
    headerContent.innerHTML = "Fleet Manager"

    header.append(headerContent)

    headerElement.append(header)
}

const generateSummary = () => {
    const summaryElement = document.querySelector(".container").querySelector("#summary")

    const fleetPrice = fleet.reduce((accSum, vehicle) => {
        accSum += Number(vehicle.price)
        return accSum
    }, 0)

    const summarySpanElement = document.createElement("h2")
    summarySpanElement.classList.add("mt-2")
    summarySpanElement.classList.add("w-100")
    summarySpanElement.classList.add("d-flex")
    summarySpanElement.classList.add("justify-content-center")
    summarySpanElement.classList.add("align-items-center")
    // summarySpanElement.className = "mt-2 w-100 d-flex justify-content-center align-items-center"

    summarySpanElement.innerHTML = `Fleet worth: ${fleetPrice} zł`

    if (summaryElement.firstChild) {
        // summaryElement.replaceChild(summarySpanElement, summaryElement.firstChild)
        summaryElement.firstChild.replaceWith(summarySpanElement)
    } else {
        summaryElement.append(summarySpanElement)
    }

}

const deleteEventListeners = () => fleet.forEach((vehicle) => deleteEventListener(vehicle))

const editMenuEventListeners = () => fleet.forEach((vehicle) => editMenuListener(vehicle))

const editPriceEventListeners = () => fleet.forEach((vehicle) => editPriceListener(vehicle))

const editConditionEventListeners = () => fleet.forEach((vehicle) => editConditionListener(vehicle))

const editCourseEventListeners = () => fleet.forEach((vehicle)=> editCourseListener(vehicle))

const editTypeEventListeners = () => fleet.forEach((vehicle) => editTypeListener(vehicle)) 

const changePossitionUpListeners = () => fleet.forEach((vehicle)=>changePossitionUpListener(vehicle))

const changePossitionDownListeners = () => fleet.forEach((vehicle)=>changePossitionDownListener(vehicle))

const moveToTopListeners= () => fleet.forEach((vehicle)=>moveToTopListener(vehicle))

const moveToBottomListeners = () => fleet.forEach((vehicle) => moveToBottomListener(vehicle))

const toogleSelectedConditionListeners = () => fleet.forEach((vehicle) => toogleSelectedCondition(vehicle))

const filterContentListener = () =>{
    const filterButton=document.getElementById("filter-header-button")
    // filterButton.preventDefault()

    filterButton.addEventListener("click",()=>{
        const filterContent=document.getElementById("filter-content")
        const filterContentHidden=filterContent.classList.contains("d-none")
        const filterIcon= filterButton.querySelector("i")
        
        if (filterContentHidden) {
            filterContent.classList.add("d-block")
            filterContent.classList.remove("d-none")
            filterIcon.classList.remove("fa-chevron-down")
            filterIcon.classList.add("fa-chevron-up")
        } else {
            filterContent.classList.remove("d-block")
            filterContent.classList.add("d-none")
            filterIcon.classList.remove("fa-chevron-up")
            filterIcon.classList.add("fa-chevron-down")
        }
    })
}

const toogleSelectedCondition = (vehicle) =>{
    const selectCondition =document.getElementById(`${vehicle.id}-${vehicle.condition}`)
    console.log(selectCondition)
    selectCondition.setAttribute("selected",true)
}

const moveToBottomListener=(vehicle)=>{
    const moveToBottomButton = document.getElementById(`${vehicle.id}-move-bottom`)
    moveToBottomButton.addEventListener("click",()=>{
        moveToBottom(vehicle.id)
    })
}

const moveToBottom=(vehicleId)=>{
    const index = fleet.findIndex((e)=>{
        return e.id==vehicleId
    })

    if(index!=fleet.length-1){
    const elementToMove=document.getElementById(vehicleId)
    elementToMove.parentElement.insertBefore(elementToMove,elementToMove.parentElement.lastChild)
    console.log(index)
    var element = fleet[index];
    fleet.splice(index, 1);
    fleet.splice(fleet.length, 0, element);
    }
    console.log(fleet)
}


const moveToTopListener=(vehicle)=>{
    const moveToTopButton = document.getElementById(`${vehicle.id}-move-top`)
    moveToTopButton.addEventListener("click",()=>{
        moveToTop(vehicle.id)
    })
}

const moveToTop=(vehicleId)=>{
    const index = fleet.findIndex((e)=>{
        return e.id==vehicleId
    })

    if(index!=0){
    const elementToMove=document.getElementById(vehicleId)
    elementToMove.parentElement.insertBefore(elementToMove,elementToMove.parentElement.firstChild)
    console.log(index)
    var element = fleet[index];
    fleet.splice(index, 1);
    fleet.splice(0, 0, element);
    }
    console.log(fleet)

}

const changePossitionUpListener = (vehicle) =>{
    const moveUpButton = document.getElementById(`${vehicle.id}-move-up`)
    moveUpButton.addEventListener("click",()=>{
        chnagePossitionUp(vehicle.id)        
    })
}

const chnagePossitionUp=(vehicleId)=>{
    const index = fleet.findIndex((e)=>{
        return e.id==vehicleId
    })

    if(index!=0){
    const elementToMove=document.getElementById(vehicleId)
    const elementBefore=elementToMove.previousElementSibling
    elementToMove.parentElement.insertBefore(elementToMove,elementBefore)
    console.log(index)
    var element = fleet[index];
    fleet.splice(index, 1);
    fleet.splice(index-1, 0, element);
    }
    console.log(fleet)
    
}

const changePossitionDownListener = (vehicle) =>{
    const moveUpButton = document.getElementById(`${vehicle.id}-move-down`)
    moveUpButton.addEventListener("click",()=>{
        chnagePossitionDown(vehicle.id)
        
        
    })
}

const chnagePossitionDown=(vehicleId)=>{
    const index = fleet.findIndex((e)=>{
        return e.id==vehicleId
    })

    if(index!=fleet.length-1){
    const elementToMove=document.getElementById(vehicleId)
    const elementAfter=elementToMove.nextElementSibling
    elementToMove.parentElement.insertBefore(elementAfter,elementToMove)
    console.log(index)
    var element = fleet[index];
    fleet.splice(index, 1);
    fleet.splice(index+1, 0, element);
    }
    console.log(fleet)
}


const editCourseListener = (vehicle)=>{
    const courseButton = document.getElementById(`${vehicle.id}-change-course-button`)
    courseButton.addEventListener("click",()=>{
        vehicle.changeCourse()
        generateSummary()
    })
}

const editPriceListener = (vehicle) => {
    const priceButton = document.getElementById(`${vehicle.id}-change-price-button`)
    priceButton.addEventListener("click", () => {
        vehicle.changePrice()
        generateSummary()
    })
}

const editTypeListener = (vehicle) =>{
    const typeButton =document.getElementById(`${vehicle.id}-type-select`)
    typeButton.addEventListener("change",(event) => {
        const newValue = event.target.value
        vehicle.changeType(newValue)
    })

}

const editConditionListener = (vehicle) => {
    const priceButton = document.getElementById(`${vehicle.id}-condition-select`)
    priceButton.addEventListener("change", (event) => {
        const newValue = event.target.value
        vehicle.changeCondition(newValue)
    })
}

const editMenuListener = (vehicle) => {
    const editButton = document.getElementById(`${vehicle.id}-edit-button`)
    editButton.addEventListener("click", () => {
        const settingsElement = document.getElementById(vehicle.id).querySelector("#settings-container")
        const areSettingsHidden = settingsElement.classList.contains("d-none")

        if (areSettingsHidden) {
            settingsElement.classList.add("d-block")
            settingsElement.classList.remove("d-none")
        } else {
            settingsElement.classList.remove("d-block")
            settingsElement.classList.add("d-none")
        }
    })
}

const deleteEventListener = (vehicle) => {
    const deleteButton = document.getElementById(`${vehicle.id}-delete-button`)
    deleteButton.addEventListener("click", () => {
        const elementToDelete = document.getElementById(vehicle.id)
        elementToDelete.parentElement.removeChild(elementToDelete)
        fleet = fleet.filter((vahicleInState) => vahicleInState.id !== vehicle.id)
        generateSummary()
    })
}

const addVehicleProcess = () => {
    const { errors, data } = validateFulfilledData()



    if (errors.length > 0) {
        addInputsValidation(errors)
        addErrorBorder(errors)
    } else {
        removeInputsValidation()

        const newVehicle = new Vehicle(...data)
        fleet = [newVehicle, ...fleet]

        const rowElement = document.getElementById("main-content").querySelector("div.row")
        rowElement.insertAdjacentHTML("afterbegin", newVehicle.generateItem())

        generateSummary()
        editMenuListener(newVehicle)
        editPriceListener(newVehicle)
        editConditionListener(newVehicle)
        editCourseEventListeners(newVehicle)
        editTypeEventListeners(newVehicle)
        changePossitionUpListeners(newVehicle)
        changePossitionDownListeners(newVehicle)
        
        moveToBottomListeners(newVehicle)
        moveToTopListeners(newVehicle)
        toogleSelectedConditionListeners(newVehicle)
        deleteEventListener(newVehicle)
        newVehicle.assignDefaultInputValue()
        setDefaultInputsValue()
    }
}

const addNewVehicleListener = () => {
    const addButton = document.getElementById("add-vehicle-button")
    addButton.addEventListener("click", (event) => {
        event.preventDefault()
        addVehicleProcess()
    })
}

const formSubmitListener = () => {
    const formEl = document.getElementById("add-form")
    formEl.addEventListener("submit", (event) => {
        event.preventDefault()
        addVehicleProcess()
    })
}


export const refreshView = () => {
    generateMainContent()
    generateHeader()
    generateSummary()
    deleteEventListeners()
    editMenuEventListeners()
    editPriceEventListeners()
    editConditionEventListeners()
    editCourseEventListeners()
    editTypeEventListeners()
    changePossitionUpListeners()
    changePossitionDownListeners()
    moveToTopListeners()
    moveToBottomListeners()
    toogleSelectedConditionListeners()
    addNewVehicleListener()
    formSubmitListener()
    filterContentListener()
}