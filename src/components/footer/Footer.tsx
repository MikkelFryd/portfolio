import Styles from '../../styles/footer.module.scss'
import githublogo from '../../assets/images/github-mark-white.png'
import gmaillogo from '../../assets/images/Gmail_Logo.svg'
import linkedinlogo from '../../assets/images/linkedinlogo.png'
import useMediaQuery from '../hooks/useMediaQuery'

export const Footer = () => {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <footer className={`${isDesktop? Styles.footer_desktop : Styles.footer_mobile}`}>
            <div>
                <h2>Thanks for visiting!</h2>
                <h3>Get in touch with me.</h3>
            </div>
            <div className={Styles.logocontainer}>
                <a href="https://github.com/MikkelFryd" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="githublogo" /></a>
                <a href="mailto:mikk7021@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmaillogo} alt="gmaillogo" /></a>
                <a href="https://www.linkedin.com/in/mikkel-frydensberg/" target="_blank" rel="noopener noreferrer"><img src={linkedinlogo} alt="linkedinlogo" /></a>
            </div>
        </footer>
    )
}