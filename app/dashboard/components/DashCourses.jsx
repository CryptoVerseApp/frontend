import React from 'react';
import './DashCourses.scss';
import CourseImage from '../../assets/course.png';
import UserC from '../../assets/Ellipse.png';
import Stars from '../../assets/Star.png';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  { id: 1, category: 'Blockchain', title: 'Introduction to Blockchain', users: '2.6k', rating: '4.3k', image: CourseImage },
  { id: 2, category: 'AI', title: 'Introduction to AI', users: '3.1k', rating: '4.7k', image: CourseImage },
  { id: 3, category: 'Data Science', title: 'Data Science for Beginners', users: '1.8k', rating: '4.2k', image: CourseImage },
  { id: 4, category: 'Cybersecurity', title: 'Cybersecurity Essentials', users: '2.3k', rating: '4.5k', image: CourseImage }
];

const DashCourses = () => {
  return (
    <div className="dash-courses">
    {courses.map((course) => (
      <div className="dash-cors-container" key={course.id}>
        <div className="dash-image">
          <Image src={course.image} className='image' alt='Image Here' />
        </div>
        <div className="dash-details">
          <p>{course.category}</p>
          <h2>{course.title}</h2>
        </div>
        <div className="dash-mojis">
          <div className="dash-left">
            <div className="moji">
              <Image src={UserC} alt='Image Here' />
              <p>{course.users}</p>
            </div>
            <div className="moji">
              <Image src={Stars} alt='Image Here' />
              <p>{course.rating}</p>
            </div>
          </div>
          <div className="right">
            <Link href={`/dashboard/courses/${course.id}`}>
              <button>Watch</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
    );
};

export default DashCourses;
