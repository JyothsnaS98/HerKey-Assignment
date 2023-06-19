import Navbar from "./Components/navbar/index";
import TopBanner from "./Components/top-banner";
import WelcomeSection from "./Components/welcome-section";
import Companies from "./Components/companies";
import Categories from "./Components/categories";
import Careers from "./Components/careers";
import OurTeam from "./Components/our-team";
import Investors from "./Components/investors";
import News from "./Components/news";
import Footer from "./Components/footer";
import "./stylesheets/layout.scss";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="sticky-navbar">
        <Navbar />
      </div>
      <div className="top-banner">
        <TopBanner />
      </div>
      <div id="welcome-section">
        <WelcomeSection />
      </div>
      <div id="herkey-companies">
        <Companies />
      </div>
      <div id="how-do-we-do">
        <Categories />
      </div>
      <div id="career">
        <Careers/>
      </div>
      <div id="teams">
        <OurTeam/>
      </div>
      <div id="investors">
        <Investors/>
      </div>
      <div id="news">
        <News/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
