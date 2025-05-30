import styles from "./AppHeader.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src="/favicon.ico" alt="DC Logo" className={styles.logo} />
      <nav className={styles.menu}>
        <a href="#">CHARACTERS</a>
        <a href="#">COMICS</a>
        <a href="#">MOVIES</a>
        <a href="#">TV</a>
        <a href="#">GAMES</a>
        <a href="#">COLLECTIBLES</a>
        <a href="#">VIDEOS</a>
        <a href="#">FANS</a>
        <a href="#">NEWS</a>
        <a href="#">SHOP</a>
      </nav>
    </header>
  );
}

export default Header