import LinkedInLogo from '../../images/linkedin.png';
import Awards from '../../images/award.png'
import './footer.styles.css';

function Footer() {

  return (
    <div className="footer">
      <p className="text-l text-white font-semibold pt-4">+447746767412</p>
      <p className="text-l text-white font-semibold py-2">
        <a href="mailto:oliver.jones@rupee.solutions" target="_blank" rel="noreferrer">oliver.jones@rupee.solutions</a>
      </p>
      <a href="https://www.linkedin.com/company/rupee-uk/" target="_blank" rel="noreferrer">
        <img id="linkedin" src={LinkedInLogo} alt="logo" />
      </a>
      <img id='awards' src={Awards} alt="awards" />
    </div>
  )
}

export default Footer;