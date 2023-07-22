import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import "./Sale.css"
const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="sale">
        <Link to="/shop">
          <Image className="saleImgone h-full w-full object-cover" imgSrc={saleImgOne} />
          <h3>Mobile Sale</h3>
          <p>Up to <span>30%</span> sale for all electronics!</p>
          <button>Shop Now</button>
        </Link>
      </div>
      <div className=" w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="saletwo h-1/2 w-full">
          <Link to="/shop">
            <Image className=" saleImgtwo h-full w-full object-cover" imgSrc={saleImgTwo} />
            <h3>Cloths on Sale</h3>
          <p>Up to <span>50%</span> sale for all electronics!</p>
          <button>Shop Now</button>
          </Link>
        </div>
        <div className="salethree h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="saleImgthree " imgSrc={saleImgThree}
            />
            <h3>Grosery on Sale</h3>
          <p>Up to <span>20%</span> sale for all electronics!</p>
          <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
