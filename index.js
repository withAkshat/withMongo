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

const user1 = new User({name:"Kanishk" , Email : "Kyu@bhai.in" , Age: 12 })

user1.save()

