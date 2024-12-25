function determineAccess(person){
    switch(person.role){
        case "admin":
            return person.active
            ? person.experience > 5 && person.department === "IT"
              ? "Full IT Admin Access"
              :person.experience > 5
               ? "Full General Admin Access"
               : "Limited Admin Access"
            : "Admin Access Revoked";
        case "manager":
            return person.active
            ? person.experience > 3 && person.department === "Sales"
              ? "Full Sales Manager Access"
              :person.experience > 3
               ? "Full Manager Access"
               : "Limited Manager Access"
            : "Manager Access Revoked"
        case "user":
            return person.active
            ? person.department === "Support"
              ? "Priority Support Access" 
              : "User Access"
            : "User Access Revoked";
        default:
            return "Invalid Role";
    }
}

// give Examples in this question we can Use
let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
let person3 = { role: "user", experience: 2, active: true, department: "Support" };
let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };

console.log(determineAccess(person1)); 
console.log(determineAccess(person2)); 
console.log(determineAccess(person3));  
console.log(determineAccess(person4));