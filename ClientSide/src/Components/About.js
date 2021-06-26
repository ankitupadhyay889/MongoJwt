import React from "react";
// import { useHistory } from "react-router";

const About = () => {

  // const history = useHistory();

  // const callKar = async () => {
  //   try {
      
  //     const res = await fetch("/about" , {
  //         method:"GET",
  //         headers:{
  //             Accept: "application/json",
  //             "Content-Type": "application/json"
  //         },
  //         credentials: "include"
  //     });

  //     const data = await res.json();
  //     console.log(data);

  //     if(res.status === 200){
  //       const error = new Error(res.error);
  //       throw error;
  //     }

  //   } catch (error) {
  //     console.log(error);
  //     history.push("/login");
  //   }
  // }
  
  // useEffect(() => {
  //   callKar();
  // })

  return (
    <div className="container">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">About Me</h1>
          <p className="lead text-muted">
            Are you Searching for a Web Developer?. You have came to the right
            Place I am Ankit Upadhyay
            <br />. I am MERN Stack Developer and Focused on Crafting great Web
            Experiences. I started working with computer but I found myself into
            Web Design / Development since 2019
            <br />. I enjoy Crafting Beautiful Designed ,intuitive and
            functional websites.Apart from web development, i know graphic
            designing web UI/UX Design.
          </p>
        </div>
      </section>

      <div>
      <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Vestibulum id ligula porta felis euismod semper.Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="image/9.jpg" data-holder-rendered="true"/>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Created By ❤️ Ankit Upadhyay</p>
      </div>
    </div>
  );
};

export default About;
