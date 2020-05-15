var name = 'Rahim';

function add (num1,num2){
    var result = num1*num2;
    console.log('name inside', name);
    function double (num){
        return num*2;

    }
    var total = double(result);

    return total;
}
console.log ('result outside',result);
var sum = add(10,12);
console.log(sum);
console.log ('result outside',result)
// console.log('outside name',name);
