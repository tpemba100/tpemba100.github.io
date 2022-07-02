import React from 'react';
import IMG1 from '../img/project-img1.png';
import IMG2 from '../img/project-img1.png';
import IMG3 from '../img/project-img1.png';
import IMG4 from '../img/project-img1.png';
import IMG5 from '../img/project-img1.png';
import IMG6 from '../img/project-img1.png';

import './projects.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Bookstore',
      img: IMG1,
      link: 'https://melodic-boba-111583.netlify.app/',
    },
    {
      id: 2,
      title: 'FakeStore',
      img: IMG4,
      link: 'https://angry-yalow-17c6ab.netlify.app/',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
    },
    {
      id: 4,
      title: 'Shelter',
      img: IMG3,
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      link: 'https://meri-mg.github.io/Unilab-world-news/',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      link: 'https://lukinoo.github.io/math-resource/',
    },
    {
      id: 7,
      title: 'Math Resource',
      img: IMG6,
      link: 'https://lukinoo.github.io/math-resource/',
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className='portfolio-info'>
              <h3>{pro.title}</h3>
              <div className="portfolio__item-cta">
                <a href={pro.link} className="btn btn-primary">Live Demo</a>
              </div>
            </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio;