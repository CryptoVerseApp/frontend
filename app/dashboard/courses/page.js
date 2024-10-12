import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Introduction to Blockchain & Web3',
    description: 'Understand the basics of blockchain technology and its role in the Web3 ecosystem.',
    duration: '8 weeks',
    difficulty: 'Beginner',
    price: '$49.99',
  },
  {
    id: 2,
    title: 'Smart Contracts Development with Solidity',
    description: 'Learn to develop smart contracts on the Ethereum blockchain using Solidity.',
    duration: '10 weeks',
    difficulty: 'Intermediate',
    price: '$79.99',
  },
  {
    id: 3,
    title: 'Decentralized Applications (dApps) with React and Web3.js',
    description: 'Build decentralized applications (dApps) using React and Web3.js for interaction with blockchain networks.',
    duration: '12 weeks',
    difficulty: 'Advanced',
    price: '$99.99',
  },
];

export default function CourseList() {
  return (
    <div className="course-list-container">
      <h1>Web3 Courses</h1>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <Link href={`/dashboard/courses/${course.id}`}>
              <div className="course-details">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Difficulty:</strong> {course.difficulty}</p>
                <p><strong>Price:</strong> {course.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .course-list-container {
          padding: 20px;
        }
        .course-list {
          list-style: none;
          padding: 0;
        }
        .course-item {
          background: #f9f9f9;
          margin: 10px 0;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: box-shadow 0.3s;
        }
        .course-item:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .course-details h2 {
          margin: 0;
          font-size: 1.5em;
        }
        .course-details p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}
