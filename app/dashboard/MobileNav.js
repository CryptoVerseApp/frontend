import Image from "next/image";
import MenuImage from '../assets/dashboard.png'
import UserPhoto from '../assets/user.png'
import './MobileNav.scss'

export default function MobileNav({setSide}) {

    return (
        <div className="mobilenav">
            <div className="mobilenav-container">
                <div className="left">
                    <Image onClick={()=>setSide(true)} className='image' src={MenuImage} alt="Image here"/>
                </div>
                <div className="right">
                    <div className="user-col">
                        <Image className="image" src={UserPhoto} alt="Image here" />
                        <p>Alikamatu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}