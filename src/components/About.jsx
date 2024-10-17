const About = () => {
  return (
    <section className="section about">
      <div>
        <label htmlFor="about">Plase enter some words about yourself, <br/> what are your skills, strengths?</label>
      </div>
      <div>
        <textarea name="about" id="about" rows='20'></textarea>
      </div>
    </section>
  )
}

export default About