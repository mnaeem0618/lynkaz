import React, { useState } from "react";
import Link from "next/link";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl } from "@/helpers/helper";

import http from "../helpers/http";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("about")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function About({ result }) {
  const { meta_tags, site_content } = result;

  return (
    <>
      <MetaGenerator
        page_title={site_content.page_title}
        meta_desc={meta_tags}
      />

      <main>
        <section className="about_banner">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="cmn_mini_heading">
                  <p>
                    <Text string={site_content.banner_short_heading} />
                  </p>
                </div>
                <h1>
                  <Text string={site_content.banner_heading} />
                </h1>
                <Text string={site_content.banner_detail} />
              </div>
            </div>
          </div>
        </section>
        <section className="abt_second_sec change_img">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image
                    src={cmsFileUrl(site_content.image1)}
                    width={3000}
                    height={2500}
                    alt="about-image"
                  />
                </div>
              </div>
              <div className="colR">
                <div className="sec_heading">
                  <h2>
                    <Text string={site_content.section1_heading} />
                  </h2>
                </div>
                <Text string={site_content.section1_detail} />
                <div className="btn_blk">
                  <Link
                    href={site_content.section1_link_url}
                    className="site_btn color"
                  >
                    <span>
                      <Text string={site_content.section1_link_text} />
                    </span>
                    <img src="images/circle-arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="abt_counter_sec">
          <div className="contain">
            <div className="cntnt text-center">
              <div className="sec_heading">
                <h2>
                  <Text string={site_content.section2_heading} />
                </h2>
              </div>
              <Text string={site_content.section2_detail} />
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <h3>
                    <Text string={site_content.card_heading1} />
                  </h3>
                  <p>
                    <Text string={site_content.card_text1} />
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <h3>
                    <Text string={site_content.card_heading2} />
                  </h3>
                  <p>
                    <Text string={site_content.card_text2} />
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <h3>
                    <Text string={site_content.card_heading3} />
                  </h3>
                  <p>
                    <Text string={site_content.card_text3} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature_abt">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <Text string={site_content.section3_detail} />
              </div>
              <div className="colR">
                <div className="image">
                  <Image
                    src={cmsFileUrl(site_content.image2)}
                    width={3000}
                    height={2500}
                    alt="about-image2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      {site_content.section4_status == 0 ? '' :
        <section className="new_about_me">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image
                    src={cmsFileUrl(site_content.image3)}
                    width={3000}
                    height={2500}
                    alt="about-image3"
                  />
                </div>
                <div className="dots_image">
                  <img src="images/dots.png" alt="" />
                </div>
              </div>
              <div className="colR">
                <div className="sec_heading">
                  <h2>
                    <Text string={site_content.section4_heading} />
                  </h2>
                </div>
                <Text string={site_content.section4_detail} />
              </div>
            </div>
          </div>
        </section>

      }

        <section className="cta_sec">
          <div className="contain">
            <div className="cntnt text-center">
              <div className="sec_heading">
                <h2>
                  <Text string={site_content.last_section_heading} />
                </h2>
              </div>
              <Text string={site_content.last_section_detail} />

              <div className="btn_blk text-center">
                <Link href={site_content.link1_url} className="site_btn">
                  <span>
                    <Text string={site_content.link1_text} />
                  </span>
                  <img src="images/circle-arrow-right.svg" alt="" />
                </Link>
                <Link href={site_content.link2_url} className="site_btn color">
                  <span>
                    <Text string={site_content.link2_text} />
                  </span>
                  <img src="images/circle-arrow-right.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
