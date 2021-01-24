import React, {useReducer} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {TodoContext} from "../context/TodoContext";
import todoReducer from "../context/reducer";
import Form from "./Form";

const Events =()=>{
  return(
    
      <Container fluid>
        <Form></Form>
      </Container>
   

  );
}

export default Events;
