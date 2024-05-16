import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="flex-col bg-green-950 py-4 px-2 md:px-4">
      <ul className="flex justify-center gap-4">
        <li>
          <a href="https://www.facebook.com/subhadeep.das69/">
            <FaFacebook className="text-white" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/subhadeep_das.69/">
            <FaInstagram className="text-white" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/subhadeep_1998">
            <FaTwitter className="text-white" />
          </a>
        </li>
      </ul>
      <div className="flex justify-center items-center mt-2">
        <h1 className="text-sm text-center font-medium text-slate-100">
          Copyright@2024; Designed by Subhadeep using ReactJs + Tailwind CSS
        </h1>
      </div>
    </div>
  );
}

export default About;
