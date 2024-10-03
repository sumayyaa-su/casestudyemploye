const express=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));
app.set('view engine','ejs');
app.set('views',__dirname+'/view');

require('dotenv').config();
const PORT=process.env.PORT;
app.use(express.static('public'))

require('./db/employee');
const nav = [{link:"/employees",name:'Home'},
    {link:'/employees/employeeAdd',name:'Add Employee'}
]
//for update
//const button = [{link:'employees/employeeUpdate/',name:'Update'}]









const employeeRoutes=require('./routes/employeeroutes')(nav);
app.use('/employees',employeeRoutes);






app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});