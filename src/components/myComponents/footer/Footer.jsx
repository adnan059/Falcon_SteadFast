import React from "react";
import logoImg from "@/assets/images/footerLogoImg.png";
import {
  Facebook,
  Headset,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import Google from "@/assets/images/Google.png";
import apple from "@/assets/images/apple.png";

import payments from "@/assets/images/payments.png";

const Footer = () => {
  return (
    <footer className="bg-[var(--main-theme)] px-8 min-[1290px]:px-0">
      <div className="footerContainer max-w-[1280px] mx-auto text-white pt-16 pb-8 ">
        {/* ----- footer part 1 ------- */}
        <div className="footerPar1 gap-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* first coloumn */}
          <div className="flex flex-col gap-6">
            {/* logo */}
            <div className="footerLogo flex items-center gap-2">
              <img width={48} height={48} src={logoImg} alt="" />
              <h1 className="font-bold" style={{ fontSize: "var(--fs-j)" }}>
                Falcon
              </h1>
            </div>
            {/* normal text */}
            <p className="font-normal" style={{ fontSize: "var(--fs-c)" }}>
              Experience our new platform & Enjoy exiting deals and offers on
              your day to day
            </p>

            {/* contact list */}
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-2">
                <span className="w-12 h-12 px-2 bg-white rounded-full flex items-center justify-center">
                  <MapPin size={20} className="fill-[var(--main-theme)]" />
                </span>
                <span style={{ fontSize: "var(--fs-c)" }}>
                  House #64, Road 13, ASA Center, Uttara, Dhaka-1402
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-12 h-12 px-2 bg-white rounded-full flex items-center justify-center">
                  <Phone size={20} className="fill-[var(--main-theme)]" />
                </span>

                <span style={{ fontSize: "var(--fs-c)" }}>01729-1497201</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-12 h-12 px-2 bg-white rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-[var(--main-theme)]" />
                </span>
                <span style={{ fontSize: "var(--fs-c)" }}>
                  falcon@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* second coloumn */}

          <div className="flex flex-col gap-4">
            <h2
              className="text-[#94A3B8] mb-4 font-medium uppercase"
              style={{ fontSize: "var(--fs-e)" }}
            >
              ABOUT
            </h2>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Career</a>
            <a href="#">Press</a>
            <a href="#">Cancellation & Return</a>
            <a href="#">Terms Of Use</a>
          </div>

          {/* third coloumn */}

          <div className="flex flex-col gap-4">
            <h2
              className="text-[#94A3B8] mb-4 font-medium uppercase"
              style={{ fontSize: "var(--fs-e)" }}
            >
              HELP
            </h2>
            <a href="#">Payments</a>
            <a href="#">Shipping</a>
            <a href="#">My Orders</a>
            <a href="#">FAQs</a>
            <a href="#">Terms of Use</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
          </div>

          {/* fourth coloumn */}

          <div className="space-y-8">
            <div>
              <p
                className="font-medium capitalize mb-2 text-[#94A3B8]"
                style={{ fontSize: "var(--fs-e)" }}
              >
                Need Support
              </p>
              <button className="flex gap-2 justify-center items-center px-4 py-2 border-2 rounded-lg">
                <Headset className="text-[var(--sec-theme)]" />
                <span>10724-7814XX</span>
              </button>
            </div>
            <div>
              <p
                className="font-medium capitalize mb-2 text-[#94A3B8]"
                style={{ fontSize: "var(--fs-e)" }}
              >
                Download App
              </p>

              <a href="#">
                <img className="mb-4" src={Google} alt="google playstore" />
              </a>

              <a href="#">
                <img src={apple} alt="apple store" />
              </a>
            </div>
          </div>
        </div>
        {/* ------- footer part 2 ---- */}
        <div className="footerPart2 flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-center mt-12">
          <div className="flex items-center gap-6">
            <p>Follow us on</p>
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 px-2 bg-white rounded-full flex items-center justify-center">
                <Facebook size={20} className="fill-[var(--main-theme)]" />
              </span>

              <span className="w-12 h-12 px-2 bg-white rounded-full flex items-center justify-center">
                <Instagram size={20} className="fill-[var(--main-theme)]" />
              </span>

              <span className="w-12 h-12 px-2 bg-white rounded-full flex items-center justify-center">
                <Twitter size={20} className="fill-[var(--main-theme)]" />
              </span>
            </div>
          </div>

          <div className="flex items-center flex-col sm:flex-row gap-3">
            <p>PAYMENTS ACCEPTED</p>
            <img src={payments} alt="" />
          </div>
        </div>
        {/* ------- footer part 3 ---- */}
      </div>
      <div className="footerPart3 py-6 border-t">
        <p className="text-center text-white">Falcon ©2025. Design by xyz</p>
      </div>
    </footer>
  );
};

export default Footer;
