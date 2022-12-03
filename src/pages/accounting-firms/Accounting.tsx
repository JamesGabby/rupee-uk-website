import SectionOne from "./section-one/section-one.component";
import SectionTwo from "./section-two/section-two.component";
import SectionThree from "./section-three/section-three.component";
import SEO from "../../components/seo/seo.component";

const Accounting = () => (
  <div className="App">
    <SEO
      title="Increase The Performance of Your Accountancy Team"
      description="The most agile and efficient way to manage your accounting tasks."
      name="Rupee Solutions UK"
      type="service" 
    />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </div>
);

export default Accounting;