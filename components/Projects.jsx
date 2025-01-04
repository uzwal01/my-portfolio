import Image from "next/image";
import React from "react";
import todoImg from "../public/assets/projects/Todo.png";
import portfolioImg from "../public/assets/projects/portfolio.png";
import ProjectItem from "./ProjectItem";
import FoodApp from "../public/assets/projects/food-app.png"
import weatherImg from "/public/assets/projects/weather.png";


const Projects = () => {
  return (
    <>
      <section id="projects" className="w-full ">
        <div className="max-w-[1240px] mx-auto px-2 py-[6rem]">
          <p className="uppercase text-xl tracking-widest text-[#FF7043]">
            Projects
          </p>
          <h2 className="py-4">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="To-Do List App"
              backgroundImg={todoImg}
              projectUrl="/todo"
            />
            <ProjectItem
              title="My Protfolio"
              backgroundImg={portfolioImg}
              projectUrl="/my-portfolio"
            />
            <ProjectItem
              title="A Food Delivery App"
              backgroundImg={FoodApp}
              projectUrl="/food-app"
            />
            <ProjectItem
              title="Weather App"
              backgroundImg={weatherImg}
              projectUrl="/weather-app"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
