import React, { useState } from "react";
import Link from "next/link";
import Shape from "@/components/shape";
import feature from "../api/feature-data.json";

import { useRouter } from "next/router";
import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl } from "@/helpers/helper";
import http from "@/helpers/http";

import MetaGenerator from "@/components/meta-generator";
import Image_video from "@/components/Image_video";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const result = await http
    .get(`feature/${slug}`)
    .then((response) => response.data)
    .catch((error) => error.response.data.message);
    
  return { props: { result } };
};

export default function features({ result }) {
  

  const {meta_tags, feature, feature_cards, site_content, sub_features} = result;



  if (meta_tags != undefined) {
    return (
      <>
        <MetaGenerator page_title={feature.title} meta_desc={meta_tags} />

        <main>
          <div className="shape_image solutions_shape">
            <div className="shap"></div>
            <div className="shap shap_dim"></div>
          </div>
          <section className="solutions_banner">
            <div className="contain">
              <div className="flex">
                <div className="colL">
                  <h1>
                    <Text string={feature.title} />
                  </h1>

                  <Text string={feature.details} />

                  <div className="btn_blk">
                    <Link href={site_content.link_url} className="site_btn">
                      <span>
                        <Text string={site_content.link_text} />
                      </span>
                      <img src="/images/circle-arrow-right.svg" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="colR">
                  <Shape />
                  <div className="image">
                   

                    <Image_video mp4_file_name={feature.file} webm_file_name={feature.file_webm} file_loc='features' poster={meta_tags.thumbnail} />
                  

                   
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="solution_page_icons">
            <div className="contain">
              <div className="flex">
                {feature_cards.map((card) => {
                  return (
                    <div className="_col" key={card.id}>
                      <div className="inner">
                        <div className="head_inner">
                          <div className="icon_img">
                            
                            <Image
                              src={cmsFileUrl(card.image, "features")}
                              width={35}
                              height={35}
                              alt="icon"
                            />
                          </div>
                          <h4>
                            <Text string={card.title} />
                          </h4>
                        </div>
                        <p>
                          <Text string={card.detail} />
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="solution_loop_sec">
            <div className="contain">
              <div className="cntnt">
                <div className="sec_heading text-center">
                  <h2>
                    <Text string={feature.sec3_heading} />
                  </h2>
                </div>
              </div>
            </div>
            <div className="outer_solutions_loop">
              {sub_features.map((val) => {
                return (
                  <div className="inner_solution_loop" key={val.id}>
                    <div className="contain">
                      <div className="flex">
                        <div className="col">
                          <div className="image">
                           
                            <Image
                              src={cmsFileUrl(val.image, "features")}
                              width={585}
                              height={459}
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="sec_heading">
                            <h2>
                              <Text string={val.title} />
                            </h2>
                          </div>

                          <Text string={val.text} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
             
            </div>
          </section>
          <section className="cta_sec">
            <div className="contain">
              <div className="cntnt text-center">
                <div className="sec_heading">
                  <h2>
                    <Text string={site_content.last_section_heading} />
                  </h2>
                </div>
                {/* <Text string={site_content.last_section_detail} /> */}

                <div className="btn_blk text-center">
                  <Link href={site_content.link1_url} className="site_btn">
                    <span>
                      <Text string={site_content.link1_text} />
                    </span>
                    <img src="/images/circle-arrow-right.svg" alt="" />
                  </Link>
                  <Link
                    href={site_content.link2_url}
                    className="site_btn color"
                  >
                    <span>
                      <Text string={site_content.link2_text} />
                    </span>
                    <img src="/images/circle-arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  } else {
    return (
      <div className="loading_cmn_all">
        <div className="image">
          <img src="/images/loading.gif" alt="" />
        </div>
      </div>
    )
  }
}
