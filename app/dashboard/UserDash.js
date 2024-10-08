import Link from 'next/link'
import Notifier from '../assets/notify.png'
import ProfileImage from '../assets/user.png'
import DropIcon from '../assets/drop.png'
import UserOne from '../assets/user1.png'
import UserTwo from '../assets/user2.png'
import UserThree from '../assets/user3.png'
import Image from 'next/image'
import './UserDash.scss'

export default function UserDash () {
    return (
        <div className="userdash">
            <div className="userdash-wrapper">
            <div className="userdash-container">
                <div className="user-notifier">
                    <Link href='#'><Image className='notifier' src={Notifier} alt='Image here' /></Link>
                </div>
                <div className="user-profile">
                    <div className="profile-image">
                    <Image src={ProfileImage} className='image' alt='Image here' />
                    </div>
                    <div className="user-info">
                       <div> <h3>Alikamatu Osama</h3></div>
                       <div><p>alikamatu.eth</p></div>
                    </div>
                   <div className="drop-icon">
                   <Image className='icon' src={DropIcon} alt='Image here' />
                   <div className="drop-menu">
                    <p>Logout</p>
                   </div>
                   </div>
                </div>
            </div>
            </div>
            <div className="topic"><p>Top Authors</p></div>
            <div className="authur">
                <div className="authur-wrapper">
                    <div className="authur-profile">
                        <Image className='image' src={UserOne} alt='Image here' />
                    </div>
                    <div className="authur-info">
                        <div><h3>Nille Woods</h3></div>
                        <div><p>Authur</p></div>
                    </div>
                </div>
                <div className="authur-wrapper">
                    <div className="authur-profile">
                        <Image className='image' src={UserOne} alt='Image here' />
                    </div>
                    <div className="authur-info">
                        <div><h3>Nille Woods</h3></div>
                        <div><p>Authur</p></div>
                    </div>
                </div>
                <div className="authur-wrapper">
                    <div className="authur-profile">
                        <Image className='image' src={UserOne} alt='Image here' />
                    </div>
                    <div className="authur-info">
                        <div><h3>Nille Woods</h3></div>
                        <div><p>Authur</p></div>
                    </div>
                </div>
            </div>
            </div>
    )
}