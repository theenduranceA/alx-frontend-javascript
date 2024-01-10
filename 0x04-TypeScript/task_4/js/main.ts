import { Subjects } from './subjects/Teacher';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Create and export constants
export const cpp: Cpp = new Cpp();
export const java: Java = new Java();
export const react: React = new React();

// Create a Teacher object with experienceTeachingC
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};
