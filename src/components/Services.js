import React from "react";
import {BiCheck} from 'react-icons/bi'


function Services() {
  return (
    <section
      className=" h-screen  px-28  py-10   mb-28"
      id="service"
    >
     <div className='flex flex-col items-center mb-8'>
        
        <div className="text-slate-300 text-sm">
         What I offer
        </div>
        <div className="text-blue-400 text-3xl">
         Services
        </div>
            </div> 
      <div className="grid grid-cols-3 gap-8 ">
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl ">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">UI / UX DESIGN</h3>
          </div>
          <ul className="p-8 ">
            <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-md">Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 " >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           
          </ul>
        </article>

        {/* end of ui /ux */}
       
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl ">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">Web Development</h3>
          </div>
          <ul className="p-8 ">
            <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-md">Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 " >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           
          </ul>
        </article>
        {/* end of web dev */}
        
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl ">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">Content Content</h3>
          </div>
          <ul className="p-8 ">
            <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-md">Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           <li className="flex gap-4 " >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
           
          </ul>
        </article>
        {/* end of content creation */}
        

      </div>
    </section>
  );
}

export default Services;
