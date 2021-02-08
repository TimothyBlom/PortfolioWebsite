import './style/App.scss';
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import Tim from "./pictures/Tim.jpg"
import Logo from "./pictures/Logo.png"
import project1 from "./pictures/project1.jpg"

function App() {
  return (
    <div className="App">

      <div className="navigator">
        nav
      </div>

{/* Intro */}
      <div className="intro">
        <img className="profilePicture" alt="" src={Tim}/>
        <img className="logo" alt="" src={Logo}/>
        <div className="logoText">
          <p>Front-End Developer</p>
          <p>3D Game Artist</p>
          <p>Cat lover</p>
        </div>
      </div>
      
{/* About Me */}
      <div className="aboutMe tab">
        <p className="tabTitle" >About me</p>
        <p className="aboutMeTextTop">
          My name is Timothy Blom, I am a Front-End Developer and a 3D Artist. I live in the Netherlands in a little town called Heerhugowaard. 
          I spent most of my time playing video games, reading books, learning new code, making 3D art and coming up with new cool projects I never end up finishing.
        </p>
        <p className="aboutMeTextBottom">
          My goal is to find a job as an Front-End developer. I will achief this by constantly learning new code skills and showing it by 
          regularly updating my GitHub portfolio, and (the hardest part) by not giving up. I have had/have a veriaty of jobs and nothing made 
          me as happy as creating digital content. Also coders are very cool people and fun to work with.
        </p>
      </div>

{/* Coding */}
      <div className="coding tab">
        <p className="tabTitle">Coding projects</p>

        <div className="codeText">
          <p>
            My projects My goal is to find a job as an Front-End developer. I will achief this by constantly learning new code skills and showing it by 
            regularly updating my GitHub portfolio, and (the hardest part) by not giving up. I have had/have a veriaty of jobs and nothing made 
            me as happy as creating digital content. Also coders are very cool people and fun to work with.
          </p>
          <p>
            My projects My goal is to find a job as an Front-End developer. I will achief this by constantly learning new code skills and showing it by 
            regularly updating my GitHub portfolio, and (the hardest part) by not giving up. I have had/have a veriaty of jobs and nothing made 
            me as happy as creating digital content. Also coders are very cool people and fun to work with.
          </p>
        </div>

        <div className="codeProjectContainer">
          <p className="codeProjectTitle">project name</p>
          <img className="codeProjectImg" src={project1} alt="" />
          <p className="codeProjectDescription">project description</p>
          <ul className="codeProjectFeatures">
            <li>feature1</li>
            <li>feature2</li>
            <li>feature3</li>
            <li>feature4</li>
            <li>feature5</li>
          </ul>
          <p className="codeProjectGitLink">github link</p>
        </div>

        <div className="codeProjectContainer">
          <p className="codeProjectTitle">project name</p>
          <img className="codeProjectImg" src={project1} alt="" />
          <p className="codeProjectDescription">project description</p>
          <ul className="codeProjectFeatures">
            <li>feature1</li>
            <li>feature2</li>
            <li>feature3</li>
            <li>feature4</li>
            <li>feature5</li>
          </ul>
          <p className="codeProjectGitLink">github link</p>
        </div>

      </div>

{/* 3D Modeling */}
      <div className="modeling tab">
        <p className="tabTitle">3D projects</p>

        <div className="codeText">
          <p>
            My projects My goal is to find a job as an Front-End developer. I will achief this by constantly learning new code skills and showing it by 
            regularly updating my GitHub portfolio, and (the hardest part) by not giving up. I have had/have a veriaty of jobs and nothing made 
            me as happy as creating digital content. Also coders are very cool people and fun to work with.
          </p>
          <p>
            My projects My goal is to find a job as an Front-End developer. I will achief this by constantly learning new code skills and showing it by 
            regularly updating my GitHub portfolio, and (the hardest part) by not giving up. I have had/have a veriaty of jobs and nothing made 
            me as happy as creating digital content. Also coders are very cool people and fun to work with.
          </p>
        </div>

        <Swiper className="ModelingSlider"
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          pagination
          scrollbar={{ draggable: true }}
          grabCursor={true}
        >
          <SwiperSlide>
            <img className="modelingProjectImg" src={project1} alt="" />
            <p>
              This is an project
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="modelingProjectImg" src={project1} alt="" />
            <p>
              This is an project
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="modelingProjectImg" src={project1} alt="" />
            <p>
              This is an project
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="modelingProjectImg" src={project1} alt="" />
            <p>
              This is an project
            </p>
          </SwiperSlide>

        </Swiper>
      </div>

{/* Skills */}
      <div className="skills tab">
        <p className="tabTitle">My programs skills (interactive cv)</p>
      </div>
     
{/* Contact Me */}
      <div className="contact tab">
        <p className="tabTitle">Contact me</p>
      </div>

    </div>
  );
}

export default App;