"use client";
import Image from 'next/image';
import CourseImage from '../../../assets/course.png';
import Link from 'next/link';
import VideoPlayer from '../../components/VideoPlayer';
import './CourseDetails.scss';
import SearchBar from '../../../assets/search.png';
import VidSections from '../../../assets/vidsections.png';
import VidLessons from '../../../assets/vidlessons.png';
import VidPlay from '../../../assets/vidplay.png';
import VidUp from '../../../assets/vidup.png';
import VidDl from '../../../assets/viddl.png';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    category: 'Blockchain',
    title: 'Introduction to Blockchain',
    description: "A very good course to study to start a career in blockchain",
    users: '2.6k',
    rating: '4.3k',
    sections: [
      {
        title: 'Introduction to Blockchain',
        lessons: [
          { title: 'What is Blockchain?', duration: '4 mins', videoUrl: '/videos/blockchain_intro.mp4' },
          { title: 'Blockchain History', duration: '5 mins', videoUrl: '/videos/blockchain_history.mp4' },
        ],
      },
      {
        title: 'Blockchain Use Cases',
        lessons: [
          { title: 'Cryptocurrency', duration: '6 mins', videoUrl: '/videos/cryptocurrency.mp4' },
          { title: 'Smart Contracts', duration: '8 mins', videoUrl: '/videos/smart_contracts.mp4' },
        ],
      },
    ],
  },
  // Additional courses can be added here
];

export default function CourseDetails({ params }) {
  const { id } = params;
  const course = courses.find((c) => c.id === parseInt(id));
  const [selectedVideo, setSelectedVideo] = useState(course?.sections[0]?.lessons[0]?.videoUrl || '');
  const [expanded, setExpanded] = useState(false); // Expand/Collapse state

  if (!course) {
    return <p>Course not found!</p>;
  }

  const handleVideoChange = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='coursepage'>
      <div className="coursepage-container">
        <div className="search-wrapper">
          <div className="dash-search">
            <Image className='search-icon' src={SearchBar} alt='Search Icon' />
            <input type="text" placeholder='Search library for course' />
          </div>
        </div>
        <div className="title">
          <h2>{course.title}</h2>
        </div>
        <div className="course-vid">
          <div className="vid-container">
            <VideoPlayer videoUrl={selectedVideo} />
          </div>
        </div>
        <div className="coursepage-details">
          <div className="coursepage-content">
            <h2>Course Content</h2>
            <div className="section-det">
              <div className="left">
                <div className="left-det">
                  <Image src={VidSections} alt='Sections' />
                  <p>{course.sections.length} Sections</p>
                </div>
                <div className="left-det">
                  <Image src={VidLessons} alt='Lessons' />
                  <p>{course.sections.reduce((total, section) => total + section.lessons.length, 0)} Lessons</p>
                </div>
                <div className="left-det">
                  <Image src={VidPlay} alt='Duration' />
                  <p>2h: 10mins</p>
                </div>
              </div>
              <div className="right">
                <p onClick={toggleExpand}>{expanded ? 'Collapse All' : 'Expand All'}</p>
              </div>
            </div>

            {/* Course Sections and Lessons */}
            {course.sections.map((section, sectionIndex) => (
              <div className="section-outline" key={sectionIndex}>
                <div className="section-header">
                  <div className="left">
                    <Image src={VidUp} alt='Section Icon' />
                    <h2>{section.title}</h2>
                  </div>
                </div>
                {/* Conditionally show lessons if expanded */}
                  <div className="section-topics">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div className="lesson" key={lessonIndex}>
                        <div className="left" onClick={() => handleVideoChange(lesson.videoUrl)}>
                          <Image src={VidPlay} alt='Lesson Icon' />
                          <p>{lesson.title}</p>
                        </div>
                        <div className="right">
                          <p>{lesson.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>

          {/* Download Section */}
          <div className="coursepage-download">
            <div className="download-option">
              <Image src={VidDl} alt='Download Icon' />
              <p>Download Course Materials</p>
            </div>
          </div>

          {/* Course Progress */}
          <div className="coursepage-progress">
            <p>Track Progress: <span>50% Completed</span></p>
            {/* You can add progress tracking logic here */}
          </div>
        </div>
      </div>
    </div>
  );
}
