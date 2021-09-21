const mongoose = require('mongoose');
const {Schema}= mongoose;

const EmployeeSchema = new Schema({
    nombre : { type: String, required:true},
    apellido : { type: String, required:true},
    cedula : { type: Number, required:true}
})

module.exports = mongoose.model('Employee', EmployeeSchema);