import './App.css';
import Tim from "./pictures/Tim.jpg"
import Logo from "./pictures/Logo.png"

function App() {
  return (
    <div className="App">

      <div className="introTab">
        <img className="profilePicture" src={Tim}/>
        <img className="logo" src={Logo}/>
        <div className="logoText">
          <p>Front-End Developer</p>
          <p>3D Game Artist</p>
          <p>Cat lover</p>
        </div>
      </div>
      
      <div className="aboutMeTab">
        <p>About me (info)</p>
        <p>
          I am a Front End Developer and a 3D Artist. I live in the Netherlands in a little town called Heerhugowaard. 
          I spent most of my time playing video games, learning new code, making 3D art and coming up with new cool projects I never end up finishing.
        </p>
      </div>
      
      <div className="codingTab">
        <p>Coding projects</p>
      </div>
      
      <div className="modelingTab">
        <p>3D projects</p>
      </div>
      
      <div className="skillsTab">
        <p>My programs skills</p>
      </div>
     
      <div className="contactTab">
        <p>Contact me</p>
      </div>

    </div>
  );
}

export default App;