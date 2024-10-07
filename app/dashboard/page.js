import Image from 'next/image';
import SearchBar from '../assets/search.png'
import CourseImage from '../assets/course.png'
import UserC from '../assets/Ellipse.png'
import Stars from '../assets/Star.png'
import DeFi from '../assets/DeFi.png'
import PlayOn from '../assets/play.png'
import './Dashboard.scss'

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
        <div className="dash-courses">
          <div className="dash-cors-container">
            <div className="dash-image">
              <Image src={CourseImage} className='image' alt='Image Here' />
            </div>
            <div className="dash-details">
              <p>Blockchain</p>
              <h2>Introduction in Blockchain</h2>
            </div>
            <div className="dash-mojis">
              <div className="dash-left">
              <div className="moji">
                <Image src={UserC} alt='Image Here' />
                <p>2.6k</p>
              </div>
              <div className="moji">
                <Image src={Stars} alt='Image Here' />
                <p>4.3k</p>
              </div>
              </div>
              <div className="right">
                <button>Watch</button>
              </div>
            </div>
          </div>
          <div className="dash-cors-container">
            <div className="dash-image">
              <Image src={CourseImage} className='image' alt='Image Here' />
            </div>
            <div className="dash-details">
              <p>Blockchain</p>
              <h2>Introduction in Blockchain</h2>
            </div>
            <div className="dash-mojis">
              <div className="dash-left">
              <div className="moji">
                <Image src={UserC} alt='Image Here' />
                <p>2.6k</p>
              </div>
              <div className="moji">
                <Image src={Stars} alt='Image Here' />
                <p>4.3k</p>
              </div>
              </div>
              <div className="right">
                <button>Watch</button>
              </div>
            </div>
          </div>
          <div className="dash-cors-container">
            <div className="dash-image">
              <Image src={CourseImage} className='image' alt='Image Here' />
            </div>
            <div className="dash-details">
              <p>Blockchain</p>
              <h2>Introduction in Blockchain</h2>
            </div>
            <div className="dash-mojis">
              <div className="dash-left">
              <div className="moji">
                <Image src={UserC} alt='Image Here' />
                <p>2.6k</p>
              </div>
              <div className="moji">
                <Image src={Stars} alt='Image Here' />
                <p>4.3k</p>
              </div>
              </div>
              <div className="right">
                <button>Watch</button>
              </div>
            </div>
          </div>
          <div className="dash-cors-container">
            <div className="dash-image">
              <Image src={CourseImage} className='image' alt='Image Here' />
            </div>
            <div className="dash-details">
              <p>Blockchain</p>
              <h2>Introduction in Blockchain</h2>
            </div>
            <div className="dash-mojis">
              <div className="dash-left">
              <div className="moji">
                <Image src={UserC} alt='Image Here' />
                <p>2.6k</p>
              </div>
              <div className="moji">
                <Image src={Stars} alt='Image Here' />
                <p>4.3k</p>
              </div>
              </div>
              <div className="right">
                <button>Watch</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dash-rec">
          <div className="rec">
          <p>Recommended Topics</p>
          </div>
          <div className="rec">
          <p>View All</p>
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
  );
}
