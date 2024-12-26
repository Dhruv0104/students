require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const { dbConnect } = require("./utils/db.util");

const studentController = require("./controllers/student.controller");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("view engine", "ejs");

app.get("/", studentController.students);
app.post("/addStudent", studentController.addStudent);
app.get("/studentData/:id", studentController.studentData);
app.post("/editStudent", studentController.editStudent)
app.post("/deleteStudent", studentController.deleteStudent);

dbConnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("http://localhost:3000/");
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("DB Error");
  });
