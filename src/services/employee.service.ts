import { CreateEmployeeDto } from '@/dtos/employee.dto';
import { HttpException } from '@exceptions/HttpException';
import { Employee } from '@interfaces/employee.interface';
import employeeModel from '@models/employee.model';
import { isEmpty } from '@utils/util';

class UserService {
  public employees = employeeModel;

  public async findAllUser(): Promise<Employee[]> {
    const users: Employee[] = await this.employees.find();
    return users;
  }

  public async findUserById(employeeId: string): Promise<Employee> {
    if (isEmpty(employeeId)) throw new HttpException(400, 'Employee Id is empty');

    const findUser: Employee = await this.employees.findOne({ _id: employeeId });
    if (!findUser) throw new HttpException(409, "Employee doesn't exist");

    return findUser;
  }

  public async createEmployee(userData: CreateEmployeeDto): Promise<Employee> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: Employee = await this.employees.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const createUserData: Employee = await this.employees.create({ ...userData });

    return createUserData;
  }

  public async updateEmployee(userId: string, userData: CreateEmployeeDto): Promise<Employee> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    if (userData.email) {
      const findUser: Employee = await this.employees.findOne({ email: userData.email });
      if (findUser && findUser._id != userId) throw new HttpException(409, `This email ${userData.email} already exists`);
    }
    const updateUserById: Employee = await this.employees.findByIdAndUpdate(userId, { ...userData }, { new: true });
    if (!updateUserById) throw new HttpException(409, "User doesn't exist");
    console.log(updateUserById);
    return updateUserById;
  }

  public async deleteEmployee(userId: string): Promise<Employee> {
    const deleteUserById: Employee = await this.employees.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

    return deleteUserById;
  }
}

export default UserService;
