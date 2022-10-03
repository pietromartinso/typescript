"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    //Passing a "Course" (interface) as argument -> object attribute order doesn't matter
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Dani"
    });
    CreateCourseService_1.default.execute({
        name: "Teste",
        educator: "Jeremias"
    });
    return response.send();
}
exports.createCourse = createCourse;
