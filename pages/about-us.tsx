import Image from "next/image";
import { GetStaticProps } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ourShop from "../public/bg-img/ourshop.png";
import TestiSlider from "../components/TestiSlider/TestiSlider";

const AboutUs = () => {
  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`Shopping Cart - Haru Fashion`} />

      <main id="main-content">
        {/* ===== Heading & Continue Shopping */}
        <div className="app-max-width px-4 sm:px-8 md:px-20 w-full border-t-2 border-gray100">
          <h1 className="text-2xl sm:text-4xl text-center sm:text-left mt-6 mb-2 animatee__animated animate__bounce">
            About us
          </h1>
        </div>

     

        <section className="app-max-width mt-16 mb-20 flex flex-col justify-center items-center text-center">
          <div className="textBox w-3/4 md:w-2/4 lg:w-2/5 mb-6">
            <h2 className="text-3xl mb-6">Our Shop</h2>
            <span className="w-full">
              Stop by our stores to learn the stories behind our products, get a
              personal styling session, or shop the latest in person. See our
              store locations.
            </span>
          </div>
          <div className="w-full app-x-padding flex justify-center">
            <Image src={ourShop} alt="Our Shop" />
          </div>
        </section>

        <section className="w-full hidden h-full py-16 md:flex flex-col items-center bg-lightgreen">
          <h2 className="text-3xl">Testimonial</h2>
          <TestiSlider />
        </section>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/common/${locale}.json`)).default,
    },
  };
};

export default AboutUs;
