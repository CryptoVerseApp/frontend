import Image from 'next/image';
import SearchBar from '../assets/search.png'
import DeFi from '../assets/DeFi.png'
import PlayOn from '../assets/play.png'
import './Dashboard.scss'
import DashCourses from './components/DashCourses';

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
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
        <div className="preview-container">
        <div className="dash-previews">
          <div className="dash-video">
            <Image src={DeFi} className='image' alt='Image here' />
          </div>
          <div className="preview-title">
            <div>
            <h3>Whate is DeFi Stacking</h3>
            </div>
            <div className='bottom'>
              <div><Image className='play' src={PlayOn} alt='Play' /></div>
              <p>1hr 10mins</p>
            </div>
          </div>
        </div>
        <div className="dash-previews">
          <div className="dash-video">
            <Image src={DeFi} className='image' alt='Image here' />
          </div>
          <div className="preview-title">
            <div>
            <h3>Whate is DeFi Stacking</h3>
            </div>
            <div className='bottom'>
              <div><Image className='play' src={PlayOn} alt='Play' /></div>
              <p>1hr 10mins</p>
            </div>
          </div>
        </div>
        <div className="dash-previews">
          <div className="dash-video">
            <Image src={DeFi} className='image' alt='Image here' />
          </div>
          <div className="preview-title">
            <div>
            <h3>Whate is DeFi Stacking</h3>
            </div>
            <div className='bottom'>
              <div><Image className='play' src={PlayOn} alt='Play' /></div>
              <p>1hr 10mins</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
