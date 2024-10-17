/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";

function ExperienceDiv({ num, experience, setExperience }) {
  function handleSetExperience(num, name, value) {
    setExperience((prevExperience) =>
      prevExperience.map((exp, index) =>
        index === num ? { ...exp, [name]: value } : exp
      )
    );
  }
  return (
    <>
      <div>
        <label htmlFor={`companyName${num}`}>Company name:&nbsp;</label>
        <input
          type="text"
          id={`companyName${num}`}
          name="companyName"
          value={experience[num].companyName}
          onChange={(e) => {
            handleSetExperience(num, e.target.name, e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor={`position${num}`}>Position:&nbsp;</label>
        <input
          type="text"
          id={`position${num}`}
          name="position"
          value={experience[num].position}
          onChange={(e) => {
            handleSetExperience(num, e.target.name, e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor={`mainResponsibilities${num}`}>
          Main responsibilities:&nbsp;
        </label>
        <textarea
          name="responsibilities"
          id={`mainResponsibilities${num}`}
          style={{ resize: "none" }}
          rows={8}
          placeholder="Some words about your responsibilites"
          value={experience[num].responsibilities}
          onChange={(e) => {
            handleSetExperience(num, e.target.name, e.target.value);
          }}></textarea>
      </div>
      <div>
        <label htmlFor={`workedSince${num}`}>Worked since:&nbsp;</label>
        <input
          type="date"
          id={`workedSince${num}`}
          name="dateFrom"
          value={experience[num].dateFrom}
          onChange={(e) => {
            handleSetExperience(num, e.target.name, e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor={`workedTill${num}`}>Till:&nbsp;</label>
        <input
          type="date"
          id={`workedTill${num}`}
          name="dateTill"
          value={experience[num].dateTill}
          onChange={(e) => {
            handleSetExperience(num, e.target.name, e.target.value);
          }}
        />
      </div>
    </>
  );
}
const Experience = ({ experience, setExperience, totalJobs, setTotalJobs }) => {
  function handleSetTotalJobs(e) {
    e.preventDefault();
    setTotalJobs(totalJobs + 1);
    setExperience([
      ...experience,
      {
        companyName: "",
        position: "",
        responsibilities: "",
        dateFrom: "",
        dateTill: "",
      },
    ]);
  }

  return (
    <section className="section">
      <h2> Work experience </h2>
      {[...Array(totalJobs)].map((_, index) => (
        <Fragment key={index}>
          {index > 0 && <hr style={{ width: "100%" }} />}
          <ExperienceDiv
            num={index}
            setExperience={setExperience}
            experience={experience}
          />
        </Fragment>
      ))}

      <button onClick={handleSetTotalJobs}> Add more Jobs </button>
    </section>
  );
};

export default Experience;
