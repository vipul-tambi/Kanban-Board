import React from "react";
import { Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import NoPriorityIcon from "../../Assets/Images/Priority/NoPriorityIcon.svg";
import LowIcon from "../../Assets/Images/Priority/LowIcon.svg";
import MediumIcon from "../../Assets/Images/Priority/MediumIcon.svg";
import HighIcon from "../../Assets/Images/Priority/HighIcon.svg";
import UrgentIcon from "../../Assets/Images/Priority/UrgentIcon.svg";

import BackLogIcon from "../../Assets/Images/Status/Backlog.svg";
import CancelledIcon from "../../Assets/Images/Status/CancelledIcon.svg";
import DoneIcon from "../../Assets/Images/Status/DoneIcon.svg";
import ProgressIcon from "../../Assets/Images/Status/ProgressIcon.svg";
import TodoIcon from "../../Assets/Images/Status/TodoIcon.svg";

import FeatureIcon from "../../Assets/Images/FeatureIcon.svg";
import "./Card.css";
const CardBody = (props) => {
  let key = props.order;
  let value = props.value;
  let orderingValue = props.orderingValue;
  let groupingValue = props.groupingValue;
  let setorderingValue = props.setorderingValue;
  let setgroupingValue = props.setgroupingValue;

  const getNameIcon = () => {
    if (groupingValue !== "users") {
      const nameParts = value.userObject.name.split(" ");
      const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
      const lastNameInitial = nameParts.length > 1 ? nameParts[1][0] : "";
      var colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60"];

      var random_color = colors[Math.floor(Math.random() * colors.length)];
      if (value.userObject.available) {
        return (
          <div>
            <div className="UserName" style={{ backgroundColor: random_color }}>
              <span>{firstNameInitial + lastNameInitial}</span>
            </div>
            <div
              className="UserNameDot"
              style={{ backgroundColor: "goldenrod" }}
            ></div>
          </div>
        );
      }
      return (
        <div>
          <div className="UserName" style={{ backgroundColor: random_color }}>
            <span>{firstNameInitial + lastNameInitial}</span>
          </div>
          <div className="UserNameDot"></div>
        </div>
      );
    } else return null;
  };

  const getStatusImage = () => {
    // console.log(value.status);
    if (groupingValue !== "status") {
      if (value.status === "Backlog") {
        return <Image src={BackLogIcon} style={{ margin: "0.4em" }} />;
      } else if (value.status === "Todo") {
        return <Image src={TodoIcon} style={{ margin: "0.4em" }} />;
      } else if (value.status === "In progress") {
        return <Image src={ProgressIcon} style={{ margin: "0.4em" }} />;
      } else if (value.status === "Done") {
        return <Image src={DoneIcon} style={{ margin: "0.4em" }} />;
      } else {
        return <Image src={CancelledIcon} style={{ margin: "0.4em" }} />;
      }
    } else return null;
  };

  const getPriorityIcon = () => {
    if (groupingValue !== "priority") {
      if (value.priority === 0) {
        return (
          <Image
            src={NoPriorityIcon}
            style={{ border: "1px solid #e6e7eb", borderRadius: "2px" }}
          />
        );
      } else if (value.priority === 1) {
        return (
          <Image
            src={LowIcon}
            style={{ border: "1px solid #e6e7eb", borderRadius: "2px" }}
          />
        );
      } else if (value.priority === 2) {
        return (
          <Image
            src={MediumIcon}
            style={{ border: "1px solid #e6e7eb", borderRadius: "2px" }}
          />
        );
      } else if (value.priority === 3) {
        return (
          <Image
            src={HighIcon}
            style={{ border: "1px solid #e6e7eb", borderRadius: "2px" }}
          />
        );
      } else {
        return (
          <Image
            src={UrgentIcon}
            style={{ border: "1px solid #e6e7eb", borderRadius: "2px" }}
          />
        );
      }
    } else return null;
  };
  return (
    <Card style={{ width: "100%", marginTop: "10px" }}>
      <Card.Body>
        <Card.Subtitle
          style={{
            color: "gray",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{value.id} </div>

          {getNameIcon()}
        </Card.Subtitle>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {getStatusImage()}
          <Card.Text style={{ fontSize: "1.1em", fontWeight: "500" }}>
            {value.title}
          </Card.Text>
        </div>
        <div style={{ display: "flex" }}>
          <div>{getPriorityIcon()}</div>
          <div
            style={{
              border: "1px solid #e6e7eb",
              borderRadius: "2px",
              marginLeft: "4px",
              fontSize: "0.8em",
            }}
          >
            <Image src={FeatureIcon} style={{ margin: "2px" }} width="12" />
            Feature Request
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardBody;
