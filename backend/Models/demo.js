import mongoose, { mongo } from "mongoose";

const DemoSchema=new mongoose.Schema({
    greeting:String
});

const DemoModel=mongoose.model('Demo',DemoSchema);

export default DemoModel;