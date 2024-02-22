import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  const iconColor = '#FF0F7B';

  return (
    <div style={{ fontSize: '25px', fontFamily: 'Orbitron', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#000123', color: '#FFFFFF', margin: 0, padding: 0 }}>
      <div className='container' id="ContactUs">
        <div className='row d-flex f-wrap'>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <img className='img-fluid' src={require('../images/contactUs.jpg')} alt="" style={{ maxWidth: '80%', borderRadius: '8px' }} />
          </div>
          <div className='col-md-6 d-flex flex-wrap flex-column align-items-center'>
            <div>
              <h3 style={{ fontFamily: 'Orbitron', fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px', color: '#FF0F7B' }}>Contact Us</h3>
            </div>
            <div style={{ width: '100%', backgroundColor: '#FF0F7B', height: '5px', marginBottom: '50px', marginTop: '20px' }}></div>

            <div style={{ marginTop: '20px', textAlign: 'center', margin: 'auto' }}>
              <p style={{ fontSize: '1.2rem' }}>Contact Information:</p>
              <p style={{ fontSize: '1.2rem' }}><FaPhone style={{ color: iconColor }} /> +212-687782240</p>
              <p style={{ fontSize: '1.2rem' }}><FaEnvelope style={{ color: iconColor }} /> tahaouad@gmail.com</p>
              <p style={{ fontSize: '1.2rem' }}><FaMapMarkerAlt style={{ color: iconColor }} /> Morocco, Casablanca</p>
              <p style={{ marginTop: '20px' }}>Connect with us:</p>
              <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
                <li style={{ margin: '0 20px' }}><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: iconColor }} /></a></li>
                <li style={{ margin: '0 20px' }}><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: iconColor }} /></a></li>
                <li style={{ margin: '0 20px' }}><a href="https://www.linkedin.com/in/taha-ouad" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: iconColor }} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
