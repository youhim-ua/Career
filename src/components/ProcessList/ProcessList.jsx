import { useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Swiper from "swiper/swiper-bundle";
import "swiper/swiper-bundle.min.css"
import sprite from "../../images/sprite.svg";

const ProcessList = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
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
        1440: {
          spaceBetween: 0,
          slidesPerView: 2,
          pagination: {
            el: null,
          }
        }
      }
    });
  }, []);

  const windowWidth = useWindowWidth();

  return (
    <>
      <div className="swiper">
        <ul className="swiper-wrapper process-list">
          <li className="swiper-slide process-list__item">
            <h3 className="process-list__main-title">Stage number 1</h3>
            <h4 className="process-list__subtitle">Interview with an HR manager</h4>
            <p className="process-list__text">
              We arrange the phone or video interview at your convenient time. Duration
              is on average 30-40 minutes. At this phase we are getting to know each other
              better, determining if the requisite qualifications fill the position and the
              candidate aligning with an organization’s culture and values.
            </p>
            <span className="process-list__number">1</span>
          </li>
          { windowWidth < 768 &&
            <svg className="arrows-image" width="1079" height="175">
              <use href={sprite + "#arrow-mobile"}></use>
            </svg>
          }
          { (windowWidth >= 768 && windowWidth < 1440) &&
            <svg className="arrows-image" width="1259" height="175">
              <use href={sprite + "#arrow-tablet"}></use>
            </svg>
          }
          { windowWidth >= 1440 &&
            <svg className="arrows-image" width="1417" height="175">
              <use href={sprite + "#arrow-desk"}></use>
            </svg>
          }
          {windowWidth >= 1440 ?
            <li className="swiper-slide process-list__item">
              <h3 className="process-list__main-title">Stage number 2</h3>
              <h4 className="process-list__subtitle">Technical examination</h4>
              <div>
                  <p className="process-list__text">
                    A tech interview can take about an hour. The date and time of the meeting
                    will be agreed in advance for your convenience. This phase is a great opportunity
                    for you to know about the stack and get acquainted with the lead or the team you
                    will be working with. You are welcomed to ask any questions you may have about the
                    skills and technologies implemented in the project.
                  </p>
                  <p className="process-list__text">
                    If you are considering multiple vacancies for different projects, we can arrange
                    separate technical interviews that will focus on the required skills for each
                    individual project.
                  </p>
                </div>
              <span className="process-list__number process-list__number--secondary">2</span>
            </li>
            :
            <>
              <li className="swiper-slide process-list__item">
                <h3 className="process-list__main-title">Stage number 2.1</h3>
                <h4 className="process-list__subtitle">Technical examination</h4>
                <p className="process-list__text">
                  A tech interview can take about an hour. The date and time of the meeting
                  will be agreed in advance for your convenience. This phase is a great opportunity
                  for you to know about the stack and get acquainted with the lead or the team you
                  will be working with. You are welcomed to ask any questions you may have about the
                  skills and technologies implemented in the project.
                </p>
                <span className="process-list__number process-list__number--secondary">2&#185;</span>
              </li>
              <li className="swiper-slide process-list__item">
                <h3 className="process-list__main-title">Stage number 2.2</h3>
                <h4 className="process-list__subtitle">Technical examination</h4>
                <p className="process-list__text">
                  If you are considering multiple vacancies for different projects, we can arrange
                  separate technical interviews that will focus on the required skills for each
                  individual project.
                </p>
                <span className="process-list__number process-list__number--secondary">2&#178;</span>
              </li>
            </>
          }
          
        </ul>

        {windowWidth < 1261 && <div className="controller-box"></div>}
      </div>
    </>  
  );
}

export default ProcessList;
