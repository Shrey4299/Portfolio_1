import React from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import ME from "./images/right.png";

function Header() {
  return (
    <header className=" pt-28 px-5 md:px-28   overflow-hidden mb-28  ">
      <div className="flex  justify-center gap-8 w-full">
        <div className=" md:flex w-full  ">
          <div className=" justify-center items-center w-full md:w-1/2 p-5 rounded-lg   ">
            <img
              src={ME}
              className="  object-cover mx-auto opacity-70   "
              alt=""
            />
          </div>

          <div className="mx-auto text-center items-center flex flex-col justify-center items-center  relative w-1/2  ">
            <h5 className="text-slate-300 mb-5 font-semibold">
              FREE BUSSINESS LISTING DIRECTORY{" "}
            </h5>
            <h1 className=" font-semibold text-5xl  mb-5">LEADS4NEEDS</h1>
            <h5 className="text-slate-300 mb-5 font-semibold text-2xl">
              $ FREE
            </h5>
            <CTA />
            {/* <HeaderSocial/> */}
            {/* <a href="#contact" className='absolute right-[-2.3rem] bottom-20 transform rotate-90 text-sm text-blue-400 '>Scroll Down</a> */}
            <div>
              <p className="text-slate-300">
                Leads4Needs is a Free Local Business Listing Directory and
                Promote Your Local Business Online For Free Engagement More
                Customers and get Many Leads
              </p>
            </div>
            <div className="hidden">
              <p className="text-slate-300">
                Leads4Needs is a Free Local Business Listing Directory and
                Promote Your Local Business Online For Free Engagement More
                Customers and get Many Leads Free Listing Free Leads Free
                Marketing Free Promotion
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
