import { useState, useRef, useEffect } from "react";
import { courses } from "../courses/courses";

export const useCourse = (courseName) => {
  const [course, setCourse] = useState({
    totalPages: -1,
    currentPage: 0,
    courseName: courseName,
    course: courses[courseName].course,
    currentView: courses[courseName].course[0],
  });

  useEffect(() => {
    setCourse((prev) => ({
      ...prev,
      totalPages: courses[prev.courseName].course.length,
      currentPage: 0,
    }));

    return () => {};
  }, [course.courseName, course.course]);

  useEffect(() => {
    setCourse((prev) => ({
      ...prev,
      currentView: prev.course[prev.currentPage],
    }));
    return () => {};
  }, [course.currentPage]);

  return { course, setCourse };
};
