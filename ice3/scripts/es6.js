
(
function(){




console.log("es6.js loaded");

// #region ES6 Arrow Functions
// ES5





tadah();
function printNameES5(name){
    return ('ES5 Traditional Function: Hello ' + name);
}

const demoElement1=document.getElementById('demo_content_1');
demoElement1.innerText=printNameES5('varun');

// ES6
const printNameArrowFunction = (name)=>{
    return ('ES6 Traditional Function: Hello ' + name);
}
const demoElement2=document.getElementById('demo_content_2');
demoElement2.innerText=printNameArrowFunction('varun');

const printNameArrowImplicit = (name)=> `ES6 Traditional Function: Hello  ${name}`;

const demoElement3=document.getElementById('demo_content_3');
demoElement3.innerText=printNameArrowImplicit('varun');

//another method






// We can also write the above code without the return statement
// Called an implicit return





//#endregion ES6 Arrow Functions







//#region ES6 Function Parameters

// ES6 default parameters
function es5DefaultParameters(a,b){

    b=(typeof b !== 'undefined')? b:42;
    return a+b;
}

const demoElement4 =document.getElementById('demo_content_4');
demoElement4.innerText=`with a but not b:${es5DefaultParameters(5)}.
with a and b: ${es5DefaultParameters(5,7)}.`

// ES7 Default parameters in arrow functions (OOOOH!)

// New 'rest' parameters


function restParmeters(a,...rest){
    console.log(a,rest);
    return a+rest.reduce((a,b)=>a+b);
}

restParmeters(5,10,20,30,40,50);


//#endregion ES6 Function Parameters

//#region Cleaner Code

//#endregion Cleaner Code'
})()