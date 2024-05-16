import { IStudent } from './students.interface';

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});
