import React from 'react';
import { Link } from 'react-scroll';

const Shop = () => {
    

    return (
        <div id="shop" style={{ height: '95vh', backgroundColor: '#000123', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='container row text-center mb-5'>
                <h1 className='col-sm-12 fw-bolder mt-5' style={{ fontFamily: 'krona-one-regular', color: '#ffffff', fontSize: '60px' }}>
                    Shop at <span style={{ color: '#FF0F7B' }}>Kyobi</span>
                </h1>
                <p className='col-sm-12 fs-5 text-light w-75 mx-auto mt-4' style={{fontFamily:'Krona One'}}>
                    Looking for the latest releases? Or are retro classics more your thing?
                    At Kyobi, we stock a wide selection of titles for every kind of gamer.
                </p>
                <h2 className='col-sm-12' style={{ color: '#FF0F7B', fontFamily: 'Orbitron', marginTop: '50px' }}>our game collection</h2>
                <Link to="Collections" smooth={true} duration={500}>
                <a className='col-sm-12' href='#collections' style={{ color: '#FF0F7B', fontSize: '40px', fontWeight: 'bolder', cursor: 'pointer', textDecoration: 'none' }}>
                    ↓
                </a>
                </Link>
            </div>
            <hr />

        </div>
    );
};

export default Shop;
