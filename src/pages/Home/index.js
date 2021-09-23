import React, {useEffect, useState} from 'react';

import { 
    FaTimes, FaBars, FaStar, FaRegStar, FaStarHalfAlt, FaFacebook, FaTwitter,
    FaInstagram, FaLinkedin, FaRegHeart
    } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import london from '../../assets/london.png';
import newyork from '../../assets/newyork.png';
import washington from '../../assets/washington.png';
import library from '../../assets/library.png';
import basketball from '../../assets/basketball.png';
import cafeteria from '../../assets/cafeteria.png';
import user from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';

import styles from './styles.module.scss';


export default function Home(){
    const [CSSright, setCSSright] = useState('-200px');

    return(
        <>
        <section className={styles.header}>
            <nav>
                <a href="index.html"><img src={logo} /></a>
                <div className={styles.nav_links} style={{'right': CSSright}}>
                    <FaTimes onClick={() => setCSSright('-200px')}/>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">COURSE</a></li>
                        <li><a href="">BLOG</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
                <FaBars onClick={() => setCSSright('0')}/>
            </nav>

            <div className={styles.text_box}>
                <h1>World's Biggest University</h1>
                <p>Making website is now one of the easiest thing in the world. You just need to learn
                   HTML, CSS, <br/>Javascript and you are good to go.
                </p>
                <a href="" className={styles.hero_btn}>Visit Us To know More</a>
            </div>
        </section>


        {/* Course */}

        <section className={styles.course}>
            <h1>Courses We Offer</h1>
            <p>Lorem ipsum dolor sit amet, consectetutr adipiscing elit.</p>

            <div className={styles.row}>
                <div className={styles.course_col}>
                    <h3>Intermediate</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pelleqnetesque aliquet turpis, nultea eleife fauciuis easiests
                        solicitu ut/ maecenas ut venatis, exe et dapibus pury done pice
                        Donect sit.
                    </p>
                </div>
                <div className={styles.course_col}>
                    <h3>Degree</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pelleqnetesque aliquet turpis, nultea eleife fauciuis easiests
                        solicitu ut/ maecenas ut venatis, exe et dapibus pury done pice
                        Donect sit.
                    </p>
                </div>
                <div className={styles.course_col}>
                    <h3>Post Graduation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pelleqnetesque aliquet turpis, nultea eleife fauciuis easiests
                        solicitu ut/ maecenas ut venatis, exe et dapibus pury done pice
                        Donect sit.
                    </p>
                </div>

            </div>

        </section>

        {/* campus */}

        <section className={styles.campus}>
            <h1>Our Global Campus</h1>
            <p>Lorem ipsum dolor sit amet, consectetutr adipiscing elit.</p>

            <div className={styles.row}>
                <div className={styles.campus_col}>
                    <img src={london}/>
                    <div className={styles.layer}>
                        <h3>LONDON</h3>
                    </div>
                </div>
                <div className={styles.campus_col}>
                    <img src={newyork}/>
                    <div className={styles.layer}>
                        <h3>NEW YORK</h3>
                    </div>
                </div>
                <div className={styles.campus_col}>
                    <img src={washington}/>
                    <div className={styles.layer}>
                        <h3>WASHINGTON</h3>
                    </div>
                </div>
            </div>
        </section>

        {/*  Facilities  */}

        <section className={styles.facilities}>
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className={styles.row}>
                <div className={styles.facilities_col}>
                    <img src={library}/>
                    <h3>World Class Library</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pelleqnetesque aliquet turpis.
                    </p>
                </div>
                <div className={styles.facilities_col}>
                    <img src={basketball}/>
                    <h3>Largest Play Ground</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pelleqnetesque aliquet turpis.
                    </p>
                </div>
                <div className={styles.facilities_col}>
                    <img src={cafeteria}/>
                    <h3>Tasty and Healthy Food</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pelleqnetesque aliquet turpis.
                    </p>
                </div>
                
            </div>

        </section>


        {/*  testimonials  */}

        <section className={styles.testimonials}>
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className={styles.row}>

                <div className={styles.testimonial_col}>
                    <img src={user}/>
                    <div> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pelleqnetesque aliquet turpis, nultea eleife fauciuis easiests
                            solicitu ut/ maecenas ut venatis, exe et dapibus pury done pice
                            Donect sit.
                        </p>
                        <h3>Christine Berkley</h3>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                </div>

                <div className={styles.testimonial_col}>
                    <img src={user2}/>
                    <div> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pelleqnetesque aliquet turpis, nultea eleife fauciuis easiests
                            solicitu ut/ maecenas ut venatis, exe et dapibus pury done pice
                            Donect sit.
                        </p>
                        <h3>David Byer</h3>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>
                
            </div>
        </section>


        {/*   Call to action    */}

        <section className={styles.cta}>
            <h1>Enroll For Our Various Online Courses<br/>Anywhere From The World</h1>
            <a href="" className={styles.hero_btn}>CONTACT US</a>
        </section>

        {/*   Footer    */}

        <section className={styles.footer}>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pelleqnetesque aliquet turpis, nultea eleife fauciuis easiests
                solicitu ut/ maecenas<br/> ut venatis, exe et dapibus pury done pice
                Donect sit.
            </p>
            <div className={styles.icons}>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
            </div>
            <p>Made with <FaRegHeart /> by Easy Tutorials</p>
        </section>

    </>       
    )
}