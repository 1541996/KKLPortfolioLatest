import React from "react";
import TrackVisibility from "react-on-screen";
//import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Kyaw Kyaw Lwin",
  avatarImage: "/images/kklphoto.png",
  content:
    "I earned my bachelor degree from University of Computer Studies, Yangon and have built a strong professional foundation. My expertise includes consulting, designing, developing, managing, and maintaining software applications for various clients. With over 7 years of experience as a software developer, I specialize in web development using technologies like C#, .Net Framework, ASP.NET MVC, ASP.NET CORE, Blazor, HTML, CSS, Bootstrap, JavaScript, JQuery, AJAX and AngularJS. I excel in developing web applications, websites, APIs, and databases, employing both Waterfall and Agile methodologies. Passionate about technology and collaborative problem-solving, I have successfully managed over 20 software development projects.",
};

const progressData = [
  {
    id: 1,
    title: "C# (.Net Entity framework, ASP.Net MVC,ASP .Net Core Framework, RESTful API)",
    percantage: 95,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "MS Sql Server, MySQL",
    percantage: 80,
    progressColor: "#6C6CE5",
  },
  {
    id: 3,
    title: "HTML, CSS, Bootstrap, Responsive Web Design, Javascript, JQuery, AJAX",
    percantage: 95,
    progressColor: "#FF4C60",
  },
  {
    id: 4,
    title: "Angular, React, React Native",
    percantage: 50,
    progressColor: "#19BEED",
  },
 
  {
    id: 5,
    title: "Messenger Chat Bot(using Microsoft Bot Framework",
    percantage: 80,
    progressColor: "#4CB14B",
  },

  {
    id: 6,
    title: "Blazor",
    percantage: 95,
    progressColor: "#FFD15C",
  },

 
];

// const counterData = [
//   {
//     id: 1,
//     title: "Projects completed",
//     count: 198,
//     icon: "icon-fire",
//   },
//   {
//     id: 2,
//     title: "Cup of coffee",
//     count: 5670,
//     icon: "icon-cup",
//   },
//   {
//     id: 3,
//     title: "Satisfied clients",
//     count: 427,
//     icon: "icon-people",
//   },
//   {
//     id: 4,
//     title: "Nominees winner",
//     count: 35,
//     icon: "icon-badge",
//   },
// ];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} className="img-circle" />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="/images/Kyaw_Kyaw_Lwin.pdf" target="_blank" rel="noreferrer" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="spacer" data-height="70"></div> */}
        {/* <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default About;
