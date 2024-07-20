// const currentMatch = async ()=>
// {
//     try{
//        let res = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e6f0c95e-49e4-4274-a903-6bda3a827edb&offset=0")
//            let jsonData = await res.json()
//        console.log(jsonData)

//     }

//     catch(err)
//     {
//         return err
//     }
// }

// currentMatch();

// console.log("hy");

// const Matches = ()=>
// {
//     console.log(1);
//     fetch("https://api.cricapi.com/v1/currentMatches?apikey=e6f0c95e-49e4-4274-a903-6bda3a827edb&offset=0")
//     .then((res)=>{

//     console.log(2);

//         return res.json()
//     }).then((apiData)=>{
//         console.log(apiData);
//     })
//     console.log(3);
// }

// Matches();

// -----------------

// function timer() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         // console.log(x);
//       }, i * 1000);
//     }
//     close(i);
//   }
// }

// timer();

// --------------

// const val = [2, 6, 9, 5, 2, 4];

// function double(x) {
//   return x * 2;
// }

// function findBig(x) {
//   return x <= 5;
// }

// const newArr = val.map(double);

// const newArr = val.filter(findBig);

// const newArr = val.reduce(function (acc,curr) {
//     return acc = acc+curr;
// },0);



// console.log(newArr);

// ---------

// const val = [2, 5, 1, 4, 9];

//   val.sort();

//   let max = val[0]
//   let min = val[0]
  
//     function shortest(val)
//     {
//       for(let i=0; i<val.length; i++)
//       {
//           if(val[i] > max)
//           {
//             max = val[i];
//           }

//           if(val[i] < min)
//             {
//               min = val[i];
//             }
//       }
//     }

//    shortest(val);

  // console.log(max,min);

  // -------------------

//   const users = [
//     {firstName:'kds',lastName:'dkd',age:23},
//     {firstName:'rds',lastName:'malh',age:26},
//     {firstName:'fds',lastName:'bagd',age:24},
//     {firstName:'sds',lastName:'gayri',age:26},
//   ]

//   const newUser = users.reduce(function(acc,curr)
// {
//     if(curr.age <= 25)
//     {
//       acc.push(curr.firstName);
//     }

//     return acc;
// },[])

// console.log(newUser);

// ----------------


// const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);

// console.log(user);

// -------------

// const cart = ['shoes','pants','kurtas'];

//   createOrder(cart,function(orderId){
//       proceedToPayment(orderId, function(paymentInfo){
//         showOrder(paymentInfo, function(){
//           updateWallet();
//         });
//       });
//   });

//   const promise = createOrder(cart);

//   promise.then(function(orderId){
//     proceedToPayment(orderId);
//   });

//   createOrder(cart)
//   .then(function(orderId){
//     proceedToPayment(orderId);
//   });

// ----------------

// useMemo(() => function sum(a,b)
// {
//   return a + b;
// }, [a,b])


// sum(3,4);


// import Counter from ".."
// function App()
// {
//   const [count,setCount] = useState(0);
//    return(
//       <div className="App">
//         <h1>{count}</h1>
//         <button onClick={Counter(increment,setCount)} >Increment</button> <br />
//         <button onClick={Counter(decrement,setCount)} >Decrement</button> <br />
//       </div>
//   )
// }

// function Counter(props)
// {
//     if(props.increment)
//     {
//       setCount(count++);
//     }
//     if(props.decrement)
//     {
//       setCount(count--);
//     }
// }

// export default Counter;

// ----------------------------

import React from "react";
import ReactDOM from "react-dom/client"




const parent = React.createElement(
  "div", 
  {class:"parent"}, 
  [
    React.createElement(
      "div",
    {class:'child1'},
    [React.createElement(
        "h1",
        {class:'title'},
        "I'am an H1 Tags"
      ),
      React.createElement(
        "h2",
        {class:'title'},
        "I'am an H2 Tag"
      )
    ]
  ),
  React.createElement(
    "div",
  {class:'child2'},
  [React.createElement(
      "h1",
      {class:'title'},
      "I'am an H1 Tag"
    ),
    React.createElement(
      "h2",
      {class:'title'},
      "I'am an H2 Tag"
    )
  ]
)
  ]
);

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)  

