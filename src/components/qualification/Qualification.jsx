import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <center>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>
      </center>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className=" uil uil-graduation-cap qualification__icon" />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className=" uil uil-graduation-cap qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  Vellore Institute of Technology
                </span>
                <div className="qualification__calendar">
                  <i className=" uil uil-graduation-cap qualification__icon" />
                  2021-2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">12th</h3>
                <span className="qualification__subtitle">
                  Shiv Jyoti Convent School
                </span>
                <div className="qualification__calendar">
                  <i className=" uil uil-graduation-cap qualification__icon" />
                  2020-2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th</h3>
                <span className="qualification__subtitle">RBSE</span>
                <div className="qualification__calendar">
                  <i className=" uil uil-graduation-cap qualification__icon" />
                  2018-2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Oasis Infobyte</span>
                <div className="qualification__calendar">
                  <i className=" uil uil-graduation-cap qualification__icon" />
                  2012-2015
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Social Media Lead</h3>
                <span className="qualification__subtitle">FYI</span>
                <div className="qualification__calendar">
                  <i className=" uil uil-graduation-cap qualification__icon" />
                  2022- Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Dev</h3>
                <span className="qualification__subtitle">OpenSource</span>
                <div className="qualification__calendar">
                  <i className=" uil uil-graduation-cap qualification__icon" />
                 2022-Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  Freelance - Remote
                </span>
                <div className="qualification__calendar">
                  <i className=" uil uil-graduation-cap qualification__icon" />
                  2019-Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
