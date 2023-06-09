import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import animateProps from "../../../animateProps/animateProps";
import './singleCharacterPage.scss';

const SingleCharacterPage = ({data}) => {
    const {name, description, thumbnail} = data;

    return (
        <motion.div 
            className="single-comic"
            layout
            {...animateProps}>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link to="/" className="single-comic__back">Back to all</Link>
        </motion.div>
    )
}



export default SingleCharacterPage;