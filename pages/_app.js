import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/layout";
import http from "@/helpers/http";
import { useEffect } from "react";


import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

let siteSettingsCache;
export default function App({ Component, pageProps, siteSettings }) {
 
 
  useEffect(() => {
    siteSettingsCache = siteSettings;
  }, []);

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return (
        <>
          <ToastContainer />
          <NextNProgress color="#fc5e24" />
          <Layout siteSettings={siteSettings}>{page}</Layout>

          <TawkMessengerReact
                propertyId={siteSettings.site_settings.site_tawk_property_id}
                widgetId={siteSettings.site_settings.site_tawk_widget_id} />

        </>
      )
    }

  return renderWithLayout(<Component {...pageProps} />);
}

App.getInitialProps = async () => {
  if (siteSettingsCache) {
    return { siteSettings: siteSettingsCache };
  }

  const siteSettings = await http
    .get("settings")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);
  return { siteSettings };
};
