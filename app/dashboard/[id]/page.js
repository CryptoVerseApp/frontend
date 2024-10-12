import './CourseOutline.scss';
import CourseImage from '../../assets/course.png';
import Image from 'next/image';
import SearchBar from '../../assets/search.png';
import Link from 'next/link';

export default function CourseOutline({ params }) {
  const courses = [
    { 
      id: 1, 
      category: 'Blockchain', 
      title: 'Introduction to Blockchain & Web3', 
      users: '3.2k', 
      rating: '4.8k', 
      image: CourseImage, 
      topic: 'Understanding Blockchain & Web3 Technologies',
      desc: 'This course introduces the concepts of Blockchain and Web3, exploring how decentralized technologies can revolutionize industries and create new opportunities. Learn about the fundamentals of blockchain technology, its applications, and the underlying principles of Web3.' 
    },
    { 
      id: 2, 
      category: 'Smart Contracts', 
      title: 'Smart Contracts Development with Solidity', 
      users: '2.9k', 
      rating: '4.6k', 
      image: CourseImage, 
      topic: 'Developing Smart Contracts',
      desc: 'Dive into the world of Smart Contracts with this hands-on course. You will learn how to develop, deploy, and interact with smart contracts using Solidity, the primary programming language for Ethereum. By the end of the course, you will be able to create secure and efficient smart contracts for various applications.' 
    },
    { 
      id: 3, 
      category: 'Decentralized Apps (dApps)', 
      title: 'Building dApps with React & Web3.js', 
      users: '3.5k', 
      rating: '4.9k', 
      image: CourseImage, 
      topic: 'Creating Decentralized Applications',
      desc: 'In this course, you will learn how to build decentralized applications (dApps) using React and Web3.js. Understand how to connect your front-end application to the Ethereum blockchain, manage user interactions, and handle smart contract integration to create fully functional dApps.' 
    }
  ];

  // Extracting the course ID from the params
  const { id } = params;
  const course = courses.find((c) => c.id === parseInt(id));

  // If the course is not found, display a not found message
  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className='courseoutline'>
      <div className="courseoutline-container">
        {/* Search Bar */}
        <div className="search-wrapper">
          <div className="dash-search">
            <Image className='search-icon' src={SearchBar} alt='Search Icon' />
            <input type="text" placeholder='Search library for course' />
          </div>
        </div>

        {/* Course Title */}
        <div className="outline-title">
          <p>{course.title}</p>
        </div>

        {/* Course Image */}
        <div className="outline-image-container">
          <Image className="image" src={course.image} alt={course.title} />
        </div>

        {/* Course Description */}
        <div className="outline-desc">
          <div className="outline-desc-wrapper">
            <h2>{course.topic}</h2>
            <p>{course.desc}</p>
            <p><strong>Users Enrolled:</strong> {course.users}</p>
            <p><strong>Rating:</strong> {course.rating}</p>
          </div>
        </div>
        <Link href={`/dashboard/courses/${course.id}`}>
                <button>Enroll</button>
              </Link>
      </div>
    </div>
  );
}
