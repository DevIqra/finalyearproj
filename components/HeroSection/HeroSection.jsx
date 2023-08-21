import {useState, useEffect, useContext} from "react";
import Image from "next/image";
// INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import images from "../../img";

// SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext"

const HeroSection = () => {
  const {titleData} = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData} 🖼️</h1>
          <p>
            Discover the most outstanding NTFs of fashion. Create
            your NTFs and sell them
          </p>
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.herosecond}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
