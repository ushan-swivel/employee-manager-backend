import { model, Schema, Document, ObjectId } from 'mongoose';
import { Employee } from '@interfaces/employee.interface';

const employeeSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

employeeSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const userModel = model<Employee & Document>('Employee', employeeSchema);

export default userModel;
