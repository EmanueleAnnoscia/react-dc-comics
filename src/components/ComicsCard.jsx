import {comics} from "../data/comics.js";
import styles from "./AppMain.module.css";


const ComicsCard = ({ thumb, series, title}) => {
    return (
        <div className={styles.comicCard}>
            <img  src={thumb} alt={title}  />
            <h6>{series}</h6>
        </div>
    );
};   

export default ComicsCard;