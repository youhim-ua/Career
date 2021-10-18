
const AnimatedContainer = ({ children }) => {
  return (
    <div className="animated-container">
      <div className="blurred">
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div> 
      </div>
      { children }
    </div>
  );
}

export default AnimatedContainer;
