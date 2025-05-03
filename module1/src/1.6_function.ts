function add (num1: number, num2: number):number{
    return num1+num2;
}

//arrow function

const addArrow =  (number1:number, number2:number):number => number1+number2;

//function in object is called METHOD

const poorUser = {
    name: 'mushfiq',
    balance: 4,
    addBalance(balance:number):number
    {
      return   this.balance + balance ;
    }
}

const arr: number[] = [1,2,3]

const newArray: number[] = arr.map((element:number ):number=> element*element)