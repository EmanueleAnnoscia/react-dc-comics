import styles from "./AppMain.module.css";
import { comics } from "../data/comics.js";
import ComicsCard from "./ComicsCard.jsx";


function MainContent() {
  return <main className={styles.main}>
    {<img src="/jumbotron.jpg" alt="teen-titans-go" className={styles.jumboImg} />}
    <button className={styles.buttonSerie}>serie correnti</button>
    <div className={styles.contentBox}>
      {comics.map((curComic) => (
        <ComicsCard
          key={curComic.id}
          thumb={curComic.thumb}
          series={curComic.series}
          title={curComic.title}
        />
      ))}
    </div>
  </main>;
}

export default MainContent;
