const inventory = [
    { id: 1, car_make: "", car_model: "", car_year: }
    { id: 1, car_make: "", car_model: "", car_year: }
    { id: 1, car_make: "", car_model: "", car_year: }
    {
        id: 1
        car_make: "",
        car_model: "",
        car_year: 
    }
    { id: 1, car_make: "", car_model: "", car_year: }
]

const getCarMake = (carInventory, car_make) => {
    let mycar = carInventory.find((item) => item.car_male);
    return `This is a ${mycar,car_make} ${mycar.car_model} from ${mycar.car_year}`;
};

console.log(getCarMake(inventory, "Mazda"))