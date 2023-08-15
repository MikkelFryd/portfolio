import { Slider } from "../slider/Slider"
import { carouselItems } from "../slider/SliderContent"
import Styles from '../../styles/projects.module.scss'
import useMediaQuery from "../hooks/useMediaQuery";

export const Projects = () => {

    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <section className={`${isDesktop ? Styles.projects_desktop : Styles.projects_mobile}`}>
            <h2>Projects</h2>
            <div className={Styles.slidercontainer}>
                <Slider carouselItems={carouselItems}/>
            </div>
        </section>
    )
}