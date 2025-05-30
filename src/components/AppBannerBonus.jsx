import styles from "./AppBannerBonus.module.css";

function BannerBonus() {
  return (
    <section className={styles.banner}>
      <div className={styles.boxElem}>   {/* si può mettere anche la nomenclatura classica purchè sia nelle bracket notation ["box-elem"]  */}
      <div className={styles.item}>
        <img src="/buy-comics-digital-comics.png" alt="Digital Comics" />
        <span>DIGITAL COMICS</span>
      </div>
      <div className={styles.item}>
        <img src="buy-comics-merchandise.png" alt="DC Merchandise" />
        <span>DC MERCHANDISE</span>
      </div>
      <div className={styles.item}>
        <img src="buy-comics-subscriptions.png" alt="Subscription" />
        <span>SUBSCRIPTION</span>
      </div>
      <div className={styles.item}>
        <img src="buy-comics-shop-locator.png" alt="Comic Shop Locator" />
        <span>COMIC SHOP LOCATOR</span>
      </div>
      <div className={styles.item}>
        <img src="buy-dc-power-visa.svg" alt="DC Power Visa" />
        <span>DC POWER VISA</span>
      </div>
      </div>
    </section>
  );
}

export default BannerBonus;
