import { bannerLogo } from "../data/comics.js";
import styles from "./AppBannerBonus.module.css";

const LogoBanner = ({src, alt, title}) => {
    return(
            <div className={styles.item}>
                <img src={src} alt={alt} />
                <span>{title}</span>
            </div>
    )
}

export default LogoBanner;