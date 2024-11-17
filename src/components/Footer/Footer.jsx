import { Link } from "react-router-dom";
import { Logo } from "../../components";
import { Container } from "../../components";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#4C1036] text-[#C6D8FF]">
      <Container>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <Logo width="100px" />
                </div>
                <div>
                  <p className="text-sm text-[#00A896]">
                    &copy; Copyright 2023. All Rights Reserved by Ronak.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-base font-semibold uppercase text-[#00A896]">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-base font-semibold uppercase text-[#00A896]">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-base font-semibold uppercase text-[#00A896]">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-sm font-medium text-[#C6D8FF] hover:text-gray-700"
                      to="/"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
