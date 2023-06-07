import React, { useState } from "react";
import Link from "next/link";
import Shape from "@/components/shape";
import solution from "../api/solutions-data.json";
import { useRouter } from "next/router";
import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl } from "@/helpers/helper";
import http from "@/helpers/http";

import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const result = await http
    .get(`feature/${slug}`)
    .then((response) => response.data)
    .catch((error) => error.response.data.message);
    // console.log(result);
  return { props: { result } };
};

export default function features({ result }) {
  console.log(result);

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
                      </span>{" "}
                      <img src="/images/circle-arrow-right.svg" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="colR">
                  <Shape />
                  <div className="image">
                    {/* <img src={page_data.banner_image} alt="Lynkaz" /> */}
                    <Image
                      src={cmsFileUrl(feature.image, "features")}
                      width={595}
                      height={391}
                      alt={feature.title}
                    />
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
                            {/* <img src="/images/icons/s_icon1.svg" alt="" /> */}
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
                            {/* <img src={val.image} alt="" /> */}
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
              {/* <div className="inner_solution_loop">
                        <div className="contain">
                            <div className="flex">
                                <div className="col">
                                    <div className="image">
                                        <img src="/images/s2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="sec_heading">
                                        <h2>Requisition spend wisely, control risk, and promote compliance</h2>
                                    </div>
                                    <p>Our cloud spend management software covers purchase requests, approval workflows, budgeting, and spend analysis. It is user-friendly, effective, and versatile. Real-time tracking and accountability will help you gain new levels of control and visibility. All of them are linked with your current ERP or accounting system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inner_solution_loop">
                        <div className="contain">
                            <div className="flex">
                                <div className="col">
                                    <div className="image">
                                        <img src="/images/s3.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="sec_heading">
                                        <h2>Approve spend wisely, control risk, and promote compliance</h2>
                                    </div>
                                    <p>Our cloud spend management software covers purchase requests, approval workflows, budgeting, and spend analysis. It is user-friendly, effective, and versatile. Real-time tracking and accountability will help you gain new levels of control and visibility. All of them are linked with your current ERP or accounting system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inner_solution_loop">
                        <div className="contain">
                            <div className="flex">
                                <div className="col">
                                    <div className="image">
                                        <img src="/images/s4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="sec_heading">
                                        <h2>Purchase spend wisely, control risk, and promote compliance</h2>
                                    </div>
                                    <p>Our cloud spend management software covers purchase requests, approval workflows, budgeting, and spend analysis. It is user-friendly, effective, and versatile. Real-time tracking and accountability will help you gain new levels of control and visibility. All of them are linked with your current ERP or accounting system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inner_solution_loop">
                        <div className="contain">
                            <div className="flex">
                                <div className="col">
                                    <div className="image">
                                        <img src="/images/s5.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="sec_heading">
                                        <h2>Receive spend wisely, control risk, and promote compliance</h2>
                                    </div>
                                    <p>Our cloud spend management software covers purchase requests, approval workflows, budgeting, and spend analysis. It is user-friendly, effective, and versatile. Real-time tracking and accountability will help you gain new levels of control and visibility. All of them are linked with your current ERP or accounting system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inner_solution_loop">
                        <div className="contain">
                            <div className="flex">
                                <div className="col">
                                    <div className="image">
                                        <img src="/images/s6.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="sec_heading">
                                        <h2>Payable spend wisely, control risk, and promote compliance</h2>
                                    </div>
                                    <p>Our cloud spend management software covers purchase requests, approval workflows, budgeting, and spend analysis. It is user-friendly, effective, and versatile. Real-time tracking and accountability will help you gain new levels of control and visibility. All of them are linked with your current ERP or accounting system.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                <Text string={site_content.last_section_detail} />

                <div className="btn_blk text-center">
                  <Link href={site_content.link1_url} className="site_btn">
                    <span>
                      <Text string={site_content.link1_text} />
                    </span>{" "}
                    <img src="/images/circle-arrow-right.svg" alt="" />
                  </Link>
                  <Link
                    href={site_content.link2_url}
                    className="site_btn color"
                  >
                    <span>
                      <Text string={site_content.link2_text} />
                    </span>{" "}
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
    );
  }
}
