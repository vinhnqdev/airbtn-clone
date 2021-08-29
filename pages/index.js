import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Clone Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner  */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/** Pull some data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.location}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live everywhere</h2>

          <div className="flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const fetchExplore = async () => {
    const res = await fetch("https://links.papareact.com/pyp");
    const exploreData = await res.json();
    return exploreData;
  };

  const fetchCard = async () => {
    const res = await fetch("https://links.papareact.com/zp1");
    const cardData = await res.json();
    return cardData;
  };

  try {
    const exploreData = await fetchExplore();
    const cardData = await fetchCard();
    return {
      props: {
        exploreData,
        cardData,
      },
    };
  } catch (err) {
    console.log(error);
  }
};
