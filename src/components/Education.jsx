function Education({ educationSection, setEducationSection }) {
  function handleSetEducationSection(name, value) {
    setEducationSection({ ...educationSection, [name]: value });
  }

  return (
    <section className="section">
      <h2>Education </h2>
      <div>
        <label htmlFor="schoolName"> School name:&nbsp;</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={educationSection.schoolName}
          onChange={(e) =>
            handleSetEducationSection(e.target.name, e.target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="titleOfStudy">Title of study:&nbsp;</label>
        <input
          type="text"
          id="titleOfStudy"
          value={educationSection.title}
          name="title"
          onChange={(e) =>
            handleSetEducationSection(e.target.name, e.target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="dateOfStudy"> Date of study:&nbsp;</label>
        <input
          type="date"
          id="dateOfStudy"
          name="date"
          value={educationSection.date}
          onChange={(e) =>
            handleSetEducationSection(e.target.name, e.target.value)
          }
        />
      </div>
    </section>
  );
}

export default Education;
