import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import EmployeeController from '@/controllers/employee.controller';
import { CreateEmployeeDto } from '@/dtos/employee.dto';

class EmployeeRoute implements Routes {
  public path = '/employee';
  public router = Router();
  public employeeController = new EmployeeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.employeeController.getEmployees);
    this.router.get(`${this.path}/:id`, this.employeeController.getEmployeeById);
    this.router.post(`${this.path}`, validationMiddleware(CreateEmployeeDto, 'body'), this.employeeController.createEmployee);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateEmployeeDto, 'body', true), this.employeeController.updateEmployee);
    this.router.delete(`${this.path}/:id`, this.employeeController.deleteEmployee);
  }
}

export default EmployeeRoute;
