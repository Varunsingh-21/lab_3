const testValue={
    'key':'value',
    'anotherKey':235,
    'complexKey':{
        'insideKey1':'insideValue1'
    },
    'arrayKey':[1,2,3],
    5:'some numbered index'
};



// console.log(testValue);
// console.log(testValue.key);
// console.log(testValue.arrayKey);
// console.log(testValue.complexKey);
// console.log(testValue.complexKey.insideKey1);
// console.log(testValue['key']);
// console.log(testValue[5]);




// console.log(JSON.stringify(testValue));


// const anotherKey=testValue.anotherKey;

//destructuring 
const {anotherKey,arrayKey,complexKey}=testValue;
console.log(anotherKey);
console.log(arrayKey);
console.log(complexKey);