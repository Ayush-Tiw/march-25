// The Fetch () API with CRUD operation

// const url="https://62480626229b222a3fd353a1.mockapi.io/ayush/friends";

//Fetch data from server

// fetch(url)
// .then((response)=>response.json())
// .then((data)=>console.log(JSON.stringify(data)))

//INSERT DATA

// const data={
//     name:"Ayush",
//     country:"India",
//     image:"example.com"
// }

// //FETCH THE URL
// fetch(url,{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json",
//     },
//     //INSERT THE DATA BY USING POST METHOD
//     body:JSON.stringify(data)
// }).then((response)=>response.json())
// .then((data)=>{
//     console.log("data inserted")
// }).catch((error)=>{
//     console.log("error: ", error)
// })
//promise chaining
//CALLING THE PROMISE


// UPDATING THE DATA-->PUT method
 

// const url="https://62480626229b222a3fd353a1.mockapi.io/ayush/friends/4"
// const data={
//     name:"Manish",
//     country:"America",
//     image:"manish.com"

// };

// fetch(url,{
//     method:"PUT",
//     headers:{
//         "Content-Type":"application/json",
//     },
    
//     body:JSON.stringify(data)
// }).then((response)=>response.json())
// .then((data)=>{
//     console.log("data inserted")
// }).catch((error)=>{
//     console.log("error: ", error)
// })

// DELETING A DATA

const url="https://62480626229b222a3fd353a1.mockapi.io/ayush/friends/4";

fetch(url,{
    method:"DELETE"
}).then(console.log("data deleted"));


// CLASS TASK

// you have to use Fetch() API for following:-

// 1.create input boxes and a button to insert Name,Location,country into your mock api
// 2.when you press the button data will inserted

// 3.in the index page you should display all the data in form of a table

// 4.their should be option for updating and deleting a specific data based on ID number

// Logic

// 1.convert the input data into json format 
// 2.now push the form data which is in the form of JSON  into the mock api
// 3update
// 4.delete