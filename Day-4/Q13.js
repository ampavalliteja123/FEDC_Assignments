// given a array of object
const people = [
    // object 1
    {
        name :"Alice",
        address :{
            city:"NewYork",
            street :{
                name : "Broadway",
                number: 123
            }
        }
    },
    // object 2
    {
        name :"Bob",
        address :{
            city:"Los Angeles",
            street :{
                name : "Sunset Boulevard",
                number: 456
            }
        }
    }

];

const output = people.map(({ name, address: { city, street: { name: streetName } } }) =>{
    return `${name} lives in ${city} on ${streetName}`;
}) 

console.log(output);