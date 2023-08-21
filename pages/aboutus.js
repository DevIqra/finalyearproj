import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Yusra",
    },
    {
      name: "Iqra",
    
    },
    {
      name: "Aneela",
    },
    
  ];

  const factsArray = [
   
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
            A new way to design, create, and promote a new way to buy, sell, trade, and ultimately consume fashion. It offers new business models and revenue streams .
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
        
         
        </div>

      

        <div className={Style.aboutus_box_title}>
         
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
