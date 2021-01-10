import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import topics from "./data.json";
export default function TopicsToFollow() {
  return (
    <div className="mt-3">
      <div style={{ marginBottom: 20 }}>
        <strong style={{ color: "black" }}>TOPICS TO FOLLOW</strong>
      </div>
      <Row>
        {topics.map((topic) => (
          <>
            <Col xs={12} className="d-flex align-items-center">
              <strong style={{ color: "black" }}>{topic}</strong>
              <Button variant="outline-success" className="ml-auto">Follow</Button>
            </Col>
            <hr style={{ width: "110%" }} />
          </>
        ))}
      </Row>
      <span className="text-success" style={{ cursor: "pointer" }}>See More</span>
    </div>
  );
}
