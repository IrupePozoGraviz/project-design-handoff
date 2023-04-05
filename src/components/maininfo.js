import React from 'react';
import './css/main.css'
import { Header } from './header.js'

export const Hero = () => {
  return (
    <div className="hero-image">
      <Header />
      <div className="hero-container">
        <p className="goBeyond">GO</p>
        <p className="goBeyond1">BEYOND</p>
        <p className="goBeyond2">THE</p>
        <p className="goBeyond3">LIMITS </p>

        <div className="hero-paragraph">
          <p>Physical activity is vital for the body.
      Learn how to master unique skills where
      you&aposll develop strength, confidence and
      you&aposll defy yourself.
          </p>
          <button type="button" className="joinButton">Join us now</button>
        </div>
      </div>
    </div>
  );
}