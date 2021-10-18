import { useState } from "react";
import sprite from "../../images/sprite.svg";

const Vacancies = () => {
  const [vacancy, setVacancy] = useState("");
  const [category, setCategory] = useState("");
  const [office, setOffice] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <section className="vacancies" id="vacancies">
        <h2 className="vacancies__title">Open vacancies</h2>
        <form
          className="vacancies__form"
          autoComplete="on"
          onSubmit={submitHandler}
        >
          <label>
            <input
              className="vacancies__field"
              type="text" name="vacancy"
              placeholder="Use keyword: Java, Figma, manager"
              onChange={(e) => setVacancy(e.target.value)}
              value={vacancy}
            />
          </label>
          <div>
            <label>
              <select
                className="vacancies__field"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="null">Choose category</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="...">...</option>
              </select>
            </label>
            <label>
              <select
                className="vacancies__field"
                name="office"
                onChange={(e) => setOffice(e.target.value)}
                value={office}
              >
                <option value="null">Choose office</option>
                <option value="kyiv">Kyiv office</option>
                <option value="warsaw">Warsaw office</option>
              </select>
            </label>
            <button type="submit">
              <svg className="search-image" width="50" height="50">
                <use href={ sprite + "#Subtract" }></use>
              </svg>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Vacancies;
