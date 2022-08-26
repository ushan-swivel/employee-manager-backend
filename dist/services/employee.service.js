"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _employeeModel = _interopRequireDefault(require("../models/employee.model"));
const _util = require("../utils/util");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let UserService = class UserService {
    async findAllUser() {
        const users = await this.employees.find();
        return users;
    }
    async findUserById(employeeId) {
        if ((0, _util.isEmpty)(employeeId)) throw new _httpException.HttpException(400, 'Employee Id is empty');
        const findUser = await this.employees.findOne({
            _id: employeeId
        });
        if (!findUser) throw new _httpException.HttpException(409, "Employee doesn't exist");
        return findUser;
    }
    async createEmployee(userData) {
        if ((0, _util.isEmpty)(userData)) throw new _httpException.HttpException(400, 'userData is empty');
        const findUser = await this.employees.findOne({
            email: userData.email
        });
        if (findUser) throw new _httpException.HttpException(409, `This email ${userData.email} already exists`);
        const createUserData = await this.employees.create(_objectSpread({}, userData));
        return createUserData;
    }
    async updateEmployee(userId, userData) {
        if ((0, _util.isEmpty)(userData)) throw new _httpException.HttpException(400, 'userData is empty');
        if (userData.email) {
            const findUser = await this.employees.findOne({
                email: userData.email
            });
            if (findUser && findUser._id != userId) throw new _httpException.HttpException(409, `This email ${userData.email} already exists`);
        }
        const updateUserById = await this.employees.findByIdAndUpdate(userId, {
            userData
        });
        if (!updateUserById) throw new _httpException.HttpException(409, "User doesn't exist");
        return updateUserById;
    }
    async deleteEmployee(userId) {
        const deleteUserById = await this.employees.findByIdAndDelete(userId);
        if (!deleteUserById) throw new _httpException.HttpException(409, "User doesn't exist");
        return deleteUserById;
    }
    constructor(){
        this.employees = _employeeModel.default;
    }
};
const _default = UserService;

//# sourceMappingURL=employee.service.js.map