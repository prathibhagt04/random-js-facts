var factsCollection=[
    {
        heading:"Difference between premitive and reference datatypes?",
        description:"premitive - value is copied at different locations and reference- values are pointed to the same memory location " 
    },
    {
        heading:"What's a creation phase?",
        description:"When you execute in the global scope or when u call a function  , the function scope now goes through creation phase and then initializations and later executions takes place. "
    },
    {
        heading:"What's type coercion?",
        description:"This is what javascript does for you! It implicitly converts the types of the values during various operations"
    },
    {
        heading:"What's a template literal?",
        description:"template literals are string literals that allow some embedded expressions eg:`Hi ${this.name}` "
    },
    {
        heading:"How is array an object??",
        description:"Array is implicitly seen by javascript as {0:value1 1:value2 2:value3} so Typeof(array) is always going to be object"
    },
    {
        heading:"What is 'this' in the global context?",
        description:"'this' is window object if not bounded within any object"
    },
    {
        heading:"Diference between function declaration and function expression?",
        description:"function declaration - function is stored in the memory during creation phase itself. Whereas, function expression - since function is assigned to a variable, the value of the variable is undefined in the creation phase and the function is stored in the memory during execution phase"
    },
    {
        heading:"HTML collection vs nodelist",
        description:"Nodelist is a list that can be directly used for iteration while HTML collection needs to be converted into an array and then can be used for iteration"
    },
    {
        heading:"when to use == or ===?",
        description:"== will not check type but checks only value by doing type coertion === will check both type and value. eg: '2'==2 //true , '2'===2 //false "
    },
    {
        heading:"What is event looping?",
        description:"When an asynchronous function is executed, the control of it goes to the web api while the rest of the code continues to execute. When the response is got back from the web api, the result is waited in the Queue stack until the complete execution stack is empty. The responses are executed in a queue after that."
    }
    ]

document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector(".infodiv").style.visibility="visible";
    randIndex=Math.floor(Math.random()*10);
    document.querySelector(".heading-info").innerHTML=factsCollection[randIndex].heading;
    document.querySelector(".desc-info").innerHTML=factsCollection[randIndex].description;
})