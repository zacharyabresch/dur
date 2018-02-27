import React, { Component } from "react";
import moment from "moment";
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

export class Dur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().format("L"),
      endDate: moment()
        .add(1, "days")
        .format("L")
    };
  }

  handleStartChange(event) {
    this.setState({
      startDate: event.target.value
    });
  }

  handleEndChange(event) {
    this.setState({
      endDate: event.target.value
    });
  }

  render() {
    return (
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
                    value={this.state.startDate}
                    onChange={this.handleStartChange.bind(this)}
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
                    value={this.state.endDate}
                    onChange={this.handleEndChange.bind(this)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="calculate-btn">Calculate duration</Button>
          </Form>
        </Grid>
      </div>
    );
  }
}

export default Dur;
