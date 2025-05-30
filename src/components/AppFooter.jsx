import styles from "./AppFooter.module.css";

function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.footerFormat}>
      <div className={styles.footerTop}>
        <div className={styles.footerColumn}>
          <h4>DC COMICS</h4>
          <ul>
            <li>Characters</li>
            <li>Comics</li>
            <li>Movies</li>
            <li>TV</li>
            <li>Games</li>
            <li>Videos</li>
            <li>News</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>SHOP</h4>
          <ul>
            <li>Shop DC</li>
            <li>Shop DC Collectibles</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>DC</h4>
          <ul>
            <li>Terms Of Use</li>
            <li>Privacy policy</li>
            <li>Ad Choices</li>
            <li>Advertising</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>SITES</h4>
          <ul>
            <li>DC</li>
            <li>MAD Magazine</li>
            <li>DC Kids</li>
            <li>DC Universe</li>
            <li>DC Power Visa</li>
          </ul>
        </div>
      </div>

        <div className={styles.footerBanner}>
          <div className={styles.footerBannerInner}>
            <button className={styles.signup}>SIGN-UP NOW!</button>
            <div className={styles.socials}>
              FOLLOW US
              <ul>
                <li><img src="/footer-facebook.png" alt="" /></li>
                <li><img src="/footer-facebook.png" alt="" /></li>
                <li><img src="/footer-facebook.png" alt="" /></li>
                <li><img src="/footer-facebook.png" alt="" /></li>
                <li><img src="/footer-facebook.png" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </footer>
}

export default Footer;
