import "../styles/_print.scss";

const Print = ({
  personalInfo,
  educationSection,
  experience,
  aboutSection,
}) => {
  return (
    <>
      <section className="section printable">
        <hr className="headerHr" />
        <div className="center">
          <h2>{`${personalInfo.fullName}`}</h2>
          <h5>{personalInfo.address}</h5>
          <h5>
            {personalInfo.phone} | {personalInfo.email}
          </h5>
        </div>
        <hr />
        <div className="divInPrint">
          <p style={{ margin: "0" }}>{aboutSection}</p>
        </div>
        <hr />
        <div className="divInPrint">
          <h5 style={{ marginBottom: "10px" }}>WORK HISTORY</h5>
          <p className="underline">{experience[0].companyName}</p>
          <p>
            from: {experience[0].dateFrom} to: {experience[0].dateTill}
          </p>
          {/* maybe format the date better? */}
          <p>{experience[0].responsibilities}</p>
        </div>
        <hr />
        <div className="divInPrint">
          <h5 style={{ marginBottom: "10px" }}> EDUCATION </h5>
          <p className="underline">{educationSection.schoolName}</p>
          <p>{educationSection.title}</p>
          <p>{educationSection.date}</p>
        </div>
      </section>

      <div className="btnsContainer">
        <button onClick={() => window.print()}>Print</button>
      </div>
    </>
  );
};

export default Print;
