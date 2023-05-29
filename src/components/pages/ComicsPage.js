import {motion} from "framer-motion";
import { Helmet } from "react-helmet";
import animateProps from "../../animateProps/animateProps";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
    return (
        <motion.div
            layout
            {...animateProps}>       
            <Helmet>
            <meta
                name="description"
                content="Page with list of our comics"
                />
                <title>Comics page</title>
            </Helmet>
            <AppBanner />
            <ComicsList />
        </motion.div>
    )
}

export default ComicsPage;


