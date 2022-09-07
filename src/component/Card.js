import Card from "react-bootstrap/Card";
import React, { Component } from "react";

class Kartu extends Component {
  render() {
    return (
      <Card className="shadow mt-4" body>
        <h5>
          {this.props.surah} ({this.props.arti})
        </h5>
        <p>
          Terdapat {this.props.ayat} Ayat Dan Turun Di Kota {this.props.turun}
        </p>
      </Card>
    );
  }
}

export default Kartu;
