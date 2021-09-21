const Employee = require('../models/employee')

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req,res)=>{
  const employees = await  Employee.find();
  res.json(employees);
}

employeeCtrl.createEmployee = async (req, res)=>{
    const employee = new Employee({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cedula: req.body.cedula
    });
    await employee.save();
    res.json({
        'status':'Employee saved'
    });
}

employeeCtrl.getEmployee = async (req, res)=>{    
  const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeCtrl.editEmployee = async (req, res)=>{
    const {id} = req.params;
    const employee = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        
    }
  await  Employee.findByIdAndUpdate(id, {$set: employee}, {new:true})
    res.json({status: 'Employee Updated'});
}

employeeCtrl.deleteEmployee = async (req, res)=>{
 await Employee.findByIdAndRemove(req.params.id);
 res.json({status: 'Employee Deleted'})
}

module.exports = employeeCtrl;