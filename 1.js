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




// let button=document.getElementById("insert");

// button.addEventListener("click",function(){
    
// //     let Name=document.getElementById("name").value;
// // let Location=document.getElementById("location").value;
// // let Country=document.getElementById("country").value;

// const data={
// name:document.getElementById("name").value,
// location:document.getElementById("location").value,
// country:document.getElementById("country").value
// }

// const url="https://62481d4e4bd12c92f407a5a7.mockapi.io/ayush/friends"

    
//     fetch(url,{
//         method:"POST",
//         header:{
//             "Content-Type":"application/json",
//         },
//         body:JSON.stringify(data)
//     }).then((response)=>response.json())
//     .then((data)=>{
//         console.log("data inserted")
//         .catch((error)=>{
//             console.log("error: ",error)
//         })
//     })
// })





let button=document.getElementById("insert");
button.addEventListener("click",function(){
    
    //     let Name=document.getElementById("name").value;
    // let Location=document.getElementById("location").value;
    // let Country=document.getElementById("country").value;
    
    const data={
    name:document.getElementById("name").value,
    location:document.getElementById("location").value,
    country:document.getElementById("country").value
    }
    
    let id=document.getElementById("id").value
    const url=`https://62481d4e4bd12c92f407a5a7.mockapi.io/ayush/friends${id}`
    
        
        fetch(url,{
            method:"PUT",
            header:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }).then((response)=>response.json())
        .then((data)=>{
            console.log("data inserted")
            .catch((error)=>{
                console.log("error: ",error)
            })
        })
    })