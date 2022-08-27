import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import request from 'supertest';
import App from '../app';
import { CreateEmployeeDto } from '../dtos/employee.dto';
import EmployeeRoute from '../routes/employee.route';



describe('Testing employees', () => {
  describe('[GET] /employee', () => {
    it('response fineAll Users', async () => {
      const employeeRoute = new EmployeeRoute();
      const employees = employeeRoute.employeeController.employeeService.employees;

      employees.find = jest.fn().mockReturnValue({
        data: [
          {
            firstName: 'Henri',
            lastName: 'Rodriguez',
            email: 'Darrin_Rippin@gmail.com',
            number: '+94771277218',
            gender: 'M',
            photo: 'https://randomuser.me/api/portraits/men/92.jpg',
            id: '6308fc149cdd992fa442b4b8',
          },
          {
            firstName: 'Lindsay',
            lastName: 'Herman',
            email: 'Ewald.Kunde@gmail.com',
            number: '+94771274218',
            gender: 'F',
            photo: 'https://randomuser.me/api/portraits/men/30.jpg',
            id: '6309dc2d964522056a9683eb',
          },
          {
            firstName: 'Gerda',
            lastName: 'Trantow',
            email: 'Mauricio.Stehr@yahoo.com',
            number: '+94771277681',
            gender: 'M',
            photo: 'https://randomuser.me/api/portraits/men/85.jpg',
            id: '6309dc48964522056a9683ee',
          },
        ],
        message: 'findAll',
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([new EmployeeRoute()]);
      return request(app.getServer()).get(`/api${employeeRoute.path}`).expect(200);
      
    });
  });

  describe('[GET] /employee/:id', () => {
    it('response findOne User', async () => {
      const id = '6309dc48964522056a9683ee';

      const employeeRoute = new EmployeeRoute();
      const employees = employeeRoute.employeeController.employeeService.employees;

      employees.findOne = jest.fn().mockReturnValue({
        data: {
          firstName: 'Gerda',
          lastName: 'Trantow',
          email: 'Mauricio.Stehr@yahoo.com',
          number: '+94771277681',
          gender: 'M',
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          id: '6309dc48964522056a9683ee',
        },
        message: 'findOne',
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([employeeRoute]);
      return request(app.getServer()).get(`/api${employeeRoute.path}/${id}`).expect(200);
    });
  });

  describe('[POST] /employee', () => {
    it('response Create User', async () => {
      const userData = {
        firstName: 'Gerda',
        lastName: 'Trantow',
        email: 'Mauricio.Stehr@yahoo.com',
        number: '0771277681',
        gender: 'M',
        photo: 'https://randomuser.me/api/portraits/men/85.jpg',
      };

      const employeeRoute = new EmployeeRoute();
      const employees = employeeRoute.employeeController.employeeService.employees;

      employees.findOne = jest.fn().mockReturnValue(null);
      employees.create = jest.fn().mockReturnValue({
        firstName: 'Gerda',
        lastName: 'Trantow',
        email: 'Mauricio.Stehr@yahoo.com',
        number: '0771277681',
        gender: 'M',
        photo: 'https://randomuser.me/api/portraits/men/85.jpg',
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([employeeRoute]);
      return request(app.getServer()).post(`/api${employeeRoute.path}`).send(userData).expect(201);
    });
  });

  describe('[PUT] /employee/:id', () => {
    it('response Update User', async () => {
      const userId = '60706478aad6c9ad19a31c84';
      const userData = {
        firstName: 'Gerdanama',
        lastName: 'Trantowewew',
        email: 'dsdsds.Stehr@yahoo.com',
        number: '0771377681',
        gender: 'F',
        photo: 'https://randomuser.me/api/portraits/men/83.jpg',
      };

      const employeeRoute = new EmployeeRoute();
      const employees = employeeRoute.employeeController.employeeService.employees;

      if (userData.email) {
        employees.findOne = jest.fn().mockReturnValue({
          firstName: 'Gerda',
          lastName: 'Trantow',
          email: 'Mauricio.Stehr@yahoo.com',
          number: '0771277681',
          gender: 'M',
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          id: '6309dc48964522056a9683ee',
        });
      }

      employees.findByIdAndUpdate = jest.fn().mockReturnValue(userData);

      (mongoose as any).connect = jest.fn();
      const app = new App([employeeRoute]);
      return request(app.getServer()).put(`/api${employeeRoute.path}/${userId}`).send(userData);
    });
  });

  describe('[DELETE] /employee/:id', () => {
    it('response Delete User', async () => {
      const userId = '60706478aad6c9ad19a31c84';

      const employeeRoute = new EmployeeRoute();
      const employees = employeeRoute.employeeController.employeeService.employees;

      employees.findByIdAndDelete = jest.fn().mockReturnValue({
        firstName: 'Gerda',
        lastName: 'Trantow',
        email: 'Mauricio.Stehr@yahoo.com',
        number: '0771277681',
        gender: 'M',
        photo: 'https://randomuser.me/api/portraits/men/85.jpg',
        id: '6309dc48964522056a9683ee',
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([employeeRoute]);
      return request(app.getServer()).delete(`/api${employeeRoute.path}/${userId}`).expect(200);
    });
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 2000));
  });
});
