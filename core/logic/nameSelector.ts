// core/logic/nameSelector.ts
import { studentList, Student } from '../assets/studentData';

const TOTAL_STUDENTS = studentList.length;

export const getNeighboringNames = (targetStambuk: number): Student[] => {
  const result: Student[] = [];
  const targetIndex = targetStambuk - 1; // Konversi ke index array (0-based)

  // Mengambil 5 nama SEBELUMNYA dengan logika wrapping
  for (let i = 5; i > 0; i--) {
    const prevIndex = (targetIndex - i + TOTAL_STUDENTS) % TOTAL_STUDENTS;
    result.push(studentList[prevIndex]);
  }

  // Mengambil 5 nama SETELAHNYA dengan logika wrapping
  for (let i = 1; i <= 5; i++) {
    const nextIndex = (targetIndex + i) % TOTAL_STUDENTS;
    result.push(studentList[nextIndex]);
  }

  return result;
};