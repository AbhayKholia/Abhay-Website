import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import "./About.css"

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">SAMEEP</span>{" "}
        



<h2 >Our Team</h2>

<div className="main">
  <div className="founder">
  <div className="box">
    <img src="" alt="" />
    <h1>Name</h1>
    <h4>CEO</h4>
    <p>About</p>
  </div>
  <div className="box">
  <img src="" alt="" />
    <h1>Name</h1>
    <h4>CEO</h4>
    <p>About</p>
  </div>
  <div className="box">
  <img src="" alt="" />
    <h1>Name</h1>
    <h4>CEO</h4>
    <p>About</p>
  </div>
  </div>

  <div className="developer">
    <div>
    <img src="" alt="" />
    <h1>Name</h1>
    <h4>CEO</h4>
    <p>About</p>
    </div>
    <div>
    <img src="" alt="" />
    <h1>Name</h1>
    <h4>CEO</h4>
    <p>About</p>
    </div>
    <div>
    <img src="" alt="" />
    <h1>Name</h1>
    <h4>CEO</h4>
    <p>About</p>
    </div>
    <div>
    <img src="" alt="" />
    <h1>Name</h1>
    <h4>CEO</h4>
    <p>About</p>
    </div>
    <div>
    <img src="" alt="" />
    <h1>Name</h1>
    <h4>CEO</h4>
    <p>About</p>
    </div>
  </div>
 
</div>



        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

