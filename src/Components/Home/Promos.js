import React from "react";
import { FiUser } from "react-icons/fi";
import app from '../../app.jpg'

const Promos = () => {
  return (
    <div className="my-20 py-10 md:px-20 px_8 bg-dry">
      <div className="grid lg:grid-cols-2 lg:gap-10 items-center ">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize  font-sans font-medium xl:leading-relaxed ">
            Download & Watch offline <br /> Enjoy every time from anywhere !!
          </h1>
          
          <p className="text-white text-sm xl:text-base leading-6 xl:leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
          
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
              HD 4k
            </div>
            <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
              <FiUser /> 2k
            </div>
          </div> 
        </div>
        <div>
          <img 
            src={app}
            alt="Mobile App"
            className="w-full object-contain"
          />
        </div>
      </div>   
    </div>
    
  );
};

export default Promos;
