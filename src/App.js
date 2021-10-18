import useWindowWidth from "./hooks/useWindowWidth";

import Container from "./components/Container";
import AnimatedContainer from "./components/AnimatedContainer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ContactUs from "./components/ContactUs";
import Menu from "./components/Navigation";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import AboutCompany from "./components/AboutCompany";
import Process from "./components/Process";
import ProcessList from "./components/ProcessList";
import Benefits from "./components/Benefits";
import BenefitsList from "./components/BenefitsList";
import Vacancies from './components/Vacancies';
import VacanciesList from "./components/VacanciesList";
import Perks from "./components/Perks";
import PerksList from "./components/PerksList";
import SendResume from "./components/SendResume";
import SendResumeForm from "./components/SendResumeForm";
import Footer from "./components/Footer";


const App = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      <div className="hidden">
        <Container
          bgColor={"container--dark"}
        >
          <Header>
            <Logo />
            <ContactUs />
            <Menu />
          </Header>
          <Main>
            <Hero>
              <Gallery/>
            </Hero>
          </Main>
        </Container>
        <Container>
          <AboutCompany />
        </Container>
        <Container 
          bgColor={"container--grey-white"}
        >
          <Process>
            <ProcessList/>
          </Process>
        </Container>
        <Container 
          bgColor={"container--grey-dark"}
        >
          <Benefits>
            <BenefitsList/>
          </Benefits>
        </Container>
        <Container 
          bgColor={"container--less-dark"}
        >
          <Vacancies/>
        </Container>
        <AnimatedContainer>
          <VacanciesList />
          {windowWidth >= 1440 && 
            <SendResume>
              <SendResumeForm/>
            </SendResume> 
          }
        </AnimatedContainer>
        <Container
          bgColor={"container--lite-purple"}
        >
          <Perks>
            <PerksList/>
          </Perks>
        </Container>
        {windowWidth < 1440 && 
          <AnimatedContainer>
            <SendResume>
              <SendResumeForm/>
            </SendResume>
          </AnimatedContainer>
        }
        <Container
          bgColor={"container--dark"}
        >
          <Footer/>
        </Container>
      </div>
    </>
  );
}

export default App;
