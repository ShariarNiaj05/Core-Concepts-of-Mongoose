import { Request, Response } from 'express';
import { StudentServices } from './student.serivice';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    //will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(student);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Unable to Process the Request To Create Student',
    });
  }
};

export const StudentControllers = {
  createStudent,
};
