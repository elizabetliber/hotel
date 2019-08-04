import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faVk
} from "@fortawesome/free-brands-svg-icons";

function Icons() {
  return (
    <div className="text-center">
      <a href="https://google.com" target="_blank" className="mr-2">
        <FontAwesomeIcon
          color="black"
          size="lg"
          icon={faInstagram}
        />
      </a>
      <a href="https://google.com" target="_blank" className="mr-2">
        <FontAwesomeIcon
          color="black"
          size="lg"
          icon={faVk}
        />
      </a>
      <a href="https://google.com" target="_blank">
        <FontAwesomeIcon
          color="black"
          size="lg"
          icon={faYoutube}
        />
      </a>
    </div>
  );
}

export default Icons;
