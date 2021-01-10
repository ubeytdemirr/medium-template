import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";

export default class Topics extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <CategoriesBar />
          </Col>
        </Row>
      </Container>
    );
  }
}
