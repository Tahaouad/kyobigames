import React from 'react';
import { Link } from 'react-scroll';

const Reviews = () => {
    return (
        <div id="Reviews" className='my-auto' style={{ height: '95vh', backgroundColor: '#000123', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container text-center text-light">
                <h1 style={{ fontFamily: 'Orbitron', fontSize: '2.5rem', marginBottom: '30px', color: '#FF0F7B' }}>Game Reviews</h1>
                <div className='row'>
                    <div className="col-md-4 mb-5">
                        <h3 style={{ fontFamily: 'Orbitron', fontSize: '1.5rem', marginBottom: '10px', color: '#FF0F7B' }}>Championship Racing Pro</h3>
                        <p style={{ fontFamily: 'Krona One', fontSize: '1rem' }}>
                            "Game reviews from other customers offer a great way to drive your sales." <br />
                            – Shameeka Taylor
                        </p>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h3 style={{ fontFamily: 'Orbitron', fontSize: '1.5rem', marginBottom: '10px', color: '#FF0F7B' }}>New Moon Rising</h3>
                        <p style={{ fontFamily: 'Krona One', fontSize: '1rem' }}>
                            "Game reviews from other customers offer a great way to drive your sales." <br />
                            – Jordan Johnson
                        </p>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h3 style={{ fontFamily: 'Orbitron', fontSize: '1.5rem', marginBottom: '10px', color: '#FF0F7B' }}>Grand Pinball Masters</h3>
                        <p style={{ fontFamily: 'Krona One', fontSize: '1rem' }}>
                            "Game reviews from other customers offer a great way to drive your sales." <br />
                            – Caden Matthews
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};


export default Reviews;
