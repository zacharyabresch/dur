import React from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";

const Dur = () => (
  <div>
    <h1>Dur</h1>
    <Grid>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>Start date: </ControlLabel>
              <FormControl
                type="text"
                className="start-input"
                placeholder="Start date & time"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>End date: </ControlLabel>
              <FormControl
                type="text"
                className="end-input"
                placeholder="End date & time"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="calculate-btn">Calculate duration</Button>
      </Form>
    </Grid>
  </div>
);

export default Dur;
