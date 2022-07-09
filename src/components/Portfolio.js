import React from "react";
import IMG1 from "./images/portfolio1.jpg";
import IMG2 from "./images/portfolio2.jpg";
import IMG3 from "./images/portfolio3.jpg";
import IMG4 from "./images/portfolio4.jpg";
import IMG5 from "./images/portfolio5.png";
import IMG6 from "./images/portfolio6.jpg";

function Portfolio() {
  return (
    <section className="h-screen  px-28 py-10  mb-28" id="portfolio">
      <div className="flex flex-col items-center mb-8">
        <div className="text-slate-300 text-sm">
          <h5>My Recent Work</h5>
        </div>
        <div className="text-blue-400 text-3xl">
          <h2>Portfolio</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img src={IMG1} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            This is a portfolio item title
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https: //dribbble.com/Alien pixels"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img src={IMG2} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            This is a portfolio item title
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https: //dribbble.com/Alien pixels"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img src={IMG1} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            This is a portfolio item title
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https: //dribbble.com/Alien pixels"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img src={IMG3} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            This is a portfolio item title
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https: //dribbble.com/Alien pixels"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img src={IMG4} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            This is a portfolio item title
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https: //dribbble.com/Alien pixels"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img src={IMG5} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            This is a portfolio item title
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https: //dribbble.com/Alien pixels"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
