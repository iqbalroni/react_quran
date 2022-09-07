import Kartu from "./component/Card";
import ListQuran from "./quran.json";
import Container from "react-bootstrap/Container";
import "./css/style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Container className="pt-5 pb-3">
        {ListQuran.map((quran) => (
          <Link className="linkto" to={`/surah/${quran.number_of_surah}`}>
            <Kartu
              surah={quran.name}
              arti={quran.name_translations.id}
              ayat={quran.number_of_ayah}
              turun={quran.place}
            />
          </Link>
        ))}
      </Container>
      <div className="footer">@iqbalronii</div>
    </div>
  );
}

export default Home;
