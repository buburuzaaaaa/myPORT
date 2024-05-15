import React from "react";
import './App.css';
import './styles/home.css'
import place from './styles/images/Group 12.png'
import ContactForm from './comp/ContactForm';
import SmoothScroller from './comp/SmoothScroller';
import grad from './styles/images/gradski.png'
import logers from './styles/images/logers.png'
import git from './styles/images/github.png'
import Navbar from './comp/Navbar'

function App() {
  // Function to handle downloading the resume PNG
  const handleDownloadResume = () => {
    // Replace 'path/to/your/resume.png' with the actual path to your resume image
    const resumeUrl = './Resume.pdf';
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the resume URL
    link.href = resumeUrl;
    // Set the download attribute to force the browser to download the file
    link.download = 'Resume.pdf';
    // Programmatically click the link to trigger the download
    document.body.appendChild(link);
    link.click();
    // Clean up by removing the link element
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className='flex-cont mobile-top'>
        <div className='the-text'>
          <h1>Hi, Im Andrew</h1>
          <h5>I am a aspiring <span>front end developer</span> seeking an opportunity at an entry-level position to showcase my team oriented and graphic design skills. Motivated and eager to provide my expertise in the world of front end development</h5>
          <button className='opener-button'>More Info</button><button className='sec-opener-button'>More Info</button>
        </div>
        <div className='imagyo'>
          <img src={place} alt="Placeholder"></img>
        </div>
      </div>
      <div className='below-scroll'>
        <SmoothScroller />
      </div>

      <div className='flex-cont'>
        <div className='the-text'>
          <h1>Skills</h1>
          <h5>In terms of my skills, I'm proficient in HTML, CSS, JavaScript, and ReactJS. HTML allows me to structure web content effectively, ensuring clarity and accessibility. With CSS, I can design visually appealing layouts and styles that enhance user experience. JavaScript enables me to add interactivity and dynamic functionality to websites, creating engaging user interfaces. Moreover, my expertise in ReactJS empowers me to build scalable and efficient web applications, leveraging its component-based architecture and state management capabilities. Overall, my understanding of these technologies equips me to tackle diverse web development challenges with confidence and creativity.</h5>
          <button className='opener-button' onClick={handleDownloadResume}>View Resume</button>
        </div>
        <div className='imagyo'>
          <img src={logers} alt="Logers"></img>
        </div>
      </div>
      <div className='flex-cont rev'>
        <div className='the-text'>
          <h1>Education</h1>
          <h5>Mountain Ridge Highschool, Phoenix

            Expected Grad: 2024

            West-MEC NEC Coding Program, Phoenix

            This two-year interactive program prepares students for a career as a software developer. The program teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code.

            Expected Grad: 2024</h5>
          <button className='opener-button' onClick={handleDownloadResume}> View Resume</button>
        </div>
        <div className='imagyo'>
          <img src={grad} alt="Graduation"></img>
        </div>
      </div>
      <div className='flex-cont also'>
        <div className='the-text'>
          <h1>My Projects</h1>
          <h5>In my "View on GitHub" section, I showcase my commitment to transparency and collaboration by providing direct links to the repositories of my projects. This not only demonstrates my dedication to open-source principles but also allows visitors to explore the codebase, understand my development process, and potentially contribute to ongoing projects.</h5>
          <a href="https://github.com/buburuzaaaaa"><button className='opener-button'>View Github</button></a>
        </div>
        <div className='imagyo' id="giter">
          <img src={git} alt="GitHub" ></img>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default App;
