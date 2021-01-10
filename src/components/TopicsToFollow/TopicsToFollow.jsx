import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import topics from "./data.json";
export default function TopicsToFollow() {
  return (
    <div>
      <div style={{marginBottom:20}}>
      <strong style={{color:"black"}}>TOPICS TO FOLLOW</strong>
          </div>
      {topics.map((topic) => (
        <>
          <Row>
            <Col xs={10}>
              <strong style={{color:"black"}}>{topic}</strong>
            </Col>
            <Col xs={2}>
              <Button variant="outline-success">Follow</Button>
            </Col>
          </Row>
          <hr style={{ width: "110%" }} />
        </>
      ))}
      <span className="text-success" style={{cursor:"pointer"}}>See More</span>
    </div>
  );
}
