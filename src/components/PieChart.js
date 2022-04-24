import React from "react";

import charimg from "../assets/c-w.png";
import charimg2 from "../assets/c-mobile.png";

const ChartGraph = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="offer_section_button orangecolor "
      >
        <button>TOKENOMICS</button>
      </div>

    
    <div className="chart_Section">
    <div className="window_image">
        <img src={charimg2} alt="okay" />
      </div>

      <div className="mobile_image">
        <img src={charimg} alt="okay" />
        </div>


      <div className="chart">
        <div className="chartText-list d-lg-none ">
          <h3>Staking</h3>
          <h3>Nft $ game</h3>
          <h3>Development</h3>
          <h3>liquidity pool</h3>
        </div>
      </div>
    </div>

     
    </div>
  );
};

export default ChartGraph;
