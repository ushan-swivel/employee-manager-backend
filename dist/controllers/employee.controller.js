"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _employeeService = _interopRequireDefault(require("../services/employee.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let EmployeeController = class EmployeeController {
    constructor(){
        this.employeeService = new _employeeService.default();
        this.getEmployees = async (req, res, next)=>{
            try {
                const findAllUsersData = await this.employeeService.findAllUser();
                res.status(200).json({
                    data: findAllUsersData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        };
        this.getEmployeeById = async (req, res, next)=>{
            try {
                const userId = req.params.id;
                const findOneUserData = await this.employeeService.findUserById(userId);
                res.status(200).json({
                    data: findOneUserData,
                    message: 'findOne'
                });
            } catch (error) {
                next(error);
            }
        };
        this.createEmployee = async (req, res, next)=>{
            try {
                const userData = req.body;
                const createUserData = await this.employeeService.createEmployee(userData);
                res.status(201).json({
                    data: createUserData,
                    message: 'created'
                });
            } catch (error) {
                next(error);
            }
        };
        this.updateEmployee = async (req, res, next)=>{
            try {
                const userId = req.params.id;
                const userData = req.body;
                const updateUserData = await this.employeeService.updateEmployee(userId, userData);
                res.status(200).json({
                    data: updateUserData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        };
        this.deleteEmployee = async (req, res, next)=>{
            try {
                const userId = req.params.id;
                const deleteUserData = await this.employeeService.deleteEmployee(userId);
                res.status(200).json({
                    data: deleteUserData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
const _default = EmployeeController;

//# sourceMappingURL=employee.controller.js.map