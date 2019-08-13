import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faVk
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

function Icons() {
  return (

    <div className="text-center mb-5 mt-5">
      <a href="https://vk.com/away.php?to=https%3A%2F%2Fwww.instagram.com%2Fvitalyliber%2F&cc_key=" target="_blank" className="mr-3 ">
        <FontAwesomeIcon
          color="black"
          size="3x"
          icon={faInstagram}
        />
      </a>
      <a href="https://vk.com/vitaly.liber" target="_blank" className="mr-3">
        <FontAwesomeIcon
          color="black"
          size="3x"
          icon={faVk}
        />
      </a>
      <a href="https://www.youtube.com/channel/UCYYZYhaXedvg9U6bjMISaEA" target="_blank">
        <FontAwesomeIcon
          color="black"
          size="3x"
          icon={faYoutube}
        />
      </a>
    </div>
  );
}

export default Icons;
