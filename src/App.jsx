import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Column from './components/Column';
import Ethan from './images/1709670453426.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <h1>Hi, I'm Andrew Silaghi</h1>
        <button className="right-btn">Contact</button>
      </div>
      <h3>Frontend web designer</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        quasi soluta commodi magnam magni. Accusantium explicabo sit repellat
        omnis obcaecati itaque sequi iste id esse dolores ullam eligendi
        similique, fugit alias voluptates non aliquam, a iure dolor! Modi,
        culpa porro a ad in adipisci suscipit quia dolorum maxime aspernatur
        iusto. Perspiciatis at atque distinctio, voluptas minima laborum
        commodi reiciendis. Quo, deleniti voluptatem! Possimus reprehenderit
        quod, totam deleniti, omnis vel similique vitae eum laudantium
        aspernatur repellendus velit quos magnam tenetur non! Necessitatibus
        debitis quasi reprehenderit. Ab voluptatum consectetur ex cupiditate
        delectus, inventore corrupti provident consequatur! Quos incidunt
        facilis beatae ea quae?
      </p>

      <div className="columns-container">
        <Column
        
          image={Ethan}
          text="ethan is the most zesty boy in our coding class. it smells like cherries when he walks by and we all laugh at him because of it."
          
        />
      </div>
    </div>
  );
}

export default App;
