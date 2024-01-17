import { Link } from 'react-scroll';

const Collections = () => {
    const collections = [
        { image: 'col1.PNG', title: 'Real-time Strategy games', description: 'Challenge yourself in a battle of wits and skill vs NPCs and other players alike.' },
        { image: 'col2.PNG', title: 'Role-playing games', description: 'Lose yourself in exotic worlds where your mission is to save the day.' },
        { image: 'col3.PNG', title: 'Casual games', description: 'A collection of unique and quirky games to while away your day.' }
    ];

    return (
        <>
            <div id='Collections' style={{ minHeight: '100vh' }}>
                {collections.map((collection, index) => (
                    <div key={index} id={`Collections-${index}`} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#000123', paddingBottom: '30px', minHeight: '100vh' }}>
                        <div className='container mt-5'>
                            <div className="row">
                                <div className="col-md-6 my-auto mb-2 p-2 d-flex align-items-center justify-content-center">
                                    <img className='img-fluid' src={require(`../images/${collection.image}`)} alt="" style={{ maxWidth: '90%', height: 'auto' }} />
                                </div>
                                <div className="col-md-6 my-auto">
                                    <div>
                                        <h1 className='mb-4 w-75' style={{ color: '#FF0F7B', fontSize: '2.5rem', fontFamily: 'Orbitron' }}>{collection.title.toUpperCase()}</h1>
                                        <p className='mb-2' style={{ color: 'white', fontFamily: 'Krona One', marginBottom: '30px' }}>{collection.description}</p>
                                        <Link to={`Collections-${index + 1}`} smooth={true} duration={700}>
                                            <a href="#" className="btn text-light rounded-pill px-3 py-2" style={{ backgroundColor: "#FF0F7B", margin: '0', marginTop: '10px' }}>
                                                <span className="me-2 text-light" style={{ color: '#7808d0', fontWeight: 'bolder' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                                    </svg>
                                                </span>
                                                <span style={{ fontWeight: 'bolder' }}>SEE MORE</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Collections;
