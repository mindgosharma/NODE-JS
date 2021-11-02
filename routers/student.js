const express = require("express");
const router = express.Router()
const Student = require("../src/models/students");

//using .then
// app.post('/students',(req, res)=>{
//       const user = new Student(req.body)
//       user.save().then(()=>{
//            res.status(201).send(user)
//       }).catch((err)=>{
//            res.status(401).send(err)
//       })
// })

//Using async await creating student
router.post('/students', async(req, res)=>{
    try{
         const student = new Student(req.body);
         const createdStudent = await user.save(student)
         res.status(201).send(createdStudent)
    }catch(err){
         res.status(400).send(err)
    }

})

//Getting all students data which have been created
router.get('/students', async(req, res)=>{
    try{
         const studentsData = await Student.find();
         res.status(200).send(studentsData)
    }catch(err){
         res.status(400).send(err)
    }

})

//Getting a student data which have been created all
router.get('/students/:_id', async(req, res)=>{
    try{
         const _id = (req.params._id)
         const studentData = await Student.findById(_id)
         res.status(200).send(studentData)
    }catch(err){
         res.status(500).send(err)
    }
})

//Update student data
router.patch('/students/:_id', async(req, res)=>{
   try{
         const _id = (req.params._id)
         const updatedStudentData = await Student.findByIdAndUpdate(_id, req.body,{
             new: true
         })
         res.status(200).send(updatedStudentData)
   }catch(err){
        res.status(500).send(err)
   }
})

//Delete student data
router.delete('/students/:_id', async(req, res)=>{
   try{
         const _id = (req.params._id)
         const deletedStudentData = await Student.findByIdAndDelete(_id)
         res.status(200).send(deletedStudentData)
   }catch(err){
         res.status(500).send(err)
   }
})

module.exports=router