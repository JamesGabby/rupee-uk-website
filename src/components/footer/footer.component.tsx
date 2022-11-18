import LinkedInLogo from '../../images/linkedin.png';
import './footer.styles.css';

function Footer() {

  return (
    <div className="footer">
      <p className="text-l text-white font-semibold pt-4">+447746767412</p>
      <p className="text-l text-white font-semibold py-2">oliver.jones@rupee.solutions</p>
      <a href="https://www.linkedin.com/company/rupee-uk/" target="_blank"  rel="noreferrer">
        <img src={LinkedInLogo} alt="logo" />
      </a>
    </div>
  )
}

export default Footer;