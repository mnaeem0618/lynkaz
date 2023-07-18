import React, { useState } from "react";
import Link from "next/link";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl } from "@/helpers/helper";

import http from "../helpers/http";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("login")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Login({ result }) {
  const { meta_tags, site_content } = result;

  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <MetaGenerator
        page_title={site_content.page_title}
        meta_desc={meta_tags}
      />

      <main className="logon_main">
        <section className="logon_sec">
          <div className="logon_left">
            <div className="inner">
              <div className="text-center">
                <h1>
                  <Text string={site_content.section1_heading} />
                </h1>
              </div>
              <div className="image">
              
                <Image
                  src={cmsFileUrl(site_content.image1)}
                  width={3000}
                  height={2500}
                  alt="login"
                />
              </div>
              <ul>
                <li>© Lynkaz</li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/contact">Terms of use</Link>
                </li>
                <li>
                  <Link href="/contact">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="logon_right">
            <div className="inner">
              <div className="logon_logo">
                <Link href="/">
                  <Image
                    src={cmsFileUrl(meta_tags.site_logo)}
                    width={900}
                    height={60}
                    alt={meta_tags.site_name}
                  />
                </Link>
              </div>
              <div className="outer_logon_blk">
                <ul className="logon_tabs">
                  <li
                    className={"" + " " + (openTab === 1 ? "active" : "")}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                  >
                    Login
                  </li>
                  <li
                    className={"" + " " + (openTab === 2 ? "active" : "")}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                  >
                    Register
                  </li>
                </ul>
                <div className="tab_content_logon">
                  <div
                    className={
                      openTab === 1 ? "block form_logon" : "hidden form_logon"
                    }
                  >
                    <h2>
                      <Text string={site_content.section1_login_heading} />
                    </h2>
                    <p>Enter your login details below</p>
                    <form>
                      <div className="form_blk">
                        <h6>Email</h6>
                        <input
                          id="frm-email"
                          type="email"
                          name="email"
                          autoComplete="name"
                          placeholder="Name@gmail.com"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk">
                        <h6>Password</h6>
                        <input
                          id="frm-password"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          className="input"
                          required
                        />
                      </div>
                      <div className="have_check">
                        <div className="lbl_btn">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                          />
                          <label htmlFor="remember">Remember me</label>
                        </div>
                        <Link href="">Forgot your password ?</Link>
                      </div>
                      <div className="btn_blk">
                        <button className="site_btn block">
                          <span>Sign In</span>
                          <img src="images/circle-arrow-right.svg" alt="" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className={
                      openTab === 2 ? "block form_logon" : "hidden form_logon"
                    }
                  >
                    <h2>
                      <Text string={site_content.section1_register_heading} />
                    </h2>
                    <p>Please use your company account to sign in.</p>
                    <form>
                      <div className="form_blk flex flex_register">
                        <div className="col">
                          <h6>First Name</h6>
                          <input
                            id="frm-fname"
                            type="text"
                            name="fname"
                            autoComplete="fname"
                            placeholder="First Name"
                            className="input"
                            required
                          />
                        </div>
                        <div className="col">
                          <h6>Last Name</h6>
                          <input
                            id="frm-lname"
                            type="text"
                            name="lname"
                            autoComplete="lname"
                            placeholder="Last Name"
                            className="input"
                            required
                          />
                        </div>
                      </div>
                      <div className="form_blk">
                        <h6>Vendor Type</h6>
                        <select className="input">
                          <option>vendor type 1</option>
                        </select>
                      </div>
                      <div className="form_blk">
                        <h6>Email</h6>
                        <input
                          id="frm-wrk-email"
                          type="text"
                          name="work email"
                          autoComplete="work-email"
                          placeholder="Name@gmail.com"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk">
                        <h6>Password</h6>
                        <input
                          id="frm-password"
                          type="text"
                          name="pass"
                          autoComplete="pass"
                          placeholder="Password"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk">
                        <h6>Confirm Password</h6>
                        <input
                          id="frm-confirm-password"
                          type="text"
                          name="confirm-pass"
                          autoComplete="cpass"
                          placeholder="Confirm Password"
                          className="input"
                          required
                        />
                      </div>
                      <div className="lbl_btn">
                        <input type="checkbox" name="agree" id="agree" />
                        <label htmlFor="agree">
                          By clicking “Submit” you agree to our
                          <Link href="/terms">Terms of use</Link> and
                          <Link href="/policy">Privacy Policy</Link>
                        </label>
                      </div>
                      <div className="btn_blk">
                        <button className="site_btn block">
                          <span>Submit</span>
                          <img src="images/circle-arrow-right.svg" alt="" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <ul className="mini_lnks_logon_ds">
                <li>© Lynkaz</li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/contact">Terms of use</Link>
                </li>
                <li>
                  <Link href="/contact">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
