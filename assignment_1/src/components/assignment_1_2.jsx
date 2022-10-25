// modify the above component to pass these values as props

import React from 'react'


function Car(props){
    
    const cars = props.car
    
    return (
        <div>
            <h1>Car Component:</h1>
               <hr />
               <div>
                   <h2>Car model: {cars.model}</h2>
                   <h2>Car company: {cars.company}</h2>
                   <h2>Car price: {cars.price}</h2>
               </div>  
               <hr />
            
            <h1>Configuration:</h1>
            <hr />
            <div>
                <h2>Car color: {cars.configuration.color}</h2>
                <h2>Car fuel: {cars.configuration.fuel}</h2>
                <h2>Car cylinder: {cars.configuration.cylinder}</h2>
                <h2>Car fuelTankCapacity: {cars.configuration.fuelTankCapacity}</h2>

            </div>
             <hr />
 
             <h1>Mileage:</h1>
            
            <hr />
            <div>
                <h2>Car City: {cars.configuration.mileage.city}</h2>
                <h2>Car Highway: {cars.configuration.mileage.highway}</h2>
            </div>
            <hr />
            <h1>Features:</h1>
            <hr />
            
            <div>
            {
            cars.features.map((value)=>{
                return (
               <h2> {value}</h2>
            )
           })
        } 
       
            </div>

        </div>
    )
}

const Assignment_1_2 = () => {

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
    <div>
        <Car car = {car}/>
    </div>
  )
}

export default Assignment_1_2