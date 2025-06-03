import styles from "./AppMain.module.css";
import comics from "../data/comics.js"

function MainContent() {
  return <main className={styles.main}>
      {<img src="/jumbotron.jpg" alt="teen-titans-go" className={styles.jumboImg}/>}
      <div className={styles.contentBox}>
        <button>serie correnti</button>
        {comics.map((curComic) =>(
          <div key={curComic.id} className={styles.comicCard}>
            <img  src={curComic.thumb} alt={`Immagine del ${curComic.title}`} />
            <h6>{curComic.series}</h6>
          </div>
        ))}
      </div>
    </main>;
}

export default MainContent;
