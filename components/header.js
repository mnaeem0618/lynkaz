import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl } from "@/helpers/helper";

export default function Header({ siteSettings }) {


  const router = useRouter();
  const path = router.pathname;
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const [toggle, setToggle] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [features, setFeatures] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);


  };
  const ToggleSolutions = () => {
    setSolutions(!solutions);
  };
  const ToggleFeatures = () => {
    setFeatures(!features);
  };

  const[sub , setSub]=useState(false);
    const HideBar = () =>{
      setSub(true);
      console.log("ok");
    }

    const [device, setDevice] = useState();

    


    const expression = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    useEffect(() => {
      setDevice(navigator.userAgent);
    });

    const handleClickLink = () => {
      if (expression.test(device)) {

        ToggleAction();
            
        console.log(device);

      }else{
        console.log('desktop');

      }
      // console.log(menu + toggle);
      // Add other logic or navigation code here if needed
    };
  


 
  return (
    <header className={scroll || path != "/" ? "fix" : ""}>
      <div className="contain-fluid">
        <div className="logo">
          <Link href="/">
            <Image
              src={cmsFileUrl(siteSettings.site_settings.site_logo)}
              width={180}
              height={80}
              alt={siteSettings.site_settings.site_name}
            />
          </Link>
        </div>
        <div
          className={toggle ? "toggle active": "toggle"}
          onClick={ToggleAction}
          id="tog_btn"
        >
          <span></span>
        </div>
        <nav id="nav" className={toggle ? 'active': ""}>
          <ul  className={sub ? "no_sub" : ""}>
            

            <li className="drop">
              <Link href="/">
                Features
              </Link>
              <ul className={features ? "sub active" : "sub"}>
                {siteSettings.features.map((feature) => {
                  return (
                    <li key={feature.id}>
                      <Link href={`/features/${feature.slug}`} onClick={handleClickLink}>
                        <span>
                          <Image
                            src={cmsFileUrl(feature.icon, "features")}
                            width={50}
                            height={50}
                            alt={feature.title}
                          />
                        </span>
                        <span>
                          <Text string={feature.title} />
                          <em>
                            <Text string={feature.short_desc} />
                          </em>
                        </span>
                      </Link>
                    </li>
                  );
                })}

                </ul>
            </li>
            <li className="drop">
              <Link href="/">
                Solutions
              </Link>
              <ul className={solutions ? "sub active" : "sub"}>
                {siteSettings.solutions.map((sol) => {
                  return (
                    <li key={sol.id}>
                      <Link href={`/solutions/${sol.slug}`} onClick={handleClickLink}>
                        <span>
                          <Image
                            src={cmsFileUrl(sol.icon, "solutions")}
                            width={50}
                            height={50}
                            alt={sol.name}
                          />
                        </span>
                        <span>
                          <Text string={sol.name} />
                          <em>
                            <Text string={sol.short_desc} />
                          </em>
                        </span>
                      </Link>
                    </li>
                  );
                })}

                 </ul>
            </li>

            <li>
              <Link href="/about" onClick={handleClickLink}>About Us</Link>
            </li>

            <li className="hide_navigation_lnk_desktop">
              <Link href="/contact" onClick={handleClickLink}>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="login_btns">
          <ul>
            <li className="hide_navigation_lnk_mobile">
              <Link href="/contact" onClick={handleClickLink}>Contact Us</Link>
            </li>
            <li className="btn_blk">
              <Link href="/login" className="site_btn" onClick={handleClickLink}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
