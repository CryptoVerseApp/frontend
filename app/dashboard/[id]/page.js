import './CourseOutline.scss'
import CourseImage from '../../assets/course.png';
import Image from 'next/image';
import SearchBar from '../../assets/search.png';


export default function ConurseOutline({params}) { 
    
const courses = [
    { id: 1, category: 'Blockchain', title: 'Introduction to Blockchain', topic: "Introduction to Blockchain", users: '2.6k', rating: '4.3k', image: CourseImage, desc: "Blockchain could be a data structure that could be a growing list of information blocks. The knowledge blocks area unit coupled along, such recent blocks can’t be removed or altered. Blockchain is the backbone Technology of the Digital CryptoCurrency BitCoin." },
    { id: 2, category: 'AI', title: 'Introduction to AI', users: '3.1k', rating: '4.7k', image: CourseImage },
    { id: 3, category: 'Data Science', title: 'Data Science for Beginners', users: '1.8k', rating: '4.2k', image: CourseImage },
    { id: 4, category: 'Cybersecurity', title: 'Cybersecurity Essentials', users: '2.3k', rating: '4.5k', image: CourseImage }
  ];
  
    const { id } = params;
    const course = courses.find((c) => c.id === parseInt(id));

    if (!course) {
        return <p>Course not found!</p>
    }

    return (
        <div className='courseoutline'>
        <div className="courseoutline-container">
          <div className="search-wrapper">
            <div className="dash-search">
              <Image className='search-icon' src={SearchBar} alt='Search Icon' />
              <input type="text" placeholder='Search library for course' />
            </div>
          </div>
          <div className="outline-title">
            <p>{course.title}</p>
          </div>
          <div className="outline-image-conatiner">
              <Image className="image" src={course.image} alt='Image here' />
            </div>
          <div className="outline-desc">
            <div className="outline-desc-wrapper">
              <h2>{course.topic}</h2>
              <p>{course.desc}</p>
            </div>
          </div>
          </div>
          </div>
    )
}