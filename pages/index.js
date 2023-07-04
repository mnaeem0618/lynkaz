import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Shape from "@/components/shape";
import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl, getFileExtension } from "@/helpers/helper";
import Image_video from "@/components/Image_video";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
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
  const option = {
    margin: 15,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<img src="images/left-angle.svg" />','<img src="images/right-angle.svg" />'],
    smartSpeed: 1000,
    center:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      580: {
        items: 1
      },
      991: {
        items: 1
      },
      1200: {
        items: 1
      },
      1600: {
        items: 1
      }
    }
    
  };
  const { meta_tags, site_content, home_features } = result;

 

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
                    </span>
                    <img src="images/circle-arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="colR">
                <Shape />
                <div className="image">
                

                  <Image_video mp4_file_name={site_content.file1} webm_file_name={site_content.file2} />
                
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="icon_sec">
          <div className="contain">
            <div className="cntnt text-center">
              <div className="sec_heading">
               
                <Text string={site_content.section1_text} />
              </div>
             
            </div>
            <div className="flex">
              <div className="col">
                <div className="img_icon">
                
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
            <OwlCarousel
                className="owl-carousel owl-theme grid_flex_slider_carousel"
                {...option}
              >
            <div className="flex grid_flex">
              <div className="colL">
                <div className="image">
                 
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
                    </span>
                    <img src="images/circle-arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex grid_flex">
              <div className="colL">
                <div className="image">
                 
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
                    </span>
                    <img src="images/circle-arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            
            </OwlCarousel>
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
                            
                              <Text string={val.details} />
                            </div>
                            
                            <div className="btn_blk">
                              <Link
                                href={val.link_url}
                                className="site_btn color"
                              >
                                <span>{val.link_text}</span>
                                <img
                                  src="images/circle-arrow-right.svg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="colR">
                            <div className="image">
                             
                              {/* <Image
                                src={cmsFileUrl(val.image)}
                                width={585}
                                height={468}
                                alt={val.title}
                              /> */}

                              {/* <Image_video mp4_file_name={val.image} webm_file_name={val.image} img_width="585" img_height="468" vid_width="585" vid_height="468"/> */}
                              <Image_video mp4_file_name={val.image} webm_file_name={val.webm_file} />

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
