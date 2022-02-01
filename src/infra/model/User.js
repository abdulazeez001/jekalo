const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,'First name is required'],
    },
    last_name:{
        type:String
    },
    name_prefix:{
        type:String
    },
    username:{
        type:String,
        required:[true,'Username is required'],
        unique:[true,'Username already exist']
    },
    date_of_birth:{
        type:String,
        required:[true,'Date of birth is required'],
        match:[
            /^\d{2}[\-]\d{2}[\-]\d{4}$/,
            'Please provide a valid date of birth'
        ]
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})

UserSchema.pre('save',async function(next){
    const firstname_first_letter = this.first_name.split('')[0]
    if(this.last_name){
        const lastname_first_letter = this.last_name.split('')[0]
        this.name_prefix = `${firstname_first_letter}${lastname_first_letter}`.toUpperCase()
        return
    }
    this.name_prefix = `${firstname_first_letter}`.toUpperCase()
    return
})

module.exports = mongoose.model('user',UserSchema)