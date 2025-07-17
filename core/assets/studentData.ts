// core/assets/studentData.ts
export interface Student {
  id: number;
  fullName: string;
}

// Membuat 130 nama dummy
export const studentList: Student[] = Array.from({ length: 130 }, (_, i) => ({
  id: i + 1,
  fullName: `Mahasiswa Angkatan '22 No. ${i + 1}`,
}));