import useWindowWidth from "./hooks/useWindowWidth";

import Background from "./components/Background";
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
        <Background
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
        </Background>
        <Background>
          <Container>
            <AboutCompany />
          </Container>
        </Background>
        <Background 
          bgColor={"container--grey-white"}
        >
          <Container>
            <Process>
              <ProcessList/>
            </Process>
          </Container>
        </Background>
        <Background 
          bgColor={"container--grey-dark"}
          shadow={"grey-shadow"}
        >
          <Container>
            <Benefits>
              <BenefitsList/>
            </Benefits>
          </Container>
        </Background>
        <Background 
          bgColor={"container--less-dark"}
        >
          <Container>
            <Vacancies/>
          </Container>
        </Background>
        <AnimatedContainer>
          <Container>
            <VacanciesList />
            {windowWidth >= 1440 && 
              <SendResume>
                <SendResumeForm/>
              </SendResume> 
            }
          </Container>
        </AnimatedContainer>
        <Background
          bgColor={"container--lite-purple"}
        >
          <Container>
            <Perks>
              <PerksList/>
            </Perks>
          </Container>
        </Background>
        {windowWidth < 1440 && 
          <AnimatedContainer>
            <Container>
              <SendResume>
                <SendResumeForm/>
              </SendResume>
            </Container>
          </AnimatedContainer>
        }
        <Background
          bgColor={"container--dark"}
        >
          <Container>
            <Footer/>
          </Container>
        </Background>
      </div>
    </>
  );
}

export default App;
