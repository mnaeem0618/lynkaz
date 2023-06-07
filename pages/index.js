import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Shape from "@/components/shape";
import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl, getFileExtension } from "@/helpers/helper";
import Image_video from "@/components/Image_video";

import http from "../helpers/http";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("home")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Index({ result }) {
  const { meta_tags, site_content, home_features } = result;

  // let ext = getFileExtension(site_content.file1);

  const [openTab, setOpenTab] = React.useState(home_features[0]?.id);
  return (
    <>
      <MetaGenerator
        page_title={site_content.page_title}
        meta_desc={meta_tags}
      />

      <main>
        <div className="shape_image">
          <div className="shap"></div>
          <div className="shap shap_dim"></div>
        </div>
        <section className="banner">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <Text string={site_content.banner_detail} />

                <div className="btn_blk">
                  <Link
                    href={site_content.banner_link_url}
                    className="site_btn"
                  >
                    <span>
                      <Text string={site_content.banner_link_text} />
                    </span>{" "}
                    <img src="images/circle-arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="colR">
                <Shape />
                <div className="image">
                  {/* <img src="images/banner-image1.svg" alt="Lynkaz" /> */}

                  <Image_video file_name={site_content.file1} />
                  {/* {ext == "mp4" || ext == "webm" ? (
                    <video
                      className="CuAnimation_video__70Pvw"
                      height="1224"
                      width="1880"
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      poster="images/logo.svg"
                      preload="auto"
                    >
                      <source
                        type="video/webm"
                        src={cmsFileUrl(site_content.file1)}
                        data-src={cmsFileUrl(site_content.file1)}
                      />
                    </video>
                  ) : (
                    <Image
                      src={cmsFileUrl(site_content.file1)}
                      width={670}
                      height={447}
                      alt="banner"
                    />
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="icon_sec">
          <div className="contain">
            <div className="cntnt text-center">
              <div className="sec_heading">
                {/* <h2>Unlock procurement excellence, focus on what matters</h2> */}
                <Text string={site_content.section1_text} />
              </div>
              {/* <p>Empower your team with our procurement solution and reclaim valuable time for strategic initiatives.</p> */}
            </div>
            <div className="flex">
              <div className="col">
                <div className="img_icon">
                  {/* <img src="images/icons/sec_icon1.svg" alt="" /> */}
                  <Image
                    src={cmsFileUrl(site_content.image2)}
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </div>
                <h4>
                  <Text string={site_content.sec1_title2} />
                </h4>
                <p>
                  <Text string={site_content.sec1_text2} />
                </p>
              </div>
              <div className="col">
                <div className="img_icon">
                  <Image
                    src={cmsFileUrl(site_content.image3)}
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </div>
                <h4>
                  <Text string={site_content.sec1_title3} />
                </h4>
                <p>
                  <Text string={site_content.sec1_text3} />
                </p>
              </div>
              <div className="col">
                <div className="img_icon">
                  <Image
                    src={cmsFileUrl(site_content.image4)}
                    width={50}
                    height={50}
                    alt="icon3"
                  />
                </div>
                <h4>
                  <Text string={site_content.sec1_title4} />
                </h4>
                <p>
                  <Text string={site_content.sec1_text4} />
                </p>
              </div>
              {/* <div className="col">
                  <div className="img_icon">
                    <img src="images/icons/sec_icon4.svg" alt="" />
                  </div>
                  <h4>Unleash Procurement Transparency</h4>
                  <p>Effortlessly manage and monitor operations for tighter spend controls</p>
                </div> */}
            </div>
          </div>
        </section>
        <section>
          <div className="contain">
            <div className="cntnt text-center max_cntnt">
              <h2>
                <Text string={site_content.section1_heading} />
              </h2>
              <h3>
                <Text string={site_content.section1_shrt_heading} />
              </h3>
              <Text string={site_content.section1_detail} />
            </div>
            <div className="flex grid_flex">
              <div className="colL">
                <div className="image">
                  {/* <img src="images/experience_img.svg" alt="" /> */}
                  <Image
                    src={cmsFileUrl(site_content.image5)}
                    width={742}
                    height={519}
                    alt="Expirence Image"
                  />
                </div>
              </div>
              <div className="colR">
                <div className="sec_heading">
                  <h2>
                    <Text string={site_content.section2_heading} />
                  </h2>
                </div>

                <Text string={site_content.section2_detail} />

                <div className="btn_blk">
                  <Link
                    href={site_content.section2_link_url}
                    className="site_btn"
                  >
                    <span>
                      <Text string={site_content.section2_link_text} />
                    </span>{" "}
                    <img src="images/circle-arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tabs_sec">
          <div className="contain">
            <div className="tabs_sec_main_cntnt text-center">
              <div className="sec_heading">
                <h2>
                  <Text string={site_content.section3_heading} />
                </h2>
              </div>
              <Text string={site_content.section3_detail} />
            </div>
            <div className="tabs_blk">
              <div className="cntnt">
                {/* <p><strong>Welcome to Lynkaz</strong> – the ultimate solution for all your procurement and sourcing needs. Our cutting-edge application is designed to address the most common procurement challenges and streamline your procurement operations from start to finish.</p>
                  <p>At Lynkaz, we understand that procurement can be a complex and time-consuming process. Poor procurement management can result in overspending, missed opportunities, and even compliance issues. That's why we developed an intuitive, user-friendly application that simplifies the entire procurement process and helps you make better purchasing decisions.</p> */}
                <div className="sec_heading text-center">
                  <h2>
                    <Text string={site_content.section3_block_heading} />
                  </h2>
                </div>
              </div>
              <div className="tabs_inner_blk">
                <ul className="tabs_grid">
                  {home_features.map((val) => {
                    return (
                      <li key={val.id} onClick={() => setOpenTab(val.id)}>
                        <div
                          className={
                            "inner" + " " + (openTab === val.id ? "active" : "")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(val.id);
                          }}
                          data-toggle="tab"
                          role="tablist"
                        >
                          <div className="img_icon">
                            {/* <img src="images/icons/tab_icon3.svg" alt="" /> */}
                            <Image
                              src={cmsFileUrl(val.icon)}
                              width={50}
                              height={50}
                              alt={val.title}
                            />
                          </div>
                          <h4>{val.title}</h4>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="tab-content">
                  {home_features.map((val) => {
                    return (
                      <div
                        key={val.id}
                        className={
                          openTab === val.id
                            ? "block tab_flex"
                            : "hidden tab_flex"
                        }
                      >
                        <motion.div
                          key="modal"
                          initial={{ opacity: 0, y: "10%" }}
                          whileInView={{ opacity: 1, y: "0%" }}
                          viewport={{ once: false }}
                          exit={{ opacity: 0, y: "10%" }}
                          transition={{ duration: 1 }}
                          className="flex tab_1_flex"
                        >
                          <div className="colL">
                            <div className="sec_heading">
                              {/* <h2>Solution from procure to pay</h2> */}
                              <Text string={val.details} />
                            </div>
                            {/* <p>
                          We offer an end-to-end solution that covers everything
                          from sourcing and procurement to payment processing.
                          With Lynkaz, you can easily manage purchase orders,
                          vendor communications, and invoices, all in one place.
                        </p> */}
                            <div className="btn_blk">
                              <Link
                                href={val.link_url}
                                className="site_btn color"
                              >
                                <span>{val.link_text}</span>{" "}
                                <img
                                  src="images/circle-arrow-right.svg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="colR">
                            <div className="image">
                              {/* <img src="images/tab_image1.svg" alt="" /> */}
                              <Image
                                src={cmsFileUrl(val.image)}
                                width={585}
                                height={468}
                                alt={val.title}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="solution_sec">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="_col">
                  <div className="inner">
                    <div className="head_inner">
                      <div className="icon_img">
                        {/* <img src="images/solutions_icon1.svg" alt="" /> */}
                        <Image
                          src={cmsFileUrl(site_content.image6)}
                          width={35}
                          height={35}
                          alt="icon"
                        />
                      </div>

                      <h4>
                        <Text string={site_content.sec4_title6} />
                      </h4>
                    </div>
                    <p>
                      <Text string={site_content.sec4_text6} />
                    </p>
                  </div>
                </div>
                <div className="_col">
                  <div className="inner">
                    <div className="head_inner">
                      <div className="icon_img">
                        <Image
                          src={cmsFileUrl(site_content.image7)}
                          width={35}
                          height={35}
                          alt="icon"
                        />
                      </div>
                      <h4>
                        <Text string={site_content.sec4_title7} />
                      </h4>
                    </div>
                    <p>
                      <Text string={site_content.sec4_text7} />
                    </p>
                  </div>
                </div>
                <div className="_col">
                  <div className="inner">
                    <div className="head_inner">
                      <div className="icon_img">
                        <Image
                          src={cmsFileUrl(site_content.image8)}
                          width={35}
                          height={35}
                          alt="icon"
                        />
                      </div>
                      <h4>
                        <Text string={site_content.sec4_title8} />
                      </h4>
                    </div>
                    <p>
                      <Text string={site_content.sec4_text8} />
                    </p>
                  </div>
                </div>
                <div className="_col">
                  <div className="inner">
                    <div className="head_inner">
                      <div className="icon_img">
                        <Image
                          src={cmsFileUrl(site_content.image9)}
                          width={35}
                          height={35}
                          alt="icon"
                        />
                      </div>
                      <h4>
                        <Text string={site_content.sec4_title9} />
                      </h4>
                    </div>
                    <p>
                      <Text string={site_content.sec4_text9} />
                    </p>
                  </div>
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
        <section className="choose_sec">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="sec_heading">
                  <h2>
                    <Text string={site_content.section5_heading} />
                  </h2>
                </div>
                <Text string={site_content.section5_detail} />
              </div>
              <div className="colR">
                <div className="image">
                  {/* <img src="images/choose3.png" alt="" /> */}
                  <Image
                    src={cmsFileUrl(site_content.image10)}
                    width={615}
                    height={412}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
