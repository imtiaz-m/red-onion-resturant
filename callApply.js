const normalPerson = {
    firstName:'Rahim',
    lastName:'Uddin',
    salary:16000,
    getFullName:function(){
        console.log(this.firstName, this.lastName)
            
    },
    chargeBill: function(amount, tax,bonus){
        console.log(this);
        this.salary = this.salary-amount + bonus - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName:'Hero',
    lastName:'Alam',
    salary:25000,
}

const zeroPerson = {
    firstName:'zero',
    lastName:'Alam',
    salary:10000,
}
// //normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary)

// const zeroChargeBill = normalPerson.chargeBill.bind(zeroPerson);
// zeroChargeBill(5000);




// normalPerson.chargeBill.call(heroPerson,100 ,6000,900);
// normalPerson.chargeBill.call(zeroPerson,2000);
// console.log(heroPerson.salary);
// console.log(zeroPerson.salary);

// normalPerson.chargeBill.call(zeroPerson,1000,500,500);
// console.log(zeroPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[3000,300,200]);
console.log(heroPerson.salary)
    