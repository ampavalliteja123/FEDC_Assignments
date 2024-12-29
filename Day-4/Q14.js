const profile ={
    name : "Charlie",
    age : 29,
    address :{
        city :"San Francisco", 
        zipcode: "94101"
    }
};

const Updates = {
    age : 30,
    address : {
        zipcode: "94109", 
        country: "USA" 
    }
};

const MergedProfile = {
    ...profile,...Updates,
    address : {
        ...profile.address, 
        ...Updates.address
    }
};

console.log(MergedProfile);

// the output will be

/*{
  name: 'Charlie',
  age: 30,
  address: { city: 'San Francisco', zipcode: '94109', country: 'USA' }
}*/