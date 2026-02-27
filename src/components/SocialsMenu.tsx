import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-[#4e525a]">
        {/* <li className="hover:text-blue-600">
          <Link href="https://instagram.com/mr_Rohith_g" target="_blank">
            <Instagram />
          </Link>
        </li> */}
        <li className="hover:text-blue-600">
          <Link
            href="https://www.linkedin.com/in/rohith-g-963994258/"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href="https://github.com/Rohith208" target="_blank">
            <Github />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
