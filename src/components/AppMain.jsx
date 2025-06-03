import styles from "./AppMain.module.css";
import { comics } from "../data/comics.js";

function MainContent() {
  return <main className={styles.main}>
      {<img src="/jumbotron.jpg" alt="teen-titans-go" className={styles.jumboImg}/>}
      <button className={styles.buttonSerie}>serie correnti</button>
      <div className={styles.contentBox}>
        {comics.map((curComic) =>(
          <div key={curComic.id} className={styles.comicCard}>
            <img  src={curComic.thumb} alt={`Immagine del ${curComic.title}`} className={styles.comicCard} />
            <h6>{curComic.series}</h6>
          </div>
        ))}
      </div>
    </main>;
}

export default MainContent;
