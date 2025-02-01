import type { Metadata } from "next";
import { Raleway } from "next/font/google";;
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
// import ZopimChat from "@/components/ZopimChat";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Presto Group",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Presto Group",
              "url": "https://www.prestogroup.com/",
              "logo": "https://www.prestogroup.com/prestogroup-white-logo.png",
              "sameAs": [
                "https://www.facebook.com/prestogroup",
                "https://twitter.com/PrestoGroup",
                "https://www.linkedin.com/company/prestogroup/",
                "https://www.youtube.com/user/GroupPresto"
              ]
            })
          }}
        />

        <meta name="google-site-verification" content="--sjkT41wxYio7btn7tYffHVL2ukFd7nV0YpMFnRemU" />
        <meta name="facebook-domain-verification" content="nqw3qf9kawd655o26cvvi0pksbck19" />

        <link rel="icon" href="/favicon.png" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          function loadGTM() {
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-KFWMTCZ');
          }

          window.addEventListener('click', loadGTM, { once: true });
          window.addEventListener('touchstart', loadGTM, { once: true });
        })();
      `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          function loadGA() {
            var script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9ZTZJYGL44';
            script.async = true;
            script.onload = function() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9ZTZJYGL44');
            };
            document.head.appendChild(script);
          }

          window.addEventListener('click', loadGA, { once: true });
          window.addEventListener('touchstart', loadGA, { once: true });
        })();
      `,
          }}
        />

        {/* Google Translate - Load Only When Needed */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        function loadGoogleTranslate() {
          if (!window.googleTranslateLoaded) {
            window.googleTranslateLoaded = true;
            var script = document.createElement('script');
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
          }
        }
      `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          function loadZopimChat() {
            if (!window.$zopim) {
              var z = window.$zopim = function(c){ z._.push(c) }, $ = z.s = document.createElement("script");
              z.set = function(o){ z.set._.push(o) };
              z._ = []; z.set._ = []; $.async = true;
              $.setAttribute("charset", "utf-8");
              $.src = "//v2.zopim.com/?1ek5XPVjRxqvCzWD23xAzdWWZ04Rur4S";
              document.head.appendChild($);
            }
          }

          window.addEventListener('click', loadZopimChat, { once: true });
          window.addEventListener('touchstart', loadZopimChat, { once: true });
        })();
      `,
          }}
        />
      </head>

      <body
        className={raleway.className}
      >
        <Header />
        {children}
        {/* <ZopimChat /> */}
        <Footer />

      </body>
    </html>
  );
}
