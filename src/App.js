import React from 'react';
import logo from './logo.svg';
import './animation.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="title">
        <h1 class="animated bounceInLeft delay-0s"> Daniel Na </h1>
        <h3 class="animated bounceInLeft delay-1s"> that's my name.</h3>
      </div>
      <div class="cards-list">
        <a href="https://studyping.com">
          <div class="card 1">
            <div class="card_image">
              <img src="https://res.cloudinary.com/drferrel/image/upload/v1587415032/Annotation_2020-04-20_133655_w3hzwq.png" />
              </div>
            <div class="card_title title-black">
              <p>StudyPing</p>
            </div>
          </div>
        </a>

        <a href="https://house-broken-torped.000webhostapp.com/">
          <div class="card 2">
            <div class="card_image">
              <img src="https://media.giphy.com/media/12UPyerJpVC2PzWkrz/giphy.gif" />
              </div>
            <div class="card_title title-white">
              <p>RIP Word Checker</p>
            </div>
          </div>
        </a>

      </div>
      <div class="content">
        <h2 class="animated rubberBand delay-5s"> Reach me by  <a href="mailto:element11sodium@gmail.com"> email </a> and check out my  <a href="https://github.com/sodiumkid"> github </a></h2>
      </div>

    </div>
  );
}

export default App;
