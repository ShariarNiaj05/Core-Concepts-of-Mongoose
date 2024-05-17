import { IStudent } from './students.interface';
import Student from './students.model';

const createStudentIntoDB = async (student: IStudent) => {
  const result = await Student.create(student);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};
