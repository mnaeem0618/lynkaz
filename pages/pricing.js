import React, { useState } from "react";
import Link from "next/link";

import Text from "@/components/text";
import Image from "next/image";


import { cmsFileUrl } from "@/helpers/helper";

import http from "../helpers/http";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("pricing")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};


export default function Pricing({ result }) {

  const { meta_tags, plans, site_content } = result;

    const [openTab, setOpenTab] = React.useState(plans[0].id);
  return (
    <>
     <main>
        <section className="about_banner">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="cmn_mini_heading">
                  <p><Text string={site_content.section1_shrt_heading} /></p>
                </div>
                <h1><Text string={site_content.section1_heading} /></h1>
              </div>
            </div>
          </div>
        </section>
        <section className="tabs_pricing_sec">
            <div className="contain">
                <ul className="tabs_btns flex">
                  {plans.map((val, i) => {
                    
                    return(
                      <li key={val.id} onClick={() => setOpenTab(val.id)} className={openTab === val.id ? "active" : ""}><h2>{val.name}</h2><p>{`(${val.type})`}</p>{ val.id ==  plans[0].id ? <span>Demo Available</span> : ''} </li> 

                    );
                  })}
                    {/* <li onClick={() => setOpenTab(1)} className={openTab === 1 ? "active" : ""}><h2>Vendor Portal</h2><p>(Standalone Version)</p><span>Demo Available</span></li> 
                    <li onClick={() => setOpenTab(2)} className={openTab === 2 ? "active" : ""}><h2>Lynkaz Pro</h2><p>(Integrated Business Suite)</p></li>   */}
                </ul>
                <div className="pricing_content">

                  {plans.map((val, i) => {
                    return(
                      <div key={val.id} className={openTab === val.id ? "content_inner active" : "content_inner"}>
                        <Text string={val.details} />
                        {/* <p>This version offers a robust, standalone solution catering to businesses that desire streamlined vendor management without the need for integration. <strong>Features include:</strong></p>
                        <ul>
                            <li><strong>Single Legal Entity:</strong> Manage all operations within one company.</li>
                            <li><strong>User Management:</strong> Accommodates up to 5 internal users with unlimited vendor users.</li>
                            <li><strong>Vendor Onboarding:</strong> Simplify vendor registration and setup.</li>
                            <li><strong>Vendor Profile Management:</strong> Update and maintain vendor details easily.</li>
                            <li><strong>Bidding and Online Negotiation:</strong> Facilitate online bidding and seamless negotiations</li>
                            <li><strong>Request for Quotations (RFQ):</strong> Manage and send RFQs to vendors.</li>
                            <li><strong>Purchase Order Management:</strong> Handle all aspects of creating and tracking POs.</li>
                            <li><strong>Contract Management:</strong> Oversee all stages of contract lifecycle.</li>
                            <li><strong>Invoice Management:</strong> Receive and manage vendor invoices.</li>
                            <li><strong>Online Communication:</strong> Ensure smooth dialogue with vendors.</li>
                            <li><strong>File Storage:</strong> Store up to 250GB of files.</li>
                            <li><strong>Mobile Application:</strong> Access all these functionalities on the go with the Lynkaz mobile app.</li>
                        </ul> */}
                        
                        <div className="btn_blk first_btn_blk_pricing">
                            {/* <button type="button" className="site_btn">Book Now</button> */}
                            <Link href="/contact" className="site_btn">Start your free trial</Link>
                        </div>
                    </div>
                    );
                  })}

                   
                </div>
            </div>
        </section>
     </main>
    </>
  );
}
