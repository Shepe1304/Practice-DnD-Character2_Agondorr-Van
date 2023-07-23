import React, { useEffect } from "react";
import "./Newspaper.css";
import ruins from "./img/Gronz-Bay-Ruins.jpg";
import agondorr from "./img/AgondorrVanNewspaper.png";
import agondorr2 from "./img/AgondorrVanNewspaper2.png";
import { useState } from "react";

const Newspaper = () => {
  const [revealed, setRevealed] = useState(false);

  const [styleFatality, setStyleFatality] = useState({
    color: "black",
  });

  const [styleAgondorrText, setStyleAgondorrText] = useState({
    backgroundColor: "black",
  });
  const [styleHeadline, setStyleHeadline] = useState({ zIndex: "-1" });
  const [styleFault, setStyleFault] = useState({ zIndex: "-1" });
  const [visible, setVisible] = useState(false);

  // const Effect = () => {
  //   setVisible(true);
  //   setTimeout(() => {
  //     setVisible(false);
  //   }, 1000);
  // };

  const Reveal = () => {
    setVisible(true);
    setRevealed(true);
    setStyleFatality({
      color: "rgb(179, 0, 0)",
      fontWeight: "bolder",
    });
    setStyleAgondorrText({
      fontFamily: "'Times New Roman', Times, serif",
    });
    setStyleHeadline({ zIndex: "100" });
    setStyleFault({ zIndex: "200" });
    // console.log("The secret unfolds");
  };

  const Hide = () => {
    setVisible(false);
    setRevealed(false);
    // console.log("The secret hides");
    setStyleFatality({
      color: "black",
    });
    setStyleAgondorrText({
      backgroundColor: "black",
    });
    setStyleHeadline({ zIndex: "-1" });
    setStyleFault({ zIndex: "-1" });
  };

  return (
    <div className="newspaper">
      {visible ? <div className="glitch-effect"></div> : null}
      <div className="newspaper--name_block">
        <div className="newspaper--name">INTIS PRESS</div>
        <div className="newspaper--subtext">WEEKLY NEWSPAPER</div>
      </div>
      <div className="newspaper--date">Tuesday, June 20, 1208</div>
      <div className="newspaper--headline">
        <div className="newspaper--headline1">GRONZ BAY: NOW MERE RUBBLES</div>
        <div className="newspaper--headline2" style={styleHeadline}>
          GRONZ BAY: <span>IT'S ALL MY FAULT</span>
        </div>
      </div>
      <div className="fault" style={styleFault}>
        <div>I couldn't save him.</div>
        <div>I couldn't save her.</div>
        <div>I couldn't save them.</div>
      </div>
      <div className="newspaper--content">
        <div className="newspaper--col">
          <div className="newspaper--paragraph">
            <span className="tab"></span>A catastrophic disaster struck the
            once-thriving town of Gronz this Monday, leaving it in ruins and
            more than{" "}
            <span className="fatality" style={styleFatality}>
              80,000 dead
            </span>
            . The trade in Riclindis Harbour was consequently suspended.
          </div>
          <div className="newspaper--main_img">
            <img src={ruins} alt="" />
          </div>
        </div>
        <div className="newspaper--col">
          <div className="newspaper--paragraph">
            <span className="tab"></span>The attack has shocked the nation and
            raised fears of further violence. Gronz Bay is a popular tourist
            destination and the attack has dealt a major blow to the local
            economy.
          </div>
          <div className="newspaper--paragraph">
            <span className="tab"></span>Evidence suggests that the cause of
            destruction is a chain of mass-scale terrorist bombings as more than
            1000 large craters were found in the town, especially within the
            slums of the town. Motives behind this heinous act remain unknown.{" "}
          </div>
          <div className="newspaper--paragraph">
            <span className="tab"></span>Rescuers are rapidly scouring the
            rubbles for survivors, and the government urges citizens from nearby
            areas to stay calm and vows to bring the criminals to justice in
            protection of Intis law and safety. The government is investigating
            the matter with utmost effort.
          </div>
          <div className="newspaper--paragraph">
            <span className="tab"></span>The current prime suspect is the famous
            antique collector{" "}
            <span
              className="agondorr"
              onMouseOver={Reveal}
              onMouseLeave={Hide}
              // onMouseEnter={Effect}
              style={styleAgondorrText}
            >
              Agondorr Van
            </span>
            . Recently, he has vanished from the auction market and went
            missing. His personal items were curiously discovered on the shore
            near the explosions.
          </div>
        </div>
        <div className="newspaper--col">
          <div className="newspaper--picture">
            {revealed ? (
              <img src={agondorr2} alt="Agondorr Van" />
            ) : (
              <img src={agondorr} alt="Agondorr Van" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newspaper;
