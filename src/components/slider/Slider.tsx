import { useState } from "react";
import Styles from "../../styles/slider.module.scss";
import useMediaQuery from "../hooks/useMediaQuery";
import { sliderInterface } from "../../interfaces/interface";

export const Slider = (props: sliderInterface) => {
  const [index, setIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  const next = () => {
    setIndex((prev) => (prev < props.carouselItems.length - 1 ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : props.carouselItems.length - 1));
  };

  return (
    <div className={`${isDesktop ? Styles.slider_desktop : Styles.slider_mobile}`}>
      <div className={Styles.sliderwrapper}>
        <div>
          <img alt={props.carouselItems[index].alt} src={props.carouselItems[index].url} />
        </div>
        <div className={Styles.buttonContainer}>
          <span className={Styles.leftbutton} onClick={prev}></span>
          <span className={Styles.rightbutton} onClick={next}></span>
        </div>
      </div>
      <div className={Styles.textcontainer}>
        <p>{props.carouselItems[index].text}</p>
      </div>
    </div>
  );
};
