"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateEmployeeDto", {
    enumerable: true,
    get: ()=>CreateEmployeeDto
});
const _genders = require("../constants/Genders");
const _classValidator = require("class-validator");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let CreateEmployeeDto = class CreateEmployeeDto {
};
__decorate([
    (0, _classValidator.IsEmail)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "email", void 0);
__decorate([
    (0, _classValidator.IsMobilePhone)('si-LK', {
        message: 'Only Valid Sri Lankan Numbers Are Allowed!'
    }),
    __metadata("design:type", Number)
], CreateEmployeeDto.prototype, "number", void 0);
__decorate([
    (0, _classValidator.Allow)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "id", void 0);
__decorate([
    (0, _classValidator.Allow)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "firstName", void 0);
__decorate([
    (0, _classValidator.Allow)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "lastName", void 0);
__decorate([
    (0, _classValidator.IsIn)([
        _genders.GENDERS.MALE,
        _genders.GENDERS.FEMALE
    ]),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "gender", void 0);
__decorate([
    (0, _classValidator.Allow)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "photo", void 0);

//# sourceMappingURL=employee.dto.js.map