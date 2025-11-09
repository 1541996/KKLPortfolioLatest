import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor of Computer Science (B.C.Sc)",
    years: "Dec 2012 - Feb 2018",
    content:
      "University of Computer Studies, Yangon (UCSY)",
  },
  {
    id: 2,
    title: "Certificate of Intenship(Position of Developer)",
    years: "May 2017 - July 2017",
    content:
      "NTT Data Myanmar Co., Ltd",
  },
  {
    id: 3,
    title: "Certificate of Professional Web Development",
    years: "Apr 2017 - June 2017",
    content:
      "Fairway Technology Co., Ltd",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    years: "Nov 2024 - Present",
    content:
      "Freelance",
  },
  {
    id: 2,
    title: "Software Engineer",
    years: "June 2018 - Oct 2024",
    content:
      "Yammobots Co.,Ltd",
  },
  {
    id: 3,
    title: "Internship Trainee",
    years: "May 2017 - July 2017",
    content:
      "NTT Data Myanmar Co., Ltd",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
