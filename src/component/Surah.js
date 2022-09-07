import Card from "react-bootstrap/Card";
import ListQuran from "../json/quran.json";
import React, { Component } from "react";

class Surah extends Component {
  render() {
    console.log(this.props.number);
    return (
      <div>
        {this.props.number == 1 ? (
          <div></div>
        ) : (
          <Card className="noscale shadow mt-4 text-center" body>
            <h5 className="center">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h5>
            <p className="center">
              Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang.
            </p>
          </Card>
        )}

        {ListQuran[this.props.number - 1].verses.map((bismillah) => (
          <Card className="noscale shadow mt-3" body>
            <h5>{bismillah.text}</h5>
            <p>{bismillah.translation_id}</p>
          </Card>
        ))}
      </div>
    );
  }
}
export default Surah;
