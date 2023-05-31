import React, { useState } from "react";
import Link from 'next/link'
import Shape from "@/components/shape";
import feature from "../api/feature-data.json";
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
    //   console.log(result);
    return { props: { result } };
  };


export default function features({result}) {
// console.log(result);    
    let meta_tags = result.meta_tags;
    let feature = result.feature;
    let feature_data = result.feature_data;
    let site_content = result.site_content;
    
    if(feature != undefined){
        return (
            <>
      <MetaGenerator page_title={feature.name} meta_desc={meta_tags} />

        <main>
            <section className="feature_banner">
                <div className="contain">
                    <div className="flex">
                        <div className="colL">
                            <h1>
                                <Text string={feature.heading} />
                            </h1>
                            
                                <Text string={feature.details} />
                            
                            <div className="btn_blk">
                                <Link href={site_content.link_url} className="site_btn"><span><Text string={site_content.link_text} /></span> <img src="/images/circle-arrow-right.svg" alt="" /></Link>
                            </div>
                        </div>
                        <div className="colR">
                            <Shape />
                            <div className="image">
                                {/* <img src={page_data.banner_image} alt="" /> */}
                                <Image src={cmsFileUrl(feature.image, 'features')} width={625} height={441} alt={feature.name} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="icons_feature_sec">
                <div className="contain">
                    <div className="flex">
                        <div className="col">
                            <div className="inner">
                                <div className="icon_img">
                                    <img src="/images/icons/f_icon1.svg" alt="" />
                                </div>
                                <h3>System that is trustworthy for internal orders</h3>
                                <p>Our cloud spend management software covers purchase requests, approval workflows, budgeting, and spend analysis. It is user-friendly, effective, and versatile. Real-time tracking and accountability will help you gain new levels of control and visibility. All of them are linked with your current ERP or accounting system.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <div className="icon_img">
                                    <img src="/images/icons/f_icon2.svg" alt="" />
                                </div>
                                <h3>Requisitions can be used to get rid of paper traces.</h3>
                                <p>Our cloud spend management software covers purchase requests, approval workflows, budgeting, and spend analysis. It is user-friendly, effective, and versatile. Real-time tracking and accountability will help you gain new levels of control and visibility. All of them are linked with your current ERP or accounting system.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="feature_gid_loop">
                <div className="contain">
                    {/* <div className="cntnt text-center">
                        <div className="sec_heading">
                            <h2>Requisitions Should Be Converted Into Purchase Orders Using A Single Efficient Management System.</h2>
                        </div>
                    </div> */}
                    <div className="outer_flex_feature">
                        
                                <div className="flex">
                                    <div className="col">
                                        <Shape />
                                        <div className="image">
                                            {/* <img src={val.image} alt="" /> */}
                                            <Image src={cmsFileUrl(feature_data.image2, 'features')} width={645} height={372} alt={feature.name} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="sec_heading">
                                            <h2>
                                                <Text string={feature_data.heading_section2} />
                                            </h2>
                                        </div>
                                        <Text string={feature_data.detail_section2} />
                                    </div>
                                </div>
                         
                                <div className="flex">
                                    <div className="col">
                                        <Shape />
                                        <div className="image">
                                            {/* <img src={val.image} alt="" /> */}
                                            <Image src={cmsFileUrl(feature_data.image3, 'features')} width={645} height={372} alt={feature.name} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="sec_heading">
                                            <h2>
                                                <Text string={feature_data.heading_section3} />
                                            </h2>
                                        </div>
                                        <Text string={feature_data.detail_section3} />
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="col">
                                        <Shape />
                                        <div className="image">
                                            {/* <img src={val.image} alt="" /> */}
                                            <Image src={cmsFileUrl(feature_data.image4, 'features')} width={645} height={372} alt={feature.name} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="sec_heading">
                                            <h2>
                                                <Text string={feature_data.heading_section4} />
                                            </h2>
                                        </div>
                                        <Text string={feature_data.detail_section4} />
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="col">
                                        <Shape />
                                        <div className="image">
                                            {/* <img src={val.image} alt="" /> */}
                                            <Image src={cmsFileUrl(feature_data.image5, 'features')} width={645} height={372} alt={feature.name} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="sec_heading">
                                            <h2>
                                                <Text string={feature_data.heading_section5} />
                                            </h2>
                                        </div>
                                        <Text string={feature_data.detail_section5} />
                                    </div>
                                </div>
                    </div>
                </div>
            </section>
            <section className="big_img_sec">
                <div className="contain">
                    <div className="highlight_blk feature_highlight">
                        <div className="cntnt text-center">
                            <div className="sec_heading">
                                <h2>
                                    <Text string={feature_data.section6_heading} />
                                </h2>
                                <p><Text string={feature_data.section6_desc} /></p>
                            </div>
                        </div>
                        <Text string={feature_data.section6_detail} />
                       
                    </div>
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
                        <Link href={site_content.link1_url} className="site_btn"><span><Text string={site_content.link1_text} /></span> <img src="/images/circle-arrow-right.svg" alt="" /></Link>
                        <Link href={site_content.link2_url} className="site_btn color"><span><Text string={site_content.link2_text} /></span> <img src="/images/circle-arrow-right.svg" alt="" /></Link>
                    </div>
                    </div>
                </div>
            </section>
        </main>
        </>
        );
    }else{
        return(
            <div className="loading_cmn_all">
                <div className="image">
                    <img src="/images/loading.gif" alt="" />
                </div>
            </div>
        );
    }
}

