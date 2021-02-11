import './style/App.scss';
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/swiper-bundle.css';
import Tim from "./pictures/Tim1.png"
import Logo from "./pictures/Logo.png"
import Logo2 from "./pictures/Logo2.png"
import project1 from "./pictures/project1.jpg"
import Art1 from "./pictures/3dArt1.png"
import Art2 from "./pictures/3dArt2.png"
import Art3 from "./pictures/3dArt3.png"
import Art4 from "./pictures/3dArt4.png"
import program1 from "./pictures/programIcons/htmlLogo.png"
import program2 from "./pictures/programIcons/cssLogo.png"
import program3 from "./pictures/programIcons/javascriptLogo.png"
import program4 from "./pictures/programIcons/reactLogo.png"
import program5 from "./pictures/programIcons/sassLogo.png"
import program6 from "./pictures/programIcons/gitLogo.png"
import program7 from "./pictures/programIcons/3dsMaxLogo.jpg"
import program8 from "./pictures/programIcons/mayaLogo.png"
import program9 from "./pictures/programIcons/cinema4dLogo.png"
import program10 from "./pictures/programIcons/substancePainterLogo.png"
import program11 from "./pictures/programIcons/unityLogo.png"
import program12 from "./pictures/programIcons/vscLogo.png"
import Icon1 from "./pictures/EmailLogo.png"
import Icon2 from "./pictures/GithubLogo.png"
import Icon3 from "./pictures/ArtstationLogo.png"
import Icon4 from "./pictures/LinkedinLogo.png"

function App() {
  return (
    <div className="App">

      <div className="navigator">
        <p>Top</p>
        <p>About Me</p>
        <p>Coding Projects</p>
        <p>3D Projects</p>
        <p>Programs Skills</p>
        <p>Contact Me</p>
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
            <img className="modelingProjectImg" src={Art1} alt="" />
            <p>
              This is an project
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img className="modelingProjectImg" src={Art2} alt="" />
            <p>
              This is an project
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img className="modelingProjectImg" src={Art3} alt="" />
            <p>
              This is an project
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img className="modelingProjectImg" src={Art4} alt="" />
            <p>
              This is an project
            </p>
          </SwiperSlide>

        </Swiper>
      </div>

{/* Skills */}
      <div className="skills tab">
        <p className="tabTitle">My programs skills</p>

        <div className="skillsText">
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

        <p className="skillsSliderTitle">
          Developer Programs
        </p>

        <Swiper className="skillsSlider"
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          grabCursor={true}
          loop={true}
        >

          <SwiperSlide>
            <img className="skillsImg" src={program1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program3} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program4} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program5} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program6} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program12} alt="" />
          </SwiperSlide>

        </Swiper>

        <p className="skillsSliderTitle">
          3D Modeling Programs
        </p>

        <Swiper className="skillsSlider"
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          grabCursor={true}
          loop={true}
        >

          <SwiperSlide>
            <img className="skillsImg" src={program7} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program8} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program9} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program10} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program11} alt="" />
          </SwiperSlide>

        </Swiper>

        <p className="skillsSliderTitle">
          Developer Programs
        </p>

        <Swiper className="skillsSlider"
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          grabCursor={true}
          loop={true}
        >

          <SwiperSlide>
            <img className="skillsImg" src={program11} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program11} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program11} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program11} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="skillsImg" src={program11} alt="" />
          </SwiperSlide>

        </Swiper>

      </div>
     
{/* Contact Me */}
      <div className="contact tab">
        <p className="tabTitle">Contact me</p>

        <div className="myInfo">

          <img className="infoLogo" src={Logo2} alt="" />

          <div className="infoAndImg">
            <img className="infoImg" src={Icon1} alt="" />
            <p>tga.blom@gmail.com</p>
          </div>

          <div className="infoAndImg">
            <img className="infoImg" src={Icon2} alt="" />
            <p>My GitHub</p>
          </div>

          <div className="infoAndImg">
            <img className="infoImg" src={Icon3} alt="" />
            <p>My Artstation</p>
          </div>

          <div className="infoAndImg">
            <img className="infoImg" src={Icon4} alt="" />
            <p>My LinkedIn</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;