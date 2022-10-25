// create a component to print the details of following object


import React from 'react'

const Assignment_1_1 = () => {

    const car = {
     
        model: 'i20',
        company: 'Hyundai',
        price: 20,
        configuration: {
        color: 'gray',
        fuel: 'petrol',
        cylinder: 4,
        fuelTankCapacity: 37,
        mileage: {
        city: 14,
        highway: 20,
        },
        },
        features: ['touch screen', 'bluetooth', 'alloy wheels', 'powersteering'],
    }
    
    
  return (
    <>
    <h1>Car Component:</h1>
    <hr />
    <div>
        <h2>Car model: {car.model}</h2>
        <h2>Car company: {car.company}</h2>
        <h2>Car price: {car.price}</h2>
    </div>
    <hr />
    <h1>Configuration:</h1>

    <hr />
    <div>
        <h2>Car color: {car.configuration.color}</h2>
        <h2>Car fuel: {car.configuration.fuel}</h2>
        <h2>Car cylinder: {car.configuration.cylinder}</h2>
        <h2>Car fuelTankCapacity: {car.configuration.fuelTankCapacity}</h2>

    </div>
    <hr />
  <h1>Mileage:</h1>
    <hr />
    <div>
        <h2>Car City: {car.configuration.mileage.city}</h2>
        <h2>Car Highway: {car.configuration.mileage.highway}</h2>
    </div>
    <hr />
        <h1>Features:</h1>
        <hr />
    <div>
        {
           car.features.map((value)=>{
            return (
               <h2> {value}</h2>
            )
           })
        } 
       
    </div>
    <hr />
    </>
    
  )
}

export default Assignment_1_1