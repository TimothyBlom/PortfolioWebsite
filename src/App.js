import './style/App.css';
import Tim from "./pictures/Tim.jpg"
import Logo from "./pictures/Logo.png"

function App() {
  return (
    <div className="App">

      <div className="navigator">
        nav
      </div>

      <div className="introTab">
        <img className="profilePicture" alt="" src={Tim}/>
        <img className="logo" alt="" src={Logo}/>
        <div className="logoText">
          <p>Front-End Developer</p>
          <p>3D Game Artist</p>
          <p>Cat lover</p>
        </div>
      </div>
      
      <div className="aboutMeTab">
        <p>About me</p>
        <p>
          My name is Timothy Blom, I am a Front-End Developer and a 3D Artist. I live in the Netherlands in a little town called Heerhugowaard. 
          I spent most of my time playing video games, reading books, learning new code, making 3D art and coming up with new cool projects I never end up finishing.
        </p>
        <p>
          My goal is to find a job as an Front-End developer. I will achief this by constantly learning new code skills and showing it by 
          regularly updating my GitHub portfolio, and (the hardest part) by not giving up until I find a job. I have had/have a veriaty of jobs and nothing made 
          me as happy as creating digital content. Also coders are very cool people and fun to work with.
        </p>
      </div>
      
      <div className="codingTab">
        <p>Coding projects</p>
      </div>
      
      <div className="modelingTab">
        <p>3D projects</p>
      </div>
      
      <div className="skillsTab">
        <p>My programs skills (interactive cv)</p>
      </div>
     
      <div className="contactTab">
        <p>Contact me</p>
      </div>

    </div>
  );
}

export default App;