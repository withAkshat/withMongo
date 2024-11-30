const mongoose = require('mongoose');

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/amazon');
    
};


main()
.then()
.catch((err)=>
    console.log(err)
);


const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength:50
    },

    author:{
        type:String
    },

    price:{
        type:Number,
        min: [1, "Price is too low for Amazon for Selling"]
    },

    discount: {
        type:Number,
        default:0,

    },

    category:{
        type:String,
        enum:["fiction", "non-fiction"]
    },

    genre:[String]
});

const Book = mongoose.model("Book", bookSchema);

// const Book2 = new Book({
//     title:"No mirror in Men's Washroom",
//     author:"New Author",
//     price:699,
//     genre:["Non Fiction", "SelfHelp"]
// })

// Book2.save()
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// }) 

Book.findByIdAndUpdate('674acc6358fd8e887aef7514', {price: -200}, {runValidators : true})
.then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
    
});