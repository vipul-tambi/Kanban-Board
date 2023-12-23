import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Col, Container, Row } from "react-bootstrap";

import List from "./components/List/List";

const HomePage = (props) => {
  const groupingValue = props.groupingValue;
  const orderingValue = props.orderingValue;
  const setgroupingValue = props.setgroupingValue;
  const setorderingValue = props.setorderingValue;

  let data = [];
  let tickets = [];
  let users = [];
  const [myMap, setMyMap] = useState(new Map());
  const statusList = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
  const userList = [
    "Anoop sharma",
    "Yogesh",
    "Suresh",
    "Shankar Kumar",
    "Ramesh",
  ];
  const priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];

  const fetchData = async () => {
    try {
      const resp = await fetch(
        "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
      ).then((res) => res.json());

      let arr = [];
      for (let i = 0; i < resp.tickets.length; i++) {
        for (let j = 0; j < resp.users.length; j++) {
          if (resp.tickets[i].userId === resp.users[j].id) {
            let tkt = {
              ...resp.tickets[i],
              userObject: resp.users[j],
            };
            arr.push(tkt);
          }
        }
      }

      let userArr = resp.users;

      tickets = arr;
      users = userArr;

      handleData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = () => {
    setMyMap(getGroupWiseOrderWiseData());
  };

  const getGroupWiseOrderWiseData = () => {
    let map = new Map();

    if (groupingValue === "status") {
      for (const x of statusList) {
        map.set(x, []);
      }
    } else if (groupingValue === "priority") {
      for (const x of priorityList) {
        map.set(x, []);
      }
    } else {
      for (const x of userList) {
        map.set(x, []);
      }
    }

    for (let i = 0; i < tickets.length; i++) {
      if (groupingValue === "status") {
        let a = map.get(tickets[i].status);
        a = [...a, tickets[i]];
        map.set(tickets[i].status, a);
      }
      if (groupingValue === "priority") {
        let a = map.get(priorityList[tickets[i].priority]);
        a = [...a, tickets[i]];
        map.set(priorityList[tickets[i].priority], a);
      }
      if (groupingValue === "users") {
        let userId = tickets[i].userId;
        let userObject = users.filter((x) => x.id === userId);
        let userName = userObject[0].name;

        let a = map.get(userName);
        a = [...a, tickets[i]];
        map.set(userName, a);
      }
    }

    if (orderingValue === "priority") {
      for (let entry of map.entries()) {
        const [key, value] = entry;
        value.sort((a, b) => b.priority - a.priority);
        map.set(key, value);
      }
    } else {
      for (let entry of map.entries()) {
        const [key, value] = entry;
        value.sort((a, b) => a.title.localeCompare(b.title));
        map.set(key, value);
      }
    }

    return map;
  };

  function saveGroupingToLocalStorage(state) {
    localStorage.setItem("groupValue", JSON.stringify(state));
  }

  function saveOrderingToLocalStorage(state) {
    localStorage.setItem("orderValue", JSON.stringify(state));
  }

  function getGroupingFromLocalStorage() {
    const groupingState = localStorage.getItem("groupValue");
    if (groupingState) {
      return JSON.parse(groupingState);
    }
    return null;
  }

  function getOrdeingFromLocalStorage() {
    const orderingState = localStorage.getItem("orderValue");
    if (orderingState) {
      return JSON.parse(orderingState);
    }
    return null;
  }

  useEffect(() => {
    saveGroupingToLocalStorage(groupingValue);
    saveOrderingToLocalStorage(orderingValue);
    const fetchDataWrapper = async () => {
      await fetchData();
      await getGroupWiseOrderWiseData();
    };

    fetchDataWrapper();

    // console.log(tickets);
  }, [orderingValue, groupingValue]);
  // console.log(tickets);

  return (
    <>
      <Row style={{ margin: "1em" }}>
        {Array.from(myMap.entries()).map(([key, value]) => {
          return (
            <Col key={key} xs={12} sm={6} md={4} lg={3}>
              <List
                key={key}
                orderingValue={orderingValue}
                groupingValue={groupingValue}
                setorderingValue={setorderingValue}
                setgroupingValue={setgroupingValue}
                order={key}
                value={value}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
