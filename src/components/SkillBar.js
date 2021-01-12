import React, { Fragment } from "react";

export const SkillBar = () => {
  return (
    <Fragment>
      <h1>SKILL BAR</h1>
      <div className="container">
        <div className="wrapper">
          <div className="php first">
            PHP<span>87%</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="css second">
            CSS<span>50%</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="htm third">
            HTML<span>71%</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="javascript fourth">
            JAVASCRIPT<span>64%</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
