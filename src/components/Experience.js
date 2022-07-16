import React from "react";
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section className="h-screen  px-28 py-10  md:overflow-hidden mb-28" id="experience">

      <div className='flex flex-col items-center mb-8' >
      <h5 className="text-slate-300 text-sm">What Skills I Have</h5>
      <h2 className="text-blue-400 text-3xl">My Experience</h2>

      </div>

      <div className=" grid  grid-row-2 md:grid-cols-2 gap-8 ">
        <div className=" bg-indigo-900 py-10 px-20 rounded-3xl border-2 border-transparent  hover:bg-transparent hover:cursor-default hover:border-indigo-900 ">
          <h3 className="text-center mb-8  text-blue-400">Fronted Development</h3>
          <div className="grid grid-cols-2 gap-8  ">
            <article className="flex gap-4  " >
              <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>

              <div>

              <h4>CSS </h4>
              <small>Intermediate </small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4>JavaScript</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4>Bootstrap</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>


              <h4>Tailwind </h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4>react</h4>
              <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="bg-indigo-900 py-10 px-20 rounded-3xl border-2 border-transparent  hover:bg-transparent hover:cursor-default hover:border-indigo-900 ">
        <h3 className="text-center mb-8  text-blue-400">Backend  Development</h3>
          <div className="grid grid-cols-2 gap-8">
            <article className="flex gap-4  ">
            
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4>Node Js </h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>

              <div>

              <h4>MongoDB </h4>
              <small>Intermediate </small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>

              <div>

              <h4>PHP </h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>
                
                <h4>MySql</h4>
              <small>Experienced</small>
                </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>
              <h4>Tailwind </h4>

              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>
              <h4>react</h4>

              <small>Experienced</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
