const express = require('express');
const studentController = require('./../controllers/studentController');

const router = express.Router();

router
  .route('/')
  .get(studentController.getStudent)
  .post(studentController.createStudent);

router
  .route('/:id')
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;