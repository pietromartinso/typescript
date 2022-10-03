import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){

  //Passing a "Course" (interface) as argument -> object attribute order doesn't matter
  CreateCourseService.execute({
    name: "NodeJS", 
    duration: 10, 
    educator: "Dani"
  });

  CreateCourseService.execute({
    name: "Teste", 
    educator: "Jeremias"
  });

  return response.send();
}