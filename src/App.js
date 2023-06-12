// EXAMPLE 1 
//import React from "react";
// function App() {
//   //javascript
//   //console.log('hello from component');
//   //here, date is a class
//   const now=new Date();
//   const a=10;
//   const b=20;
//   console.log(now, a+b);
//   return (
//     // <div>
//     //here "now" is a object so it cant be rendered, so we need to pass it as string.
//     //   <p>Hello World, it is {now.toString()}</p>
//     //   <p>
//     //     {a} plus {b} is {a+b}
//     //   </p>
//     // </div>
//   
//   );
// }

// export default App;

//EXAMPLE 2

//To get an new react component- jus type "rfce" and press enter.
import React from 'react'
//props is used for passing the data from one component to another component.
// the below hello is the child component.
function Hello(props){
  return(
    <div>
      <p>Hello! {props.name}, you are {props.age} years old!</p>
    </div>
  )
}
//the below app is the parent component
function App() {
  const age=22;
  return (
    <div>
         <h1>greetings</h1>
         <Hello name='lalitha' age={13+10}/>
         <Hello name='sanjay' age={age}/>
         <Hello name='santhosh' age={age}/>
      </div>
  )
}

export default App;