const greetUser = function(){
    const UserName = prompt("Enter your name :");
    if(UserName){
        console.log(`Hello,${UserName}!`);
    }
    else{
        console.log("Hello, Guest!")
    }
}
greetUser();