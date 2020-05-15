class person {
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName=lastName;
        this.salary= salary;

    }
}
const heroPerson = new person('Hero','Alam',25000);
console.log(heroPerson);
const zeroPerson = new person('zero','Alam',2000);
console.log(zeroPerson)