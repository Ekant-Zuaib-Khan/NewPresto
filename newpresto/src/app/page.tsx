import Head from "next/head";
export default function Home() {
  return (
    <>
      {/* <Head>
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
      </Head> */}
      <section className="bg-[url(../../src/assets/images/home-banner.webp)] h-[68vh] bg-contain bg-no-repeat bg-center"></section>
      <section className="py-[50px]">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <h1 className="text-4xl font-bold mb-3">Our Product Range</h1>
              <p>
                Our testing instruments help you examine the constraints and are
                available in following range...
              </p>
            </div>

            <button className="border rounded-full  uppercase px-4 py-2 text-sm">
              View All
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
