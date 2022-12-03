import SectionOne from "./section-one/section-one.component";
import HomeNav from "./home-nav/home-nav.component";
import SEO from "../../components/seo/seo.component";

const Home = () => (
  <div className="App">
    <SEO
      title="Increase Your Accountancy Performance"
      description="Full control over accounting, tax and payroll tasks. Automate deadlines and obligations."
      name="Rupee Solutions UK"
      type="service" 
    />
    <SectionOne />
    <HomeNav />
  </div>
);

export default Home;