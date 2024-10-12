"use client";
import Image from 'next/image';
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
    title: 'Introduction to Blockchain & Web3',
    description: "This course provides a deep dive into blockchain technology and its role in the decentralized web (Web3). You'll learn the fundamentals of blockchain, including how transactions are validated, and explore key concepts such as consensus mechanisms, decentralization, and the role of Web3 in reshaping the internet.",
    users: '3.2k',
    rating: '4.8k',
    sections: [
      {
        title: 'Blockchain Fundamentals',
        lessons: [
          { title: 'Blockchain Explained', duration: '6 mins', videoUrl: 'https://youtu.be/yubzJw0uiE4' },
          { title: 'Decentralization & Consensus', duration: '8 mins', videoUrl: '/videos/consensus_mechanisms.mp4' },
          { title: 'Types of Blockchains', duration: '7 mins', videoUrl: '/videos/types_of_blockchains.mp4' },
          { title: 'How Blockchain Works', duration: '10 mins', videoUrl: '/videos/how_blockchain_works.mp4' },
        ],
      },
      {
        title: 'Blockchain in Practice',
        lessons: [
          { title: 'Use Cases in Finance', duration: '7 mins', videoUrl: '/videos/blockchain_finance.mp4' },
          { title: 'Beyond Cryptocurrencies', duration: '5 mins', videoUrl: '/videos/blockchain_beyond_crypto.mp4' },
          { title: 'Blockchain in Supply Chain', duration: '9 mins', videoUrl: '/videos/blockchain_supply_chain.mp4' },
          { title: 'Future Trends in Blockchain', duration: '6 mins', videoUrl: '/videos/future_trends_blockchain.mp4' },
        ],
      },
    ],
  },
  {
    id: 2,
    category: 'Smart Contracts',
    title: 'Smart Contracts Development with Solidity',
    description: "This course teaches you how to develop and deploy smart contracts using Solidity, the leading programming language for Ethereum. Learn the syntax of Solidity, smart contract security, and how to build, test, and deploy your contracts to the Ethereum network.",
    users: '2.9k',
    rating: '4.6k',
    sections: [
      {
        title: 'Solidity Basics',
        lessons: [
          { title: 'Getting Started with Solidity', duration: '7 mins', videoUrl: '/videos/solidity_basics.mp4' },
          { title: 'Functions & Variables', duration: '6 mins', videoUrl: '/videos/solidity_functions.mp4' },
          { title: 'Data Types in Solidity', duration: '8 mins', videoUrl: '/videos/data_types_solidity.mp4' },
          { title: 'Control Structures', duration: '7 mins', videoUrl: '/videos/control_structures.mp4' },
        ],
      },
      {
        title: 'Deploying Smart Contracts',
        lessons: [
          { title: 'Deploying to Ethereum', duration: '8 mins', videoUrl: '/videos/deploying_smart_contracts.mp4' },
          { title: 'Contract Testing & Security', duration: '9 mins', videoUrl: '/videos/testing_security.mp4' },
          { title: 'Interacting with Contracts', duration: '7 mins', videoUrl: '/videos/interacting_with_contracts.mp4' },
          { title: 'Advanced Solidity Concepts', duration: '10 mins', videoUrl: '/videos/advanced_solidity.mp4' },
        ],
      },
    ],
  },
  {
    id: 3,
    category: 'Decentralized Apps (dApps)',
    title: 'Building dApps with React & Web3.js',
    description: "Learn how to build decentralized applications (dApps) using React and Web3.js. This course covers the fundamentals of dApp development, integrating smart contracts, and interacting with Ethereum via Web3.js. By the end, you'll be able to create a functional dApp and deploy it on a blockchain.",
    users: '3.5k',
    rating: '4.9k',
    sections: [
      {
        title: 'dApp Architecture',
        lessons: [
          { title: 'Introduction to dApps', duration: '6 mins', videoUrl: '/videos/dapp_intro.mp4' },
          { title: 'Frontend-Backend Interaction', duration: '7 mins', videoUrl: '/videos/frontend_backend.mp4' },
          { title: 'User Interface Design for dApps', duration: '8 mins', videoUrl: '/videos/ui_design_dapps.mp4' },
          { title: 'State Management in React', duration: '9 mins', videoUrl: '/videos/state_management_react.mp4' },
        ],
      },
      {
        title: 'Integrating Smart Contracts',
        lessons: [
          { title: 'Web3.js & Ethereum', duration: '8 mins', videoUrl: '/videos/web3js_ethereum.mp4' },
          { title: 'Deploying dApps', duration: '9 mins', videoUrl: '/videos/deploying_dapps.mp4' },
          { title: 'Using Metamask with dApps', duration: '6 mins', videoUrl: '/videos/metamask_dapps.mp4' },
          { title: 'Testing & Debugging dApps', duration: '10 mins', videoUrl: '/videos/testing_debugging_dapps.mp4' },
        ],
      },
    ],
  },
];


export default function CourseDetails({ params }) {
  const { id } = params;
  const course = courses.find((c) => c.id === parseInt(id));
  const [selectedVideo, setSelectedVideo] = useState(course?.sections[0]?.lessons[0]?.videoUrl || '');
  const [expanded, setExpanded] = useState(true);

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
                  <p>Approx. 3h: 45mins</p>
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
                {expanded && (
                  <div className="section-topics">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div className="lesson" key={lessonIndex} onClick={() => handleVideoChange(lesson.videoUrl)}>
                        <div className="left">
                        <Image src={VidPlay} alt='Lesson Icon' />
                        <h3>{lesson.title}</h3>
                        </div>
                        <span>{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
