import React from "react";
import Card from "./Card"
import {TodoContext} from "../context/TodoContext";
import todoReducer from "../context/reducer";
import Events from "./Events";


const Home = () => {
  return (
    <div className="text-center">
        <h5 className="text-uppercase m-3">Find best online events going on!</h5>
      <div className="row">        
        <div className="col-xs-6 col-md-3 col-sm-6">
          <Card title="Dev Bootcamp" date="15-02-2021" time="5:00pm" venue="Online" organisation="MLH" organiser="Atif Khan"></Card>
        </div>
        <div className="col-xs-6 col-md-3 col-sm-6">
          <Card title="Digital Marketing Session" date="20-02-2021" time="4:00pm" venue="Online" organisation="Turbo Academy" organiser="Ajay Mishra"></Card>
        </div>
        <div className="col-xs-6 col-md-3 col-sm-6">
          <Card title="FullStack Bootcamp" date="2-02-2021" time="8:00pm" venue="Online" organisation="Khan Academy" organiser="Sanjay Garg"></Card>
        </div>
        <div className="col-xs-6 col-md-3 col-sm-6">
          <Card title="Tech Fest" date="20-04-2021" time="3:00pm" venue="Vanice mall" organisation="IIT Kanpur" organiser="Ananya Singh"></Card>
        </div>
        <div className="col-xs-6 col-md-3 col-sm-6">
          <Card title="Personal Development" date="20-02-2021" time="10:00am" venue="online" organisation="Delhi Hacks" organiser="Ajay Pandey"></Card>
        </div>
        <div className="col-xs-6 col-md-3 col-sm-6">
          <Card title="Hacking Challenge" date="25-02-2021" time="4:00pm" venue="online" organisation="NSD" organiser="Sunita Sharma"></Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
