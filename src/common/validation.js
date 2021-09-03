import{clearErrorBorder}from "./helpers.js"
export const validateFulfilledData = () => {
    const newVehicleType = document.getElementById("type-select")
    const newVehicleBrand = document.getElementById("brand-input")
    const newVehicleModel = document.getElementById("model-input")
    const newVehicleCourse = document.getElementById("course-input")
    const newVehiclePrice = document.getElementById("price-input")
    const newVehicleCondition = document.getElementById("condition-select")

    const errors = [
        newVehicleBrand,
        newVehicleModel,
        newVehicleCourse,
        newVehiclePrice
    ].reduce((acc, inputEl) => {
        !inputEl.value && acc.push(inputEl)
        clearErrorBorder(inputEl)
        return acc
    }, [])

    const data = [
        newVehicleType.value,
        newVehicleBrand.value,
        newVehicleModel.value,
        newVehicleCourse.value,
        newVehiclePrice.value,
        newVehicleCondition.value
    ]

    return {
        errors,
        data
    }
}