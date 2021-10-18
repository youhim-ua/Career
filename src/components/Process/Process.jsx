import useWindowWidth from "../../hooks/useWindowWidth";

const Process = ({ children }) => {
  const windowWidth = useWindowWidth();

  return (
    <section className="process">
      <div>
        <h2 className="process__title">FreySoft Recruitment process</h2>
        {windowWidth < 768 ?
          <p className="process__text">
            From the start, you will feel the responsive and effective process of recruiting.
            The main is bureaucracy-free environment inside the company. Identifying the right
            talent, attracting them, and motivating them to apply is what we strive for in our
            recruitment process. We have two key phases of hiring the candidate. After, you get
            either feedback or an offer.
          </p>
          :
          <div>
            <p className="process__text">
              From the start, you will feel the responsive and effective process of recruiting.
              The main is bureaucracy-free environment inside the company.
            </p>
            <p className="process__text">
              Identifying the right talent, attracting them, and motivating them to apply is
              what we strive for in our recruitment process. We have two key phases of hiring
              the candidate. After, you get either feedback or an offer.
            </p>
          </div>
        }
      </div>
      { children }
    </section >
  );
}

export default Process;
