import { useState, useRef } from "react";
import sprite from "../../images/sprite.svg";

const SendResumeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const fileRef = useRef(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    resetForm();
  }

  return (
    <form
      className="send-resume-form"
      autoComplete="off"
      onSubmit={ submitHandler }
    >
      <div>
        <label>
          <input
            type="text"
            name="name"
            required
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Full name*</span>
        </label>
        <label>
          <input
            type="email"
            name="email"
            required
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email*</span>
        </label>
      </div>
      <label>
        <textarea
          type="text"
          name="message"
          required
          placeholder=" "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span>Message*</span>
      </label>
      <label className="send-resume-form__file" tabIndex="0">
        <input type="file" name="file" required ref={fileRef}/>
        <div>
          <svg className="clip-image" width="10" height="20">
            <use href={ sprite + "#Vector" }></use>
          </svg>
        </div>
        <p>Upload CV</p>
      </label>
      <p className="send-resume-form__text">
        max file size 1MB; allowed extensions: doc, txt, pdf, docx
      </p>
      <button
        className="send-resume-form__button"
        type="submit"
      >
        Send Application
      </button>
    </form>
  );
}

export default SendResumeForm;
