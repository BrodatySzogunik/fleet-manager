import { v4 } from "uuid"
import { vehicleConditions,vechicleTypes } from "./helpers.js"

export class Vehicle {
    constructor(type, brand, model, course, price, condition) {
        this.type = type
        this.brand = brand
        this.model = model
        this.course = Number(course)
        this.price = Number(price)
        this.condition = condition
        this.id = v4()
    }

    chooseIcon() {
        switch(this.type){
            case 'Car' : return "fa-car"
            case 'Truck' : return "fa-truck"
            case 'Motor' : return "fa-motorcycle"
            default : return ""
        }
    }
    chooseBorder(){
        switch(this.condition){
            case "New": return "border-success"
            case "Used":  return "border-warning"
            case "Wrecked": return "border-danger"
            default: return""
        }
    }

    generateItem() {
        return `
            <div id="${this.id}" class="col-md-12 my-md-2 col-lg-4">
                <div id="${this.id}-card" class="card border ${this.chooseBorder()}">
                    <div class="card-title text-center"><h3 class="my-2">${this.brand} ${this.model} <i id="${this.id}-type-icon" class="fas ${this.chooseIcon()}"></i></h3></div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item test">Type: ${this.type}</li>
                        <li class="list-group-item">Course: ${this.course} km</li>
                        <li class="list-group-item">Price: ${this.price} zł</li>
                        <li class="list-group-item">Condition: ${this.condition}</li>
                    </ul>
                    <div class="card-footer row bg-transparent">
                        <div class="col-md-6 col-lg-4">
                            <button id="${this.id}-edit-button" class="btn btn-secondary w-100">Edit <i class="fas fa-edit"></i></button>
                        </div>
                        <div class="col-md-6 col-lg-4 offset-lg-4">
                            <button id="${this.id}-delete-button" class="btn btn-danger w-100">Delete <i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div id="settings-container" class="d-none p-2">
                        <div class="d-flex">
                            <input id="${this.id}-new-price-input" placeholder="New Price" class="form-control" type="number"/>
                            <button id="${this.id}-change-price-button" class="ml-2 btn btn-success" style="width: 150px;">Edit price</button>
                        </div>
                        <div class="mt-1">
                            <select id="${this.id}-condition-select" class="form-control">
                                ${vehicleConditions.map((condition) => `<option>${condition.label}</option>`).join("")}
                            </select>
                        </div>
                        <div class="mt-1">
                            <select id="${this.id}-type-select" class="form-control">
                                ${vechicleTypes.map((carType) => `<option>${carType.label}</option>`).join("")}
                            </select>
                        </div>
                        <div class="d-flex mt-1">
                            <input id="${this.id}-new-course-input" placeholder="New Course" class="form-control" type="number"/>
                            <button id="${this.id}-change-course-button" class="ml-2 btn btn-success" style="width: 150px;">Edit Course</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        
        }
    

    assignDefaultInputValue() {
        const newPriceInput = document.getElementById(`${this.id}-new-price-input`)
        const newCourseInput = document.getElementById(`${this.id}-new-course-input`)
        newPriceInput.value = this.price
        newCourseInput.value = this.course
    }

    changePrice() {
        const newPriceInput = document.getElementById(`${this.id}-new-price-input`)
        this.price = Number(newPriceInput.value).toFixed(0)

        const liElements = Array.from(document.getElementById(this.id).querySelector("ul").getElementsByTagName("li"))
        const priceElement = liElements.find((li) => li.innerHTML.includes("Price:"))
        if (priceElement) {
            priceElement.innerHTML = `Price: ${this.price} zł`
        }
    }

    changeCourse(){
        const newCourseInput =document.getElementById(`${this.id}-new-course-input`)
        this.course=Number(newCourseInput.value).toFixed(0)

        const liElements =Array.from(document.getElementById(this.id).querySelector("ul").getElementsByTagName("li"))
        const courseElement = liElements.find((li)=>li.innerHTML.includes("Course:"))
        if(courseElement){
            courseElement.innerHTML=`Course: ${this.course.toString()} km`
        }
    }

    changeType(newType){
        const typeIcon = document.getElementById(`${this.id}-type-icon`)
        const classList=Array.from(typeIcon.classList)
        classList.forEach((item)=>{
            typeIcon.classList.remove(item)
        })
            
        this.type= newType
        typeIcon.classList.add("fas")
        typeIcon.classList.add(this.chooseIcon())
        const ulElements =document.getElementById(this.id).querySelector("ul")
        const liElements = ulElements?.children && Array.from(ulElements.children)
        liElements?.forEach((li)=>{
            if (li.innerHTML.includes("Type:")){
                li.innerHTML =`Type: ${newType}`
            }})
        }

    

    changeCondition(newCondition) {
        const card = document.getElementById(`${this.id}-card`)
        const classList=Array.from(card.classList)
        classList.forEach((item)=>{
        card.classList.remove(item)
        })



        this.condition = newCondition

        card.classList.add("card")
        card.classList.add("border")
        card.classList.add(this.chooseBorder())

        const ulElements = document.getElementById(this.id).querySelector("ul")
        const liElements = ulElements?.children && Array.from(ulElements.children)
        liElements?.forEach((li) => {
            if (li.innerHTML.includes("Condition:")) 
            {
                li.innerHTML = `Condition: ${newCondition}`
        }
        
    })
    }
}