import { useState } from 'react';
import LinkedInLogo from './linkedin.png';


function FooterTwo() {
  const [isNotWeb, setIsNotWeb] = useState(false);

  const reSize = () =>
    window.innerWidth < 450 ? setIsNotWeb(true) : setIsNotWeb(false);

  window.addEventListener('resize', reSize);

  return (
    <div className={`w-full h-32 ${isNotWeb ? 'flex-column' : 'flex'} items-center justify-around bg-black text-center`}>
      <p className="text-l text-white font-semibold pt-4">+447746767412</p>
      <p className="text-l text-white font-semibold py-2">oliver.jones@rupee.solutions</p>
      <a href="https://www.linkedin.com/company/rupee-uk/">
        <img className={`w-8 ${isNotWeb ? 'mx-40' : 'mx-0'} py-2`} src={LinkedInLogo} alt="logo" />
      </a>
    </div>
  )
}

export default FooterTwo;