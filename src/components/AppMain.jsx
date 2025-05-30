import styles from "./AppMain.module.css";

function MainContent() {
  return <main className={styles.main}>
      <div className={styles.contentBox}>
        &rarr; Content goes here &larr;
      </div>
    </main>;
}

export default MainContent;
