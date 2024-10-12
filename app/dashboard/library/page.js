import './Library.scss';
import SearchBar from '../../assets/search.png'
import Image from 'next/image';
import CourseImage from '../../assets/course.png'
import UserC from '../../assets/Ellipse.png'
import Stars from '../../assets/Star.png'
import DashCourses from '../components/DashCourses';


export default function Library() {
    return (
      <div className="library">
        <div className="library-container">
        <div className="search-wrapper">
        <div className="dash-search">
          <Image className='search-icon' src={SearchBar} alt='Image Here' />
          <input type="text" placeholder='Search library for course' />
        </div>
        </div>
        <div className="dash-rec">
          <div className="rec">
          <p>Recommended Courses</p>
          </div>
          <div className="rec">
          <p>View All</p>
          </div>
        </div>
        <DashCourses />
        </div>
      </div>
    );
  }
  