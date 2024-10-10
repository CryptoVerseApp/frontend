// pages/courses/index.js
import Link from 'next/link';

const courses = [
  { id: 1, title: 'Web Development', description: 'Learn to build websites.' },
  { id: 2, title: 'Data Science', description: 'Explore data analysis techniques.' },
  { id: 3, title: 'Machine Learning', description: 'Understand ML algorithms.' },
];

export default function CourseList() {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/dashboard/courses/${course.id}`}>
              <p>{course.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
