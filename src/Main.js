import React from "react";
import MainImg from "./image/main.jpg";
import Img from "./image/profile.jpg";
import { Divider } from "antd";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <div className="w-full bg-center bg-cover mt-20 bg-opacity-25"
    style={{
      backgroundImage: `url(${MainImg})`,
      borderRadius: "0 9rem 0 9rem",
    }}>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-8xl ">
            Hire Our
              <br className="hidden lg:inline-block" />
              Experience
              <br   />
              <span className="text-green-600"> Resource </span>
            </h1>
            <p className="text-base text-white uppercase lg:text-2xl mt-5 font-normal">
            We bring the breathe of our experience and industry knowledge to help you succeed.
            </p>
      

            <button className=" px-7 py-4 mt-4 text-sm font-medium text-white transition-colors duration-200 transform hover:bg-blue-600 border-2 border-white rounded-full sm:w-auto xs:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Hire Us
              </button>
          </div>
          <div className="lg:max-w-96 lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded h-96"
              alt="hero"
              src={Img}
            />
          </div>
        </div>
      </section>
      <Divider plain style={{color: '#fff', borderTopColor: "#fff", padding: "29px 74px",fontSize: "18px"}}>We Are Good In</Divider> 
      <Testimonials />

    </div>
  );
};

export default Main;
