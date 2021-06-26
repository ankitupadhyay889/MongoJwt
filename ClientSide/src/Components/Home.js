import React from 'react';

const Home = () => {
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
            <br/><br/><br/>
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src="image/4.jpg" alt="ima" width="140" height="140"/>
                    <h2>MongoDB</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src="image/6.jpg" alt="ima" width="140" height="140"/>
                    <h2>JWT</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src="image/7.jpg" alt="ima" width="140" height="140"/>
                    <h2>NODEJS</h2>
                    <p>Donec sed odio dui. Cras justo odio, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                </div>
                </div>
            </div>
            <footer className="footer">Created By ❤ AnkitTech Pvt.Ltd © 2021</footer>
        </>
    );
};

export default Home;