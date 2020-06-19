import React, { Component }from "react";
import "../Jumbotron/Jumbotron.css"

class Jumbotron extends Component {
render() {
  return (
    <div>
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">Coming Soon</h1>
        </div>
      </div>
    </div>
  );
 }
};

export default Jumbotron;
