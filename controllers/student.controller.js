const studentModel = require("../models/students.model");

async function students(req, res, next) {
  const students = await studentModel.find({isActive: true});
  //   console.log(students);
  return res.render("students", { user: students });
}

async function addStudent(req, res, next) {
  const { enrollment, name } = req.body;

  const student = new studentModel({
    roll: enrollment,
    name: name,
  });

  await student.save();
  return res.redirect("/");
}

async function studentData(req, res, next) {
//   console.log(req.params.id);
  const id = req.params.id;
  const student = await studentModel.findOne({ _id: id });
  console.log(student);
  return res.send(student);
}

async function editStudent(req, res, next) {
  const { id, enrollment, name } = req.body;

  const student = await studentModel.findOne({ _id: id });

  student.roll = enrollment;
  student.name = name;

  await student.save();
  return res.redirect("/");
}

async function deleteStudent(req,res,next) {
    const {deleteId} = req.body;
    console.log(deleteId);
    // const student = await studentModel.findOne({ _id: deleteId });

    // student.isActive = false;
    // await student.save();

    await studentModel.deleteOne({_id: deleteId});

    res.json({ success: true });
}

module.exports = { students, addStudent, studentData, editStudent,deleteStudent };
