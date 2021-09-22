import React from 'react';

import logo from '../../assets/logo.png';

import styles from './styles.module.scss';


export default function Home(){


    return(
        <section className={styles.header}>
            <nav>
                <a href="index.html"><img src={logo} /></a>
                <div className={styles.nav_links}>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">COURSE</a></li>
                        <li><a href="">BLOG</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
            </nav>

            <div className={styles.text_box}>
                <h1>World's Biggest University</h1>
                <p>Making website is now one of the easiest thing in the world. You just need to learn
                   HTML, CSS, <br/>Javascript and you are good to go.
                </p>
                <a href="" className={styles.hero_btn}>Visit Us To know More</a>
            </div>

        </section>
        
    )
}