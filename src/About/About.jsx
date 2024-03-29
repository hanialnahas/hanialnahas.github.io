import React from "react"
{/* <div id="about_me" className="container px-4 py-5 scrollable_to">
            <h2 className="pb-2 border-bottom mb-5">About Me</h2>
            <div className="mt-5 mb-5 text-dark">
              <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-md-6">
                      <div className="card">
                          <div className="d-flex justify-content-between p-2 px-3">
                              <div className="d-flex flex-row align-items-center"> <img src="img/prof_2.png" width="50" className="rounded-circle" alt="Personal Image"/>
                                  <div className="d-flex flex-column ml-2 "> <span className="font-weight-bold">Hani Alnahas</span> <small className="text-primary"><a  href="resume-new.pdf" target="_blank">Software Engineer</a></small> </div>
                              </div>
                          </div>
                          <hr />
                          <div className="p-2">
                              <p className="text-justify m-2">I am a computer science student at Jacobs University Bremen, currently in my second year.<br />
                                  I like creating software in general and back-end applications specifically.<br />
                                  I play guitar in my free time and enjoy watching Movies and TV series.<br />
                                  feel free to reach out to me on any of my social media accounts.</p>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div> */}
const About = (props) => {
    return (
        <>
          <div  id="about" className="container scrollable_to fillDiv">
            <h1>Who Am I:</h1>
            <hr />
          <div className="p-2">
            <p className="text-justify m-2">bachelor of science in computer science.<br />
                    I like creating software in general and back-end applications specifically, with interest in machine learning and AI.<br />
                    I play guitar in my free time and enjoy watching Movies and TV series.<br />
                    feel free to reach out to me on any of my social media accounts.</p>
                
            </div>
            </div>
        </>
    )
}

export default About