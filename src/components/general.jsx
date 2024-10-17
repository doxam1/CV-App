export default function General({ personalInfo, setPersonalInfo }) {
  function handleSetPersonalInfo(name, value) {
    setPersonalInfo({ ...personalInfo, [name]: value });
  }
  return (
    <div className="section">
      <h2> Personal information </h2>
      <div>
        <label htmlFor="full_name">Full name:&nbsp;</label>
        <input
          type="text"
          id="full_name"
          className=""
          name="fullName"
          value={personalInfo.fullName}
          onChange={(e) => handleSetPersonalInfo(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:&nbsp;</label>
        <input
          type="Email"
          id="email"
          className=""
          name="email"
          value={personalInfo.email}
          onChange={(e) => handleSetPersonalInfo(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:&nbsp;</label>
        <input
          type="Tel"
          id="phone"
          className=""
          name="phone"
          value={personalInfo.phone}
          onChange={(e) => handleSetPersonalInfo(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          id="address"
          name="address"
          value={personalInfo.address}
          onChange={(e) => handleSetPersonalInfo(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
}
