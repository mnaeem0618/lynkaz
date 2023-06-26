import React, { useState } from "react";
import Link from "next/link";

import Text from "@/components/text";
import Image from "next/image";


export default function Pricing() {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
     <main>
        <section className="about_banner">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="cmn_mini_heading">
                  <p>PRICING PLANS</p>
                </div>
                <h1>Select a Plan that Fits Your Needs</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="tabs_pricing_sec">
            <div className="contain">
                <ul className="tabs_btns flex">
                    <li onClick={() => setOpenTab(1)} className={openTab === 1 ? "active" : ""}><h2>Vendor Portal</h2><p>(Standalone Version)</p></li> 
                    <li onClick={() => setOpenTab(2)} className={openTab === 2 ? "active" : ""}><h2>Lynkaz Pro</h2><p>(Integrated Business Suite)</p></li>  
                </ul>
                <div className="pricing_content">
                    <div className={openTab === 1 ? "content_inner active" : "content_inner"}>
                        <p>This version offers a robust, standalone solution catering to businesses that desire streamlined vendor management without the need for integration. <strong>Features include:</strong></p>
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
                        </ul>
                        
                        <div className="btn_blk">
                            <button type="button" className="site_btn">Book Now</button>
                            <button type="button" className="site_btn black">Start your free trial</button>
                        </div>
                    </div>
                    <div className={openTab === 2 ? "content_inner active" : "content_inner"}>
                        <p>This version provides an all-inclusive, integrated solution for businesses aiming for a holistic approach to procurement management. It includes all the features of the Vendor Portal, plus:</p>
                        <ul>
                            <li><strong>Multiple Legal Entities:</strong> Manage operations across up to 3 companies.</li>
                            <li><strong>User Management:</strong> Accommodates up to 25 internal users with unlimited vendor users.</li>
                            <li><strong>Extensive Workflow Management:</strong> Orchestrate operations with our streamlined, efficient workflow system.</li>
                            <li><strong>Advanced Contract Management:</strong> Enjoy extended capabilities for managing contracts.</li>
                            <li><strong>Purchase Requisition:</strong> Streamline the requisition process for a smoother operation.</li>
                            <li><strong>Request for Information (RFI):</strong> Efficiently collect necessary data from potential vendors.</li>
                            <li><strong>Purchase Blanket Agreements:</strong> Manage blanket agreements efficiently.</li>
                            <li><strong>Extensive Questionnaire and Survey:</strong> Gain deep insights into vendor performance with in-depth questionnaires and surveys.</li>
                            <li><strong>Shared Service Procurement:</strong> Streamline and standardize procurement processes across different departments or business units.</li>
                            <li><strong>Budget Management:</strong> Plan, track, and control your budgets effectively.</li>
                            <li><strong>Single Sign-On (SSO):</strong> Experience hassle-free, secure access to all modules.</li>
                            <li><strong>Integration Capabilities:</strong> Integrate with other systems for a seamless work environment.</li>
                            <li><strong>File Storage:</strong> Store up to 1TB of files.</li>
                            <li><strong>Mobile Application:</strong> Access all functionalities, anywhere, anytime with the Lynkaz mobile app.</li>
                        </ul>
                        <div className="mini_br"></div>
                        <p>With Lynkaz Pro, you gain a comprehensive solution that streamlines your procurement process, provides deeper insights into vendor performance, and optimizes cross-departmental procurement.</p>
                        <div className="btn_blk">
                            <button type="button" className="site_btn">Book Now</button>
                            <button type="button" className="site_btn black">Start your free trial</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </main>
    </>
  );
}
