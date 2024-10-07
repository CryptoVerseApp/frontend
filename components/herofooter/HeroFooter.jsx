"use client"
import React, { useState } from 'react';
import Plus from '../../app/assets/plus.png';
import Minus from '../../app/assets/minus.png';
import Image from 'next/image';
import Social from '../../app/assets/social.png'
import './HeroFooter.scss';

const HeroFooter = () => {
    const [openFAQ, setOpenFAQ] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false
    });

    const toggleFAQ = (faq) => {
        setOpenFAQ(prevState => ({
            ...prevState,
            [faq]: !prevState[faq]  // Toggle only the specific FAQ
        }));
    };

    return (
        <div className='herofooter'>
            <div className="herofooter-container">
                <div className="footer-top">
                    <div className="top-left"><h2>FAQ</h2></div>
                    <div className="top-right">
                        <div className='flex items-center gap-7'>
                            <div className="right-content">
                                <h2>What is the main goal of CryptoVerse?</h2>
                                {openFAQ.first && <p>Need help navigating the library, take a quick glance of help FAQs.</p>}
                            </div>
                            <button onClick={() => toggleFAQ("first")}>
                                <Image className='image' src={openFAQ.first ? Minus : Plus} alt="toggle" />
                            </button>
                        </div>

                        <div className='footer-content flex items-center gap-7'>
                            <div className="right-content">
                                <hr />
                                <h2>Is CryptoVerse helpful for my career</h2>
                                {openFAQ.second && <p>Need help navigating the library, take a quick glance of help FAQs.</p>}
                            </div>
                            <button onClick={() => toggleFAQ("second")}>
                                <Image className='image' src={openFAQ.second ? Minus : Plus} alt="toggle" />
                            </button>
                        </div>

                        <div className='flex items-center gap-7'>
                            <div className="right-content">
                                <hr />
                                <h2>Are courses on CryptoVerse free?</h2>
                                {openFAQ.third && <p>Need help navigating the library, take a quick glance of help FAQs.</p>}
                            </div>
                            <button onClick={() => toggleFAQ("third")}>
                                <Image className='image' src={openFAQ.third ? Minus : Plus} alt="toggle" />
                            </button>
                        </div>

                        <div className='flex items-center gap-7'>
                            <div className="right-content">
                                <hr />
                                <h2>At what point do I get certified with NFT</h2>
                                {openFAQ.fourth && <p>Need help navigating the library, take a quick glance of help FAQs.</p>}
                            </div>
                            <button onClick={() => toggleFAQ("fourth")}>
                                <Image className='image' src={openFAQ.fourth ? Minus : Plus} alt="toggle" />
                            </button>
                        </div>

                        <div className='flex items-center gap-7'>
                            <div className="right-content">
                                <hr />
                                <h2>I am a student how can CrytoVerse help my learning</h2>
                                {openFAQ.fifth && <p>Need help navigating the library, take a quick glance of help FAQs.</p>}
                            </div>
                            <button onClick={() => toggleFAQ("fifth")}>
                                <Image className='image' src={openFAQ.fifth ? Minus : Plus} alt="toggle" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <hr />
                    <div className="bottom-wrapper">
                    <div className="bottom-content">
                        <p>Copyright © 2024 CryptoVerse. All Rights Reserved.</p>
                    </div>
                    <div className="bottom-social">
                        <Image className='image' src={Social} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroFooter;
