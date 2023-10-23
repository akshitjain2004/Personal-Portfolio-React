import React from 'react';
import "./Skills.css";
import Frontend from './Frontend';
import Backend from './Backend';


const Skills = () => {
  return (
    <section className="skills section " id="skills">
        <center>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Lvl</span></center>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
        </div>
    </section>
  );
}

export default Skills;