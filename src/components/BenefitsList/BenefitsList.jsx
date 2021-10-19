import { useEffect } from "react";
import Swiper from "swiper/swiper-bundle";
import "swiper/swiper-bundle.min.css"
import sprite from "../../images/sprite.svg";

const BenefitsList = () => {
  useEffect(() => {
    const swiperBenefits = new Swiper(".swiper-benefits", {
      direction: "horizontal",
      loop: false,
      mousewheel: {
        invert: false,
        releaseOnEdges: true,
      },
      pagination: {
        clickable: true,
        type: 'bullets',
        el: ".controller-box",
        bulletActiveClass: "controller-box__item--active",
        bulletClass: "controller-box__item"
      },
      slidesPerView: "auto",
      spaceBetween: 10,
      breakpoints: {
        768: {
          spaceBetween: 0,
          pagination: {
            el: null,
          }
        }
      }
    });
  }, []);


  return (
    <>
      <div className="swiper-benefits">
        <ul className="swiper-wrapper benefits-list">
          <li className="swiper-slide benefits-list__item">
            <svg className="benefits-image__positive" width="111" height="123">
              <use href={ sprite + "#You will get" }></use>
            </svg>
            <h3 className="benefits-list__main-title">You will get</h3>
            <ul className="benefits-list__sublist">
              <li>
                <svg className="check-icon" width="24" height="24">
                  <use href={ sprite + "#check" }></use>
                </svg>
                <p>
                  The fast feedback on every stage of the recruitment
                </p>
              </li>
              <li>
                <svg className="check-icon" width="24" height="24">
                  <use href={ sprite + "#check" }></use>
                </svg>
                <p>
                  Timesaving productive interviews
                </p>
              </li>
              <li>
                <svg className="check-icon" width="24" height="24">
                  <use href={ sprite + "#check" }></use>
                </svg>
                <p>
                  Opportunity to get acquainted with the future project,
                  your team colleagues, and CEO in advance chance of receiving
                  the job offer on the same day of your interview
                </p>
              </li>
            </ul>
          </li>
          <li className="swiper-slide benefits-list__item">
            <svg className="benefits-image__negative" width="123" height="111">
              <use href={ sprite + "#You will not get icon" }></use>
            </svg>
            <h3 className="benefits-list__main-title">You will not get</h3>
            <ul className="benefits-list__sublist">
              <li>
                <svg className="cross-icon" width="24" height="24">
                  <use href={ sprite + "#cross" }></use>
                </svg>
                <p>
                  Huge exhausted free tests
                </p>
              </li>
              <li>
                <svg className="cross-icon" width="24" height="24">
                  <use href={ sprite + "#cross" }></use>
                </svg>
                <p>
                  Long-awaited pauses in communication with us multiple interviews from our side
                </p>
              </li>
              <li>
                <svg className="cross-icon" width="24" height="24">
                  <use href={ sprite + "#cross" }></use>
                </svg>
                <p>
                  Bullshit
                </p>
              </li>
              <li>
                <svg className="cross-icon" width="24" height="24">
                  <use href={ sprite + "#cross" }></use>
                </svg>
                <p>
                  Herassment
                </p>
              </li>
            </ul>
          </li>
        </ul>

        <div className="controller-box"></div>
      </div>
    </>  
  );
}

export default BenefitsList;
