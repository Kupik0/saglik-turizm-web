import React from "react";
import { Container, Row, Col } from "reactstrap";

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/planeticonbig.png")}
                  style={{ width: "100%" }}
                />
              </div>
          
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
