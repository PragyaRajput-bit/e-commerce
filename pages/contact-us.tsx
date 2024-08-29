import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GetStaticProps } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import Input from "../components/Input/Input";
import { useAuth } from "../context/AuthContext";

const ShoppingCart = () => {
  const t = useTranslations("CartWishlist");
  const auth = useAuth();

  // Form Fields
  const [name, setName] = useState(auth.user?.fullname || "");
  const [email, setEmail] = useState(auth.user?.email || "");
  const [phone, setPhone] = useState(auth.user?.phone || "");
  const [address, setAddress] = useState(auth.user?.shippingAddress || "");
  const [isOrdering, setIsOrdering] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  let disableOrder =
    name !== "" && email !== "" && phone !== "" && address !== ""
      ? false
      : true;

  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`Contact us - Haru Fashion`} />

      <main id="main-content">
        {/* ===== Heading & Continue Shopping */}
        <div className="app-max-width px-4 sm:px-8 md:px-20 w-full border-t-2 border-gray100">
          <h1 className="text-2xl sm:text-4xl text-center sm:text-left mt-6 mb-2 animatee__animated animate__bounce">
            Contact Us
          </h1>
        </div>
        {!isOrdering ? (
          <div className="app-max-width px-4 sm:px-8 md:px-20 mb-14 flex flex-col lg:flex-row items-center justify-center">
            <div className="h-full w-full lg:w-7/12 mr-8 ">
              {errorMsg !== "" && (
                <span className="text-red text-sm font-semibold">
                  - {t(errorMsg)}
                </span>
              )}
              <div className="my-4">
                <label htmlFor="name" className="text-lg">
                  {t("name")}
                </label>
                <Input
                  name="name"
                  type="text"
                  extraClass="w-full mt-1 mb-2"
                  border="border-2 border-gray400"
                  value={name}
                  onChange={(e) =>
                    setName((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>

              <div className="my-4">
                <label htmlFor="email" className="text-lg mb-1">
                  {t("email_address")}
                </label>
                <Input
                  name="email"
                  type="email"
                  readOnly={auth.user ? true : false}
                  extraClass={`w-full mt-1 mb-2 ${
                    auth.user ? "bg-gray100 cursor-not-allowed" : ""
                  }`}
                  border="border-2 border-gray400"
                  value={email}
                  onChange={(e) =>
                    setEmail((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>

              <div className="my-4">
                <label htmlFor="phone" className="text-lg">
                  {t("phone")}
                </label>
                <Input
                  name="phone"
                  type="text"
                  extraClass="w-full mt-1 mb-2"
                  border="border-2 border-gray400"
                  value={phone}
                  onChange={(e) =>
                    setPhone((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>

              <div className="my-4">
                <label htmlFor="address" className="text-lg">
                  Message
                </label>
                <textarea
                  aria-label="Address"
                  className="w-full mt-1 mb-2 border-2 border-gray400 p-4 outline-none"
                  rows={4}
                  value={address}
                  onChange={(e) =>
                    setAddress((e.target as HTMLTextAreaElement).value)
                  }
                />
              </div>
              <Button
                value={"Submit"}
                size="xl"
                extraClass={`w-full`}
                onClick={() => setIsOrdering(true)}
                disabled={disableOrder}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="h-full w-full md:w-1/2 md:ml-8 mt-4 md:mt-2 lg:mt-4">
              <div className="text-center">
                Your message has been received. Thank you for contacting us.
              </div>

              <div className="flex justify-center items-center h-56">
                <div className="w-3/4">
                  <Image
                    className="justify-center"
                    src="/logo.svg"
                    alt="Haru Fashion"
                    width={220}
                    height={50}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
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

export default ShoppingCart;
