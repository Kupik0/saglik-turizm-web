/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                //href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
              MyPlanet
              </a>
            </li>
            <li>
              <a
                //href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Daha fazla öğren...
              </a>
            </li>
            <li>
              <a
                //href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, 
        
           Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            null. tech
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
