import { useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Swiper from "swiper/swiper-bundle";
import "swiper/swiper-bundle.min.css"
import sprite from "../../images/sprite.svg";

const PerksList = () => {
  useEffect(() => {
    const swiperPerks = new Swiper(".swiper-perks", {
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
          slidesPerView: 6,
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
      <div className="swiper-perks">
        <ul className="swiper-wrapper perks-list">
          <li className="swiper-slide perks-list__item">
            <div>
              <svg className="perks-image__1" width="123" height="111">
                <use href={ sprite + "#Young motivated team" }></use>
              </svg>
            </div>          
            <h3 className="perks-list__title">Young motivated <br/>team</h3>
            <p className="perks-list__text"> 
              Over the last year, our team has grown from 2 to 40 employees,
              and we keep searching for the smartest minds to join us.
            </p>
          </li>
          <li className="swiper-slide perks-list__item">
            <div>
              <svg className="perks-image__negative" width="111" height="123">
                <use href={ sprite + "#International clients" }></use>
              </svg>
            </div>            
            <h3 className="perks-list__title">International <br/>clients</h3>
            <p className="perks-list__text">
              Though we are only one year on market, the diversified international
              clients, from small and mid-market business sectors to big-scale
              corporations and enterprises apply for our services.
            </p>
          </li>
          <li className="swiper-slide perks-list__item">
            <div>
              <svg className="perks-image__negative" width="111" height="123">
                <use href={ sprite + "#Fav work proc" }></use>
              </svg>
            </div>           
            {windowWidth < 1440 ?
            <h3 className="perks-list__title">Working processes</h3>
            :
            <h3 className="perks-list__title">Favorable working processes</h3> 
            }
            <p className="perks-list__text">
              Starting from the interview, you will feel simple process company
              (only 3 stages on recruitment, could get offer in a week),
              and after – bureaucracy-free environment inside the company.
            </p>
          </li>
          <li className="swiper-slide perks-list__item">
            <div>
              <svg className="perks-image__negative" width="111" height="123">
                <use href={ sprite + "#stim proj" }></use>
              </svg>
            </div>
            {windowWidth < 1440 ?
            <h3 className="perks-list__title">Multidirectional industries</h3>
            :
            <h3 className="perks-list__title">Stimulating projects of multidirectional industries</h3> 
            }
            <p className="perks-list__text">
              The projects, we work on, concern domains in Fintech, e-commerce,
              automotive, hospitality & travel, security, healthcare -  you get the
              excellent opportunity to brace yourself for new challenges and up-to-date
              technologies, bringing value into the market.
            </p>
          </li>
          <li className="swiper-slide perks-list__item">
            <div>
              <svg className="perks-image__negative" width="111" height="123">
                <use href={ sprite + "#working remotely" }></use>
              </svg>
            </div>            
            {windowWidth < 1440 ?
            <h3 className="perks-list__title">Flexible working way</h3>
            :
            <h3 className="perks-list__title">Working remotely or in the office</h3> 
            }
            <p className="perks-list__text">
              We give our employees the opportunity to choose the way to work - remotely,
              in our office in the center of Kyiv, or combining both options.
            </p>
          </li>
          <li className="swiper-slide perks-list__item">
            <div>
              <svg className="perks-image__negative" width="111" height="123">
                <use href={ sprite + "#not all about work" }></use>
              </svg>
            </div>
            <h3 className="perks-list__title">Not all about <br/>work!</h3>
            <p className="perks-list__text">
              We regularly inspire our talented developers to create and innovate
              via corporate going-outs, active mini-activities, and outdoor events
            </p>
          </li>
        </ul>

        <div className="controller-box"></div>
      </div>
    </>  
  );
}

export default PerksList;
