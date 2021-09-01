export interface Course {
  id: string;
  name: string;
  description: string;
  pages: Page[];
}

export interface Page {
  id: number;
  course: string;
  content: string;
}

export interface CourseEnrollment {
  course: Course;
  status: "passed" | "failed" | "in-progress";
};
