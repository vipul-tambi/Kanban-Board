import React from "react";
import CardBody from "../Card/Card";

import "../Card/Card.css";

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

import PlusIcon from "../../Assets/Images/PlusIcon.svg";
import ThreeDotsIcon from "../../Assets/Images/ThreeDotsIcon.svg";
import { Image } from "react-bootstrap";
const List = (props) => {
  let key = props.order;
  let value = props.value;
  let orderingValue = props.orderingValue;
  let groupingValue = props.groupingValue;
  let setorderingValue = props.setorderingValue;
  let setgroupingValue = props.setgroupingValue;

  const getImage = () => {
    if (groupingValue === "priority") {
      if (key === "No priority") {
        return <Image src={NoPriorityIcon} />;
      } else if (key === "Low") {
        return <Image src={LowIcon} />;
      } else if (key === "Medium") {
        return <Image src={MediumIcon} />;
      } else if (key === "High") {
        return <Image src={HighIcon} />;
      } else {
        return <Image src={UrgentIcon} />;
      }
    } else if (groupingValue === "status") {
      if (key === "In progress") {
        return <Image src={ProgressIcon} style={{ marginRight: "5px" }} />;
      } else if (key === "Backlog") {
        return <Image src={BackLogIcon} style={{ marginRight: "5px" }} />;
      } else if (key === "Todo") {
        return <Image src={TodoIcon} style={{ marginRight: "5px" }} />;
      } else if (key === "Done") {
        return <Image src={DoneIcon} style={{ marginRight: "5px" }} />;
      } else {
        return <Image src={CancelledIcon} style={{ marginRight: "5px" }} />;
      }
    } else {
      const nameParts = key.split(" ");

      // Extract the first character of FirstName
      const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";

      // Extract the first character of LastName if present
      const lastNameInitial = nameParts.length > 1 ? nameParts[1][0] : "";

      var colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60"];

      var random_color = colors[Math.floor(Math.random() * colors.length)];

      if (key !== "Anoop sharma") {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marinTop: "10em" }}>
              <div
                className="UserName"
                style={{ backgroundColor: random_color }}
              >
                <span>{firstNameInitial + lastNameInitial}</span>
              </div>
              <div
                className="UserNameDot"
                style={{ backgroundColor: "goldenrod" }}
              ></div>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <span style={{ fontSize: "1.1em", fontWeight: "500" }}>
                {key}
              </span>{" "}
              {value.length}
            </div>
          </div>
        );
      }
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marinTop: "10em" }}>
            <div className="UserName" style={{ backgroundColor: random_color }}>
              <span>{firstNameInitial + lastNameInitial}</span>
            </div>
            <div className="UserNameDot"></div>
          </div>

          <div style={{ marginLeft: "1em" }}>
            <span style={{ fontSize: "1.1em", fontWeight: "500" }}>{key}</span>{" "}
            {value.length}
          </div>
        </div>
      );
    }
  };
  const renderCards = () => {
    let CardArray = [];

    for (let x of value) {
      CardArray.push(
        <CardBody
          order={key}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          value={x}
          orderingValue={orderingValue}
          groupingValue={groupingValue}
          setorderingValue={setorderingValue}
          setgroupingValue={setgroupingValue}
        />
      );
    }

    return CardArray;
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: " 1em",
        }}
      >
        <div>
          {getImage()}
          {groupingValue !== "users" ? (
            <>
              <span style={{ fontSize: "1.1em", fontWeight: "500" }}>
                {key}
              </span>{" "}
              {value.length}
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          <Image src={PlusIcon} />
          <Image src={ThreeDotsIcon} />
        </div>
      </div>

      {renderCards()}
    </div>
  );
};

export default List;
