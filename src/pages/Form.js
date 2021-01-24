import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from "reactstrap";


import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import {v4} from "uuid"
import {TodoContext} from "../context/TodoContext"
import {ADD_TODO} from "../context/action.types"

const TodoForm=()=>{
    const [eventName, setEventName]=useState("");
    const [organiser, setOrganiser]=useState("");
    const [organisation, setOrganisation]=useState("");
    const [date, setDate]=useState("");
    const [time, setTime]=useState("");
    const [venue, setVenue]=useState("");
    const [desc, setDesc]=useState("");
    
    const handleSubmit= e=>{   // e-> event
        e.preventDefault();   // preventing any default value
        // check if the input is empty
        if(eventName==="" || organiser==="" || organisation==="" || date==="" || time==="" || venue==="" || desc===""){
            return alert("Enter a value");
        }
        
        eventName("");

    }
    return (
        
        <Container className="text-center mt-0">
        <Row>
            <Col lg={6} className="offset-lg-3">
            <Card>
                <Form onSubmit={handleSubmit}>
                <CardHeader style={{background: "linear-gradient(to right, #FED54A,#FD297A)"}} className="bg-success text-light">
                    <h4>Describe Your Event</h4></CardHeader>
                <CardBody>
                    <FormGroup row>
                    <Label for="eventName" sm={4}>
                        Name of Event
                    </Label>
                    <Col sm={8}>
                    <Input
                        type="text"
                        name="eventName"
                        id="eventName"
                        placeholder="Your Event name"
                        value={eventName}
                        onChange={e => setEventName(e.target.value)}
                    
                    />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="organiser" sm={4}>
                        Name of Organiser
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="text"
                        name="organiser"
                        id="organiser"
                        placeholder="Organiser of the event"
                        value={organiser}
                        onChange={e => setOrganiser(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="organisation" sm={4}>
                        Organisation
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="text"
                        name="organisation"
                        id="organisation"
                        placeholder="Your Organisation"
                        value={organisation}
                        onChange={e => setOrganisation(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="date" sm={4}>
                        Date
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Date of Event"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="time" sm={4}>
                        Time
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="text"
                        name="time"
                        id="time"
                        placeholder="Time of Event"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="Venue" sm={4}>
                        Venue
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="text"
                        name="Venue"
                        id="Venue"
                        placeholder="Online (Platform) / Offline (Address)"
                        value={venue}
                        onChange={e => setVenue(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="Description" sm={4}>
                        Description
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="text-box"
                        name="Description"
                        id="Description"
                        placeholder="Describe your event"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                </CardBody>
                
                    <Button style={{background: "linear-gradient(to right, #FED54A,#FD297A)"}} type="submit" block>
                    <h5>Add Event</h5>
                    </Button>
                
                </Form>
            </Card>
            </Col>
        </Row>
    </Container>
  );
        
}
export default TodoForm;