import * as React from 'react';

import {
  title,
  ulAbout,
  about,
  infoMe,
  listSkills,
  skillsHeader,
  HeaderAbout,
  myInfo,
  header,
  linkWork,
  link,
  networks,
  } from '../components/main.module.css';
import { container } from '../components/layout.module.css';
import '../components/global.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import images from '../assets/images';
import { Link } from 'gatsby'


const AnimatedWords = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Python', 'Backend', 'Django'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" }, color: 'grey' },
  };

  return (
    <motion.span
      key={wordIndex}
      variants={variants}
      animate="visible"
      initial="hidden"
    >
      {words[wordIndex]}
    </motion.span>
  );
};


const Portfolio = () => {
  return (
      <div className={container}>
      <main>
        <div className={header}>
          <h1 className={title}>‟От идеи к результату - быстро и качественно”</h1>
          <h2>Привет!</h2>
          <h2>Меня зовут Суханов Дмитрий, я <AnimatedWords /> разработчик</h2>

          <div className={networks}>
          <Link to="https://vk.com/id306847313" target="_blank" className={linkWork}><img src={images.vk} alt='' width={60} height={60} /> </Link>
          <Link to="https://t.me/k1epon" target="_blank" className={linkWork}><img src={images.tg} alt='' width={60} height={60} /> </Link>
          <Link to="https://github.com/kiepon" target="_blank" className={linkWork}><img src={images.github} alt='' width={60} height={60} /> </Link>
          </div>
        </div>
        

        <h3 className={myInfo}>Небольшая информация.</h3>
        
        <section className={about}>
          <div className={infoMe}>
            <h2 className={HeaderAbout}>Обо мне</h2>
            <ul className={ulAbout}>
              <li>
                <img src={images.age} alt='' width={30} height={30} /> 
                <span>19 лет</span>
                
              </li>
              <li>
                <img src={images.geo} alt='' width={30} height={30} />  
                <span>Проживаю в городе Омск, Россия</span>
                
              </li>
              <li>
                <img src={images.codeSlash} alt='' width={30} height={30} />   
                <span>Самоучка, страстно увлечённый программированием</span>
              </li>
              <li>
                <img src={images.calendar} alt='' width={30} height={30} />
                <span>3,5 года коммерческого опыта</span>
              </li>
            </ul>
          </div>
          <div className={infoMe}>
            <h2 className={skillsHeader}>Навыки</h2>
            <ul className={listSkills}>
              <li><img src={images.python} alt='' width={20} height={20} />Python</li>
              <li><img src={images.javascript} alt='' width={20} height={20} />JavaScript</li>
              <li><img src={images.php} alt='' width={20} height={20} />Php</li>
              <li><img src={images.django} alt='' width={20} height={20} />Django</li>
              <li><img src={images.djangorest} alt='' width={20} height={20} />DRF</li>
              <li><img src={images.fastapi} alt='' width={20} height={20} />FastAPI</li>
              <li><img src={images.aiohttp} alt='' width={20} height={20} />Aiohttp</li>
              <li><img src={images.aiogram} alt='' width={20} height={20} />Aiogram</li>
              <li><img src={images.sqlalchemy} alt='' width={20} height={20} />SQLAlchemy</li>
              <li><img src={images.mysql} alt='' width={20} height={20} />MySQL</li>
              <li><img src={images.postgresql} alt='' width={20} height={20} />PostgreSQL</li>
              <li><img src={images.sqlite} alt='' width={20} height={20} />SQLite</li>
              <li><img src={images.docker} alt='' width={20} height={20} />Docker</li>
              <li><img src={images.git} alt='' width={20} height={20} />Git</li>
              <li><img src={images.nginx} alt='' width={20} height={20} />Nginx</li>
            </ul>
          </div>
          <div className={infoMe}>
              <h2 className={link}><Link to="/works" className={linkWork}>Мои работы</Link></h2>
          </div>
        </section>
      </main>
    </div>
    
  )
}

export const Head = () => <title>Портфолио</title>
export default Portfolio