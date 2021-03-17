import React from "react";
import { Container } from "../../styles/globalStyle";
import {
  Footer,
  Copyright,
  SocialMediaButtons,
} from "../../styles/footerStyle";

const FooterSection = () => {
  return (
    <Footer>
      <Container columns="1fr auto">
        <Copyright className="copyright">
          &copy; Coypyright {new Date().getFullYear()}. All rights reserved
          <span>&nbsp; Taylor Automotive</span>
        </Copyright>
        <SocialMediaButtons>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </SocialMediaButtons>
      </Container>
    </Footer>
  );
};

export default FooterSection;
