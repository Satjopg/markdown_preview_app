import React from "react";
import AppBar from "material-ui/AppBar";
import SocialPublic from "material-ui/svg-icons/social/public"

function Footer(props) {
  return(
    <AppBar
      title=""
      iconElementLeft={<SocialPublic />}
    />
  )
};

export default Footer;
