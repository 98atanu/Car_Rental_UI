import React from "react";
import BMWCar from "../../assets/car2.png";
import KIACar from "../../assets/car5.png";
import BMW1Car from "../../assets/car6.png";

const CarData = [
  {
    name: "BMW UX",
    price: 100,
    image: BMWCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: KIACar,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: BMW1Car,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24 pt-12 dark:bg-black dark:text-white  ">
      <div className="container">
        <h1
          data-aos="fade-up"

          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 "
        >
          Lorem, ipsum dolor.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet
          veniam error.
        </p>
      </div>
      {/* Car Listing Cards */}
      <div className="container">
        <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 ">
          {CarData.map((data,index) => (
            <div key={index} 
            data-aos="fade-up"
         aos-duration = {data.aosDelay}
            className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
              <div className="w-full h-[120px] ">
                <img className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700" src={data.image} alt="" />
              </div>
              <div>
                <h1>{data.name}</h1>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p >{data.price}/Day</p>
                  <a href="#">Details</a>
                </div>
                  <p className="text-xl font-semibold absolute top-0 left-3">12Km
                  </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid place-content-center mt-8">
        <button 
        data-aos ="fade-up"
        className="button-outline">
          Get Started
        </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
