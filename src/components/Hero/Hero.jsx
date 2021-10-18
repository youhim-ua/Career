

const Hero = ({ children }) => {
  return (
    <section className="hero">
      <div>
        <h1 className="hero__title">We’ve got the job for you</h1>
        <p className="hero__text">
          We offer experienced IT specialists to be involved in ground-breaking digital projects and IT novices to develop skills in our perspective workplace.
        </p>
      </div>
      {children}
      <a href="#vacancies" className="hero__link">See All Roles</a>
    </section>
  );
}

export default Hero;
