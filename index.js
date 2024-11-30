const mongoose = require('mongoose');

async function main(){
mongoose.connect('mongodb://127.0.0.1:27017/test');

}

main()
.then(()=>{
    console.log("connection is successful");
    
})
.catch((err)=>
    console.log(err)
)


const userSchema = new mongoose.Schema({
    name:String,
    Email: String,
    Age: Number,
})  

// const Employee = mongoose.model("Employee",userSchema)

const User = mongoose.model("User",userSchema)

// const user1 = new User({name:"Kanishk" , Email : "Kyu@bhai.in" , Age: 12 })



// const user2 = new User({name:"Bhola", Email:"tanjiro@slayer.com", Age:19 })

// user2.save()
//     .then((res)=>{
//         console.log(res);
        
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     });


// User.insertMany([
//         {
//             Name:"Tony",
//             Email:"saynototony@gmail.com",
//             Age:12
//     },

//     {
//         name:"Yahoo",
//         Email:"Yahoo@gmiail.in",
//         Age:21
//     },
// ])
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })


// To find

// User.find({ Age: {$gt : 19 } })
// .then((res)=>{
//     console.log(res[0]);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// User.find({ _id:"6749f2d959ed2ecfd2bc3214" })
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// User.findById( "6749f2d959ed2ecfd2bc3214" )
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// -----------------------------------------------------------------------------------


// To Update

// User.updateOne({ name:"Kanishk" }, { Age: "22" })
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err=>{
//     console.log(err);
    
// }))


// User.updateMany({Age : {$gt :19 }}, { Age: 22 })
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err=>{
//     console.log(err);
    
// }));

// -----------------------------------------------------------------------------------

// To delete 

// User.deleteOne({name:"Bhola"}).then((res)=>{
//     console.log(res);
    
// }).catch((err) => console.log(err));


User.findByIdAndDelete("6749f2d959ed2ecfd2bc3213")
.then((res)=>{
    console.log(res);
    
})

.catch((err)=>{
    console.log(err);
    
})