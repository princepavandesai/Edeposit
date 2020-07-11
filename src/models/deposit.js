const mongoose=require('mongoose')

const depositschema= mongoose.Schema({
    TDate:{
            type:Date,
            required:true
            //default:Date.now
    },
    Acct_type:{
        type:String,
        required:true
    },
    Trans_type:{
        type:String,
        default:'Deposit'
    },
    Cust_name:{
        type:String,
        required:true
    },
    Acct_number:{
        type:Number,
        required:true,
        min:0000000001,
        max:9999999999
    },
    Cash_Deposit:{
        type:Number,
        max:9999999999
    },
    Check_Deposit:{
        type:Number
    },
    Cash_back:{
        type:Number
    },
    Subtotal:{
        type:Number,
        required:true
    },
    Total:{
        type:Number,
        required:true
    }
}, {
    timestamps:true
})

const Deposit=mongoose.model('Deposit',depositschema);
module.exports=Deposit;
