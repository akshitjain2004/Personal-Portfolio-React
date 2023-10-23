import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">Rookie</span>
      </div>
      <div className="about_box">
        <i className="bx bx-trophy about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">15+ Projects</span>
      </div>
    </div>
  );
};

export default Info;
