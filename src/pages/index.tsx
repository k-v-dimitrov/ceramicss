import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";

import Client from "shopify-buy";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ceramicss - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-24 flex items-center min-h-screen justify-center bg-white">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-indigo-600/95">
              Lorem ipsum dolor sit amet.
            </p>
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              eligendi. Sint ipsa officia a alias nisi optio saepe voluptatibus
              unde.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="#"
              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Get started for free
            </a>
            <a
              href="#"
              className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
              {" "}
              Request a demo{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const client = Client.buildClient({
      domain: process.env.SHOPIFY_DOMAIN_NAME,
      storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    });

    const collections = await client.collection.fetchAllWithProducts();
    console.log(collections[1].title);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
