import Link from "next/link";
import DashboardImage from '../assets/dashboard.png'
import LibraryImage from '../assets/library.png'
import AllImage from '../assets/allcourses.png'
import PayImage from '../assets/pay.png'
import CertImage from '../assets/cert.png'
import Logo from '../assets/LogoCryptoVerse.png'
import Cross from '../assets/cross.png'
import Image from "next/image";
import './MobileSide.scss'

export default function MobileSide({setSide}) {
  return (
    <div className="mobileaside">
      <div className="mobile-aside-container">
      <div className="aside-nav">
        <div className="close-btn">
        <Image onClick={()=>setSide(false)} className="cross" src={Cross} alt="Image here" />
        </div>
      <Image className="logo" src={Logo} alt="Logo here" />
        <div className="aside-navlinks">
          <Link className="navlinks"   href='/dashboard'>
          <div className="aside-icon">
            <Image className="icons" src={DashboardImage} alt="Image here" />
          </div>
          <p>Dashboard</p>
          </Link>
          <Link className="navlinks"   href='/dashboard/library'>
          <div className="aside-icon">
            <Image className="icons" src={LibraryImage} alt="Image here" />
          </div>
          <p>Library</p>
          </Link>
          <Link  className="navlinks"  href='/dashboard/courses'>
          <div className="aside-icon">
            <Image className="icons" src={AllImage} alt="Image here" />
          </div>
          <p>All Courses</p>
          </Link>
          <Link className="navlinks"   href='/dashboard/payment'>
          <div className="aside-icon">
            <Image className="icons" src={PayImage} alt="Image here" />
          </div>
          <p>Payment</p>
          </Link>
          <Link className="navlinks"   href='/dashboard/certification'>
          <div className="aside-icon">
            <Image className="icons" src={CertImage} alt="Image here" />
          </div>
          <p>Certification</p>
          </Link>
        </div>
      </div>
      <div className="aside-footer">
      <Link href='/'>
      <button>
        <Image className="cross" src={Cross} alt="Image here" />
        <p>Join MeetUp</p>
      </button>
      </Link>
      </div>
      </div>
    </div>
  );
}
