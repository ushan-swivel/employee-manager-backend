"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _validationMiddleware = _interopRequireDefault(require("../middlewares/validation.middleware"));
const _employeeController = _interopRequireDefault(require("../controllers/employee.controller"));
const _employeeDto = require("../dtos/employee.dto");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let EmployeeRoute = class EmployeeRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.employeeController.getEmployees);
        this.router.get(`${this.path}/:id`, this.employeeController.getEmployeeById);
        this.router.post(`${this.path}`, (0, _validationMiddleware.default)(_employeeDto.CreateEmployeeDto, 'body'), this.employeeController.createEmployee);
        this.router.put(`${this.path}/:id`, (0, _validationMiddleware.default)(_employeeDto.CreateEmployeeDto, 'body', true), this.employeeController.updateEmployee);
        this.router.delete(`${this.path}/:id`, this.employeeController.deleteEmployee);
    }
    constructor(){
        this.path = '/employee';
        this.router = (0, _express.Router)();
        this.employeeController = new _employeeController.default();
        this.initializeRoutes();
    }
};
const _default = EmployeeRoute;

//# sourceMappingURL=employee.route.js.map