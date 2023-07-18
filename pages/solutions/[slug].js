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
import Image_video from "@/components/Image_video";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const result = await http
    .get(`solution/${slug}`)
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Solutions({ result }) {


  const { meta_tags, solution, solution_data, site_content, solution_details } =
    result;

  if (solution != undefined) {
    return (
      <>
        <MetaGenerator page_title={solution.name} meta_desc={meta_tags} />

        <main>
          <section className="feature_banner">
            <div className="contain">
              <div className="flex">
                <div className="colL">
                  <h1>
                    <Text string={solution.heading} />
                  </h1>

                  <Text string={solution.details} />

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
                  
                    <Image_video mp4_file_name={solution.file} webm_file_name={solution.file_webm} file_loc='solutions' poster={meta_tags.thumbnail} />
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="feature_gid_loop">
            <div className="contain">
             
              <div className="outer_flex_feature">
                {solution_details.map((val) => {
                  return (
                    <div className="flex" key={val.id}>
                      <div className="col">
                        <Shape />
                        <div className="image">
                         
                          <Image
                            src={cmsFileUrl(val.image, "solutions")}
                            width={1800}
                            height={372}
                            alt={val.title}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="sec_heading">
                          <h2>
                            <Text string={val.title} />
                          </h2>
                        </div>
                        <Text string={val.detail} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="big_img_sec">
            <div className="contain">
              <div className="highlight_blk feature_highlight">
                <div className="cntnt text-center">
                  <div className="sec_heading">
                    <h2>
                      <Text string={solution_data.section6_heading} />
                    </h2>
                    <p>
                      <Text string={solution_data.section6_desc} />
                    </p>
                  </div>
                </div>
                <Text string={solution_data.section6_detail} />
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
    );
  }
}
