import React from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
  Container,
  NavLink,
} from "reactstrap";

export default class card extends React.Component {
  state = {
    weather: [],
  };

  componentDidMount() {
    axios
      .get(`pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon={}`)
      .then((res) => {
        const weather = res.data;
        this.setState({ weather });
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  render() {
    return <Card>{JSON.stringify(this.state.weather)}</Card>;
  }
}
