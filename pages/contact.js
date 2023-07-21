import React, { useState } from "react";
import Link from "next/link";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helper";

import http from "../helpers/http";
import MetaGenerator from "@/components/meta-generator";
import { TOAST_SETTINGS } from "@/config/settings";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

export const getServerSideProps = async () => {
  const result = await http
    .get("contact")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Contact({ result }) {
  const { meta_tags, site_content, site_settings, countries } = result;

  const [form, setForm] = React.useState({
    what_to_do: "",
    fname: "",
    lname: "",
    company_name: "",
    phone: "",
    email: "",
    country: "",

    // msg: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const result = await http
      .post("save_contact", doObjToFormData(form))
      .then((response) => {
        if (response.data.msg) {
          toast.success(<Text string={response.data.msg} />, TOAST_SETTINGS);
          setLoading(false);
          setForm({
            what_to_do: "",
            fname: "",
            lname: "",
            company_name: "",
            phone: "",
            email: "",
            country: "",
            // msg: "",
          });
        } else {
          toast.error(
            <Text string={response.data.validation_error} />,
            TOAST_SETTINGS
          );
          setLoading(false);
        }

        console.log(response.data);
      })

      .catch((error) => error.response.data.message);
  }
  return (
    <>
      <MetaGenerator
        page_title={site_content.page_title}
        meta_desc={meta_tags}
      />

      <main>
        <section className="sub_banner">
          <div className="contain">
            <div className="cntnt text-center">
              <div className="cmn_mini_heading">
                <p>
                  <Text string={site_content.page_title} />
                </p>
              </div>
              <h1>
                <Text string={site_content.banner_heading} />
              </h1>
            </div>
          </div>
        </section>
        <section className="cmn_mid_blk_sec">
          <div className="contain">
            <div className="cmn_blk">
              <div className="contact_flex flex">
                <div className="colL">
                  <h3>
                    <Text string={site_content.side_heading} />
                  </h3>

                  <Text string={site_content.side_detail} />

                  <div className="contact_info_blk">
                    <ul className="contact_info">
                      <li>
                        <span>
                          <img src="images/contact_email.svg" alt="" />
                        </span>
                        <Link href={`mailto:${site_settings.site_email}`}>
                          {site_settings.site_email}
                        </Link>
                      </li>
                      <li>
                        <span>
                          <img src="images/contact_phone.svg" alt="" />
                        </span>
                        <Link href={`tel:${site_settings.site_phone}`}>
                          {site_settings.site_phone}
                        </Link>
                      </li>
                      <li>
                        <span>
                          <img src="images/contact_map.svg" alt="" />
                        </span>
                        <p>{site_settings.site_address}</p>
                      </li>
                    </ul>
                    <div className="social_logon">
                      {site_settings.site_facebook && (
                        <Link
                          href={site_settings.site_facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/images/facebook.svg" alt="" />
                        </Link>
                      )}

                      {site_settings.site_twitter && (
                        <Link
                          href={site_settings.site_twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/images/twitter.svg" alt="" />
                        </Link>
                      )}

                      {site_settings.site_whatsapp && (
                        <Link
                          href={site_settings.site_whatsapp}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/images/whatsapp.svg" alt="" />
                        </Link>
                      )}

                      {site_settings.site_instagram && (
                        <Link
                          href={site_settings.site_instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/images/instagram.svg" alt="" />
                        </Link>
                      )}

                      {site_settings.site_linkedin && (
                        <Link
                          href={site_settings.site_linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/images/linkedin.svg" alt="" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="colR">
                  <div className="inner">
                    <h3>
                      <Text string={site_content.form_heading} />
                    </h3>
                    <form onSubmit={handleSubmit} method="POST">
                      <div className="form_blk">
                        <select
                          name="what_to_do"
                          id="frm-tod"
                          className="input"
                          value={form.what_to_do}
                          required
                          onChange={handleChange}
                        >
                          <option value="">What would you like to do</option>

                          <option value="Talk to a sale representative">Talk to a sale representative.</option>
                          <option value="Schedule a demo with an expert">Schedule a demo with an expert.</option>
                          <option value="I have a question about something else">I have a question about something else.</option>
                        </select>
                      </div>
                        <div className="flex contact_new_flex">
                          <div className="col">
                            <div className="form_blk">
                              <input
                                id="frm-fname"
                                type="text"
                                name="fname"
                                value={form.fname}
                                onChange={handleChange}
                                autoComplete="fname"
                                placeholder="First Name"
                                className="input"
                                required
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form_blk">
                              <input
                                id="last-name"
                                type="text"
                                name="lname"
                                value={form.lname}
                                onChange={handleChange}
                                autoComplete="lname"
                                placeholder="Last Name"
                                className="input"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      
                      <div className="form_blk">
                        <input
                          id="frm-cname"
                          type="name"
                          name="company_name"
                          value={form.company_name}
                          onChange={handleChange}
                          autoComplete="company-name"
                          placeholder="Company Name"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk">
                        <InputMask
                          id="frm-phone"
                          mask="+99 (999) 999-9999"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          placeholder="Phone Number"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk">
                        <input
                          id="frm-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          autoComplete="email"
                          placeholder="Work Email"
                          className="input"
                          required
                        />
                      </div>

                      <div className="form_blk">
                        <select
                          name="country"
                          id="frm-country"
                          className="input"
                          value={form.country}
                          required
                          onChange={handleChange}
                        >
                          <option value="">-- Select Country --</option>
                          {countries.map((val, i) => {
                            return (
                              <option value={val.name} key={val.id}>{val.name}</option>
                              )
                          })}
                          
                        </select>
                      </div>

                      {/* <div className="form_blk">
                        <textarea
                          id="frm-message"
                          name="msg"
                          value={form.msg}
                          onChange={handleChange}
                          className="input"
                          placeholder="Enter Your Message Here"
                          required
                        ></textarea>
                      </div> */}
                      <div className="btn_blk">
                        <button
                          type="submit"
                          className="site_btn color"
                          disabled={loading}
                        >
                          <img src="images/send.svg" alt="" />
                          <span>
                            Send Message
                            {loading && <i className="spinner"></i>}
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
