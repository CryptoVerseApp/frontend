import React from 'react';
import './DashCourses.scss';
import CourseImage from '../../assets/course.png'; // You can replace this with relevant images
import UserC from '../../assets/Ellipse.png';
import Stars from '../../assets/Star.png';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  { 
    id: 1, 
    category: 'Blockchain', 
    title: 'Introduction to Blockchain & Web3', 
    users: '3.2k', 
    rating: '4.8k', 
    image: CourseImage 
  },
  { 
    id: 2, 
    category: 'Smart Contracts', 
    title: 'Smart Contracts Development with Solidity', 
    users: '2.9k', 
    rating: '4.6k', 
    image: CourseImage 
  },
  { 
    id: 3, 
    category: 'Decentralized Apps (dApps)', 
    title: 'Building dApps with React & Web3.js', 
    users: '3.5k', 
    rating: '4.9k', 
    image: CourseImage 
  }
];

const DashCourses = () => {
  return (
    <div className="dash-courses">
      {courses.map((course) => (
        <div className="dash-cors-container" key={course.id}>
          <div className="dash-image">
            <Image src={course.image} className='image' alt='Course Image' />
          </div>
          <div className="dash-details">
            <p>{course.category}</p>
            <h2>{course.title}</h2>
          </div>
          <div className="dash-mojis">
            <div className="dash-left">
              <div className="moji">
                <Image src={UserC} alt='User Icon' />
                <p>{course.users}</p>
              </div>
              <div className="moji">
                <Image src={Stars} alt='Rating Icon' />
                <p>{course.rating}</p>
              </div>
            </div>
            <div className="right">
              <Link href={`/dashboard/${course.id}`}>
                <button>Read</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashCourses;
