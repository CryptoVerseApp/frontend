import Image from 'next/image'
import React from 'react'
import './HeroCourse.scss'
import HeroCourseImage from '../../app/assets/course.png'
import UserIcon from '../../app/assets/Ellipse.png'
import Star from '../../app/assets/Star.png'

const HeroCourse = () => {
  return (
    <div className='herocourse'>
        <div className="course-container">
            <div className="course-wrapper">
            <div className="course-image">
                <Image className='image' src={HeroCourseImage} />
            </div>
            <div className="course-details">
                <div className="course-det">
                    <p>Blockchain</p>
                    <p>Introduction to Blockchain</p>
                </div>
                <div className="course-stats">
                    <div className="stats">
                        <Image className='image' src={UserIcon} />
                        <p>2.3k</p>
                        <Image className='image' src={Star} />
                        <p>4.5k</p>
                    </div>
                    <div className="btn"><button>Enroll</button></div>
                </div>
            </div>
            </div>
            <div className="course-wrapper">
            <div className="course-image">
                <Image className='image' src={HeroCourseImage} />
            </div>
            <div className="course-details">
                <div className="course-det">
                    <p>Blockchain</p>
                    <p>Introduction to Blockchain</p>
                </div>
                <div className="course-stats">
                    <div className="stats">
                        <Image className='image' src={UserIcon} />
                        <p>2.3k</p>
                        <Image className='image' src={Star} />
                        <p>4.5k</p>
                    </div>
                    <div className="btn"><button>Enroll</button></div>
                </div>
            </div>
            </div>
            <div className="course-wrapper">
            <div className="course-image">
                <Image className='image' src={HeroCourseImage} />
            </div>
            <div className="course-details">
                <div className="course-det">
                    <p>Blockchain</p>
                    <p>Introduction to Blockchain</p>
                </div>
                <div className="course-stats">
                    <div className="stats">
                        <Image className='image' src={UserIcon} />
                        <p>2.3k</p>
                        <Image className='image' src={Star} />
                        <p>4.5k</p>
                    </div>
                    <div className="btn"><button>Enroll</button></div>
                </div>
            </div>
            </div>
            <div className="course-wrapper">
            <div className="course-image">
                <Image className='image' src={HeroCourseImage} />
            </div>
            <div className="course-details">
                <div className="course-det">
                    <p>Blockchain</p>
                    <p>Introduction to Blockchain</p>
                </div>
                <div className="course-stats">
                    <div className="stats">
                        <Image className='image' src={UserIcon} />
                        <p>2.3k</p>
                        <Image className='image' src={Star} />
                        <p>4.5k</p>
                    </div>
                    <div className="btn"><button>Enroll</button></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCourse
