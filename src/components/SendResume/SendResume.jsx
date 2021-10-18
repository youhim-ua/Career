
const SendResume = ({ children }) => {
  return (
    <section className="send-resume" id="contact-us">
      <div>
        <h2 className="send-resume__title">Not found the open vacancy now?</h2>
        <p className="send-resume__text">
          Apply anyway as we have new openings every week! 
        </p>
      </div>
      { children }
    </section>
  );
}

export default SendResume;
