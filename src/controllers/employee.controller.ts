import { NextFunction, Request, Response } from 'express';
import employeeService from '@/services/employee.service';
import { Employee } from '@/interfaces/employee.interface';
import { CreateEmployeeDto } from '@/dtos/employee.dto';

class EmployeeController {
  public employeeService = new employeeService();

  public getEmployees = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: Employee[] = await this.employeeService.findAllUser();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getEmployeeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneUserData: Employee = await this.employeeService.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateEmployeeDto = req.body;
      const createUserData: Employee = await this.employeeService.createEmployee(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const userData: CreateEmployeeDto = req.body;
      const updateUserData: Employee = await this.employeeService.updateEmployee(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const deleteUserData: Employee = await this.employeeService.deleteEmployee(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default EmployeeController;
