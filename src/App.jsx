import General from "./components/general";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import Print from "./components/Print";

import { useState } from "react";

import "./styles/main.scss";

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [educationSection, setEducationSection] = useState({
    schoolName: "",
    title: "",
    date: "",
  });
  const [experience, setExperience] = useState([
    {
      companyName: "",
      position: "",
      responsibilities: "",
      dateFrom: "",
      dateTill: "",
    },
  ]);
  const [totalExperienceJobs, setTotalJobs] = useState(1);
  const [aboutSection, setAboutSection] = useState("");

  function hangdleNextBtn(e) {
    e.preventDefault();
    setCurrentSection(currentSection + 1);
  }

  function handlePrevSection(e) {
    e.preventDefault();
    setCurrentSection(currentSection - 1);
  }

  function handleSubmitClick(e) {
    e.preventDefault();
    setCurrentSection(currentSection + 1);
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="">
        My CV generator
      </h1>
      <section className="mainSection">
        {/* <form action=""> */}
        {currentSection === 0 && (
          <General
            setPersonalInfo={setPersonalInfo}
            personalInfo={personalInfo}
          />
        )}
        {currentSection === 1 && (
          <Education
            educationSection={educationSection}
            setEducationSection={setEducationSection}
          />
        )}
        {currentSection === 2 && (
          <Experience
            experience={experience}
            setExperience={setExperience}
            totalJobs={totalExperienceJobs}
            setTotalJobs={setTotalJobs}
          />
        )}
        {currentSection === 3 && (
          <About
            aboutSection={aboutSection}
            setAboutSection={setAboutSection}
          />
        )}
        {currentSection == 4 && (
          <Print
            personalInfo={personalInfo}
            educationSection={educationSection}
            experience={experience}
            aboutSection={aboutSection}
          />
        )}

        <hr />
        <div className="btnsContainer">
          <button
            disabled={currentSection > 2}
            className=""
            onClick={hangdleNextBtn}>
            Next
          </button>
          <button
            disabled={currentSection < 1}
            className=""
            onClick={handlePrevSection}>
            Back
          </button>
        </div>
        {currentSection === 3 && (
          <div className="btnsContainer">
            <button onClick={handleSubmitClick}>Submit</button>
          </div>
        )}

        {/* onsubmit make new printable page, with all the data, and style it like the examples online */}
      </section>
    </>
  );
};

export default App;
