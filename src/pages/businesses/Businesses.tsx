import SectionOne from "./section-one/section-one.component";
import SectionTwo from "./section-two/section-two.component";
import SectionThree from "./section-three/section-three.component";
import SEO from "../../components/seo/seo.component";

const Businesses = () => (
  <div className="App">
    <SEO
      title="Increase The Performance of your Accountancy Firm"
      description="Manage your accounting team's deliverables and have full control of deadlines and obligations."
      name="Rupee Solutions UK"
      type="service" 
    />
    <SectionOne />
    <SectionThree />
    <SectionTwo />
  </div>
);

export default Businesses;