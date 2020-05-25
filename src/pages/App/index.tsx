import React from 'react';
import VideoBackground from 'components/VideoBackground';
import Modal from 'components/Modal';
import ContactForm from 'components/ContactForm';
import './App.scss';

function App() {
  return (
    <VideoBackground autoPlay={true} loop={true} muted={true}>
      <div className="container">
        <figure className="image">
          <img src="img/trademark-technology.png" alt="Trademark Technology" />
        </figure>
        <h1 className="title">We're At Capacity</h1>
        <h5 className="subtitle">
          We love our clients and we want to give them the attention they
          deserve so we won't be taking on any more projects at this time.
        </h5>
        <p>
          If you would like to talk to us about a project that isn't time
          sensitive or would just like to say hi, hit the button below.
        </p>
        <Modal buttonText="Contact">
          <div className="card">
            <div className="card-content">
              <h1 className="form-title">Contact Us</h1>
              <hr />
              <ContactForm />
            </div>
          </div>
        </Modal>
      </div>
    </VideoBackground>
  );
}

export default App;
