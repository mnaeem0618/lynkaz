import SiteMaster from "./sitemaster";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
export default function Layout({ children, siteSettings }) {
  const router = useRouter();
  const path = router.pathname;
  if (
    path != "/login" &&
    path != "/signup"
  ) {
    return (
      <div className="content">
        <SiteMaster />
        <Header siteSettings={siteSettings}/>
        {children}
        <Footer siteSettings={siteSettings}/>
      </div>
    );
  } else {
    return (
      <div className="content">
        <SiteMaster /> 
        {children}
      </div>
    );
  }
}
