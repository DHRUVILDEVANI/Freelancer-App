import mongoose from "mongoose";
import joi from 'joi';
import JoiObjectId from "joi-objectid";
const ObjectId = JoiObjectId(joi);

let projectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type : String,
      required : true
    },
    tags : [{
      type : String,
      default : []
    }],
    questions : [{
        type : String,
        default : []
    }],
    proposals : [{
        type : mongoose.Schema.Types.ObjectId,
        default : []
    }],
    cretedBy : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    file : {
        type : String,
        default : null
    },
    experienceLevel : {
        type : String,
        enum: ['basic', 'intermediate', 'expert'],
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    hiredPerson : {
        type : mongoose.Schema.Types.ObjectId,
        default : null,
    },
    isJobDone : {
        type : Boolean,
        default : false,
    },
    isPaymentDone : {
        type : Boolean,
        default : false,
    }
});

export const projectSchemaValidation = joi.object({
    title : joi.string().required(),
    description : joi.string().required(),
    createdBy : ObjectId().required(),
    experienceLevel : joi.string().required(),
    price : joi.number().required(),
});

export const Project = mongoose.model("Project", projectSchema);