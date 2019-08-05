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
      <a href="https://vk.com/away.php?to=https%3A%2F%2Fwww.instagram.com%2Fvitalyliber%2F&cc_key=" target="_blank" className="mr-2">
        <FontAwesomeIcon
          color="black"
          size="lg"
          icon={faInstagram}
        />
      </a>
      <a href="https://vk.com/vitaly.liber" target="_blank" className="mr-2">
        <FontAwesomeIcon
          color="black"
          size="lg"
          icon={faVk}
        />
      </a>
      <a href="https://www.youtube.com/channel/UCYYZYhaXedvg9U6bjMISaEA" target="_blank">
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
