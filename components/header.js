import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl } from "@/helpers/helper";

export default function Header({ siteSettings }) {
  // console.log(siteSettings);

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
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>
        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
            

            <li className="drop">
              <Link href="/">
                Features
              </Link>
              <ul className={features ? "sub active" : "sub"}>
                {siteSettings.features.map((feature) => {
                  return (
                    <li key={feature.id}>
                      <Link href={`/features/${feature.slug}`}>
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

                {/* <li><Link href="/features/purchase-requisition"><span><img src="/images/icons/icon1.svg" alt="" /></span><span>Purchase requisition<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/features/contract-management"><span><img src="/images/icons/icon5.svg" alt="" /></span><span>Contract management<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/features/survey-and-questionnaire"><span><img src="/images/icons/icon18.svg" alt="" /></span><span>Survey and Questionnaire<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/features/rfx-management-rfi-rfp-rfq"><span><img src="/images/icons/icon4.svg" alt="" /></span><span>RFx management (RFI, RFP, RFQ)<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/features/workflow"><span><img src="/images/icons/icon17.svg" alt="" /></span><span>Workflow<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/features/budget"><span><img src="/images/icons/icon8.svg" alt="" /></span><span>Budget management<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/features/vendor-invoice"><span><img src="/images/icons/icon9.svg" alt="" /></span><span>Vendor Invoice<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/features/mobile"><span><img src="/images/icons/icon10.svg" alt="" /></span><span>Mobile application<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/features/vendor-portal"><span><img src="/images/icons/icon11.svg" alt="" /></span><span>Vendor portal<em>Cross reference and verify accounts payable expenses</em></span></Link></li> */}
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
                      <Link href={`/solutions/${sol.slug}`}>
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

                {/* <li><Link href="/solutions/procure-to-pay"><span><img src="/images/icons/icon1.svg" alt="" /></span><span>Procure-to-Pay<em>Team can create a purchase request in minutes</em></span></Link></li>
                  <li><Link href="/solutions/end-to-end-spend-management"><span><img src="/images/icons/icon2.svg" alt="" /></span><span>End-to-end spend management<em>Set unique custom fields to suit your business</em></span></Link></li>
                  <li><Link href="/solutions/strategic-sourcing"><span><img src="/images/icons/icon3.svg" alt="" /></span><span>Strategic Sourcing<em>Cross reference and verify accounts payable expenses</em></span></Link></li>
                  <li><Link href="/solutions/shared-service-procurement"><span><img src="/images/icons/icon4.svg" alt="" /></span><span>Shared Service Procurement<em>Cross reference and verify accounts payable expenses</em></span></Link></li> */}
              </ul>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>

            <li className="hide_navigation_lnk_desktop">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="login_btns">
          <ul>
            <li className="hide_navigation_lnk_mobile">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="btn_blk">
              <Link href="/login" className="site_btn">
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
