import Link from "next/link";
import React from "react";
import { useState } from "react";
import Text from "@/components/text";

import { doObjToFormData } from "@/helpers/helper";

import http from "../helpers/http";

import { TOAST_SETTINGS } from "@/config/settings";
import { toast } from "react-toastify";

export default function Footer({ siteSettings }) {
  const [form, setForm] = React.useState({
    email: "",
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
      .post("save_newsletter", doObjToFormData(form))
      .then((response) => {
        if (response.data.msg) {
          toast.success(<Text string={response.data.msg} />, TOAST_SETTINGS);
          setLoading(false);
          setForm({
            email: "",
          });
        } else {
          toast.error(
            <Text string={response.data.validation_error} />,
            TOAST_SETTINGS
          );

          setLoading(false);
        }
      })

      .catch((error) => error.response.data.message);

  }

 
  const data = {
    list_02: [
      {
        id: 1,
        text: "Home",
        link: "/",
      },
      {
        id: 2,
        text: "About Us",
        link: "/about",
      },
      {
        id: 3,
        text: "Faq's",
        link: "/faq",
      },
      {
        id: 4,
        text: "Pricing",
        link: "/pricing",
      },
    ],
    list_03: [
      {
        id: 1,
        text: "Contact Us",
        link: "/contact",
      },
      {
        id: 2,
        text: "Terms & conditions",
        link: "/terms-conditions",
      },
      {
        id: 3,
        text: "Privacy Policy",
        link: "/privacy-policy",
      },
    ],
  };
  return (
    <footer>
      <div className="contain">
        <div className="main_row flex">
          <div className="col">
            <div className="in_col">
              <h4>Contact Us</h4>

              <ul className="list info_list">
                <li>
                  <img src="/images/phon.svg" alt="Failed to load icon" />
                  <Link href={`tel:${siteSettings.site_settings.site_phone}`}>
                    {siteSettings.site_settings.site_phone}
                  </Link>
                </li>
                <li>
                  <img src="/images/mail.svg" alt="Failed to load icon" />
                  <Link
                    href={`mailto:${siteSettings.site_settings.site_email}`}
                  >
                    {siteSettings.site_settings.site_email}
                  </Link>
                </li>
              </ul>
              <div className="social_logon">
                {siteSettings.site_settings.site_facebook && (
                  <Link
                    href={siteSettings.site_settings.site_facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/facebook.svg" alt="" />
                  </Link>
                )}

                {siteSettings.site_settings.site_twitter && (
                  <Link
                    href={siteSettings.site_settings.site_twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/twitter.svg" alt="" />
                  </Link>
                )}

                {siteSettings.site_settings.site_whatsapp && (
                  <Link
                    href={siteSettings.site_settings.site_whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/whatsapp.svg" alt="" />
                  </Link>
                )}

                {siteSettings.site_settings.site_instagram && (
                  <Link
                    href={siteSettings.site_settings.site_instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/instagram.svg" alt="" />
                  </Link>
                )}

                {siteSettings.site_settings.site_linkedin && (
                  <Link
                    href={siteSettings.site_settings.site_linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/linkedin.svg" alt="" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col">
            <h4>Quick Links</h4>
            <div className="in_col mid_col">
              <ul className="list">
                {siteSettings.footer.slice(0, 3).map((val) => {
                  return (
                    <li key={val.id}>
                      <Link href={val.txt1}>{val.title}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="list">
                {siteSettings.footer.slice(3, 6).map((val) => {
                  return (
                    <li key={val.id}>
                      <Link href={val.txt1}>{val.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="in_col subscribe">
              <h4>Join Our Mailing List</h4>
              <span>
                <Text
                  string={siteSettings.site_settings.site_newsletter_text}
                />
              </span>
              <form onSubmit={handleSubmit} method="POST">
                <input
                  type="text"
                  placeholder="@ email address"
                  name="email"
                  id="frm-email"
                  value={form.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
                <button type="submit" className="site_btn" disabled={loading}>
                  Submit{loading && <i className="spinner"></i>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} By <Link href="/" className="regular" style={{ fontWeight: "bold" }}>
            <Text string={siteSettings.site_settings.site_name} />
          </Link>
          . <Text string={siteSettings.site_settings.site_copyright} />
        </p>
      </div>
    </footer>
  );
}
