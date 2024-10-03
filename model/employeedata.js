const mongoose=require('mongoose');
//creating the schema
const employeeSchema=mongoose.Schema({
      employeeName:String,
      employeeDesignation:String,
      employeeLocation:String,
      employeeSalary:Number
})
const employeeData=mongoose.model('employee',employeeSchema);//schema mapping
module.exports=employeeData;//export the schema