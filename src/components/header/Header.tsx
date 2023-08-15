import Styles from '../../styles/header.module.scss'
import useMediaQuery from '../hooks/useMediaQuery';

export const Header = () => {
    
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <header className={`${isDesktop ? Styles.header_desktop : Styles.header_mobile}`}>
            <div>
                <h1>
                    <span>W</span>
                    <span>e</span>
                    <span>b&nbsp;</span>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                </h1>
                <h3>Who loves bringing designs to life.</h3>
            </div>
        </header>
    )
}