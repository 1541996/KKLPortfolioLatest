import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-2.svg",
    title: "Software Development",
    content:"I offer a variety of website design and development services, from creating mobile web development solutions and responsive website designs to building custom e-commerce and booking systems using the latest technologies.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-1.svg",
    title: "Good Customer Support",
    content:
      "After developing softwares, I give good customer support for you. If you got some difficulties or problems when using software, You could contact freely to me anytime anywhere. I am ready to support your business.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/services-3.png",
    title: "Business consulting",
    content:
      "I give good and free consulting for your business with IT. You can discuss which software is suitable for your business. When you don't know how to start your business with softwares, I am here to consult with you.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
