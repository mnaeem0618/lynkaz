import React, { useState, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl } from "@/helpers/helper";

import http from "../helpers/http";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("faq")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Faq({ result }) {
  const { meta_tags, site_content, faqs } = result;

  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);
  const handleAccordionClick = (index) => {
    console.log(index);
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".accordion__details"),
        {
          height: 0,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: () => setOpenAccordion(null),
        }
      );
     
    } else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut",
          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index].querySelector(".accordion__details"),
        { height: 0 },
        {
          height: "auto",
          duration: 0.5,
          ease: "power1.inOut",
        }
      );
    }
  };

  return (
    <>
      <MetaGenerator
        page_title={site_content.page_title}
        meta_desc={meta_tags}
      />

      <main>
        <section className="sub_banner">
          <div className="contain">
            <div className="cntnt text-center">
              <div className="cmn_mini_heading">
                <p>
                  <Text string={site_content.page_title} />
                </p>
              </div>
              <h1>
                <Text string={site_content.banner_heading} />
              </h1>
            </div>
          </div>
        </section>
        <section className="faq_sec cmn_mid_blk_sec">
          <div className="contain">
            <div className="cmn_blk">
              <h3 className="text-center">
                <Text string={site_content.section1_heading} />
              </h3>
              <div className="faq_blk">
                {faqs.map((val, i) => {
                  return (
                    <div
                      className={`outer_faq  ${
                        openAccordion === i ? "open" : ""
                      }`}
                      key={i}
                      ref={(el) => (accordionRefs.current[i] = el)}
                    >
                      <div
                        className="accordion__header"
                        onClick={() => handleAccordionClick(i)}
                      >
                        <h4>
                          <Text string={val.question} />
                        </h4>
                      </div>
                      <div className="accordion__details">
                        <Text string={val.answer} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="ppl_blk">
                <div className="cntnt text-center">
                  <ul>
                    <li>
                      <img src="images/user1.svg" alt="" />
                    </li>
                    <li>
                      <img src="images/user2.svg" alt="" />
                    </li>
                    <li>
                      <img src="images/user3.svg" alt="" />
                    </li>
                  </ul>
                  <Text string={site_content.section1_detail} />
                  <div className="btn_blk">
                    <Link
                      href={`/${site_content.section1_link_url}`}
                      className="site_btn color"
                    >
                      <span>{site_content.section1_link_text}</span>
                      <img src="images/circle-arrow-right.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
