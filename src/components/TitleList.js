import React, { Component } from "react";
import Item from "./Item";

function TitleList(props) {
  let titles = "";
  if (props.movies) {
    titles = props.movies.map(function (title, i) {
      if (i < 10) { //I like having ten better, actually.
        return (
          <Item key={i} movie={title} />
        );  
      }
      return (<div key={i} />);
    }); 
  } 
  
  return (
    <div 
      className="TitleList" 
      data-loaded={props.movies && props.movies.length > 0}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {titles}
        </div>
      </div>
    </div>
  );
}
export default TitleList;
