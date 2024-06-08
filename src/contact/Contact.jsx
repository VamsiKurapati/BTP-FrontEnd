import React from 'react';
import './contact.css'; 
import pic from './'

function App() {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="Contact Us.css" />
        <title>Contact Us</title>
      </head>
      <body>
        <div className="navbar">
          <a href="Home.html">Home</a>

          <div className="dropdown">
            <button className="dropbtn">
              Menu
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="header">
                <h2>Projects</h2>
              </div>
              <div className="row">
                <h3>About the Project</h3>
                <h4>Perovskite Solar Cell</h4>
                <div className="mark">
                  <a href="Impact of Solar Cells To Environment.html">
                    1.Impact of Solar Cell to Environment
                  </a>

                  <a href="What is Perovskite Solar Cell.html">
                    2.What is Perovskite Solar Cell?
                  </a>

                  <a href="Incereasing Effiencncy of Solar cell using Perovskite.html">
                    3.Incereasing Effiencncy of Solar cell using Perovskite
                  </a>

                  <a href="Simulation of Perovskite Solar Cell in Oghmo Nano Software.html">
                    4.Simulation of Perovskite Solar Cell in Oghmo Nano Software
                  </a>

                  <a href="IOT Based Solar Power Monitoring System.html">
                    5.IOT Based Solar Power Monitoring System
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="Contact Us.html">Contact Us</a>
        </div>

        <div className="Topic">
          <h2>Team Members:</h2>
          <p>
            <strong>Member 1:</strong>
            <br />
            <strong>
              Vamsi Krishna (S20200020276) Email:{' '}
              <a href="mailto:vamsikrishna.k20@iiits.in">vamsikrishna.k20@iiits.in</a>
            </strong>
          </p>
          <p>
            <br />
            <strong>Member 2:</strong>
            <br />
            <strong> Vanteddu Thanishq</strong>
            <br />
            <p>
              <strong>Resume : </strong>
            </p>
            <a href="THANISHQ's New Resume.pdf" target="-blank">
              <img src="resumeicon.png" className="resumeicon" alt="Thanishq's Resume" title="Thanishq's Resume" />{' '}
            </a>
            <br />
            <br />
            <strong>Contact :</strong>
            <br />
            <a href="mailto:thanishq.v20@iiits.in">
              <img src="mailicon.jpg" className="mailicon" title="thanishq.v20@iiits.in" />
            </a>
            <a href="https://www.linkedin.com/in/vantedduthanishq/" target="_blank">
              <img src="linkedincon.jpg" className="linkedinicon" title="linked in" />
            </a>
            <a href="https://github.com/VantedduThanishq" target="_blank">
              <img src="githubicon.jpg" alt="Github" title="GitHub" className="Github" />
            </a>
          </p>
          <img src="Thanishq'sImage.jpg" className="mem2-pic" alt="Thanishq's Image" title="Thanishq" />
        </div>
      </body>
    </html>
  );
}

export default App;
