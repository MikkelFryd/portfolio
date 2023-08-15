import image from '../../assets/images/me.webp'
import Styles from '../../styles/about.module.scss'
import useMediaQuery from '../hooks/useMediaQuery';

export const About = () => {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <section className={`${isDesktop ? Styles.about_desktop : Styles.about_mobile}`}>
            <h2>About</h2>
            <article>
                <div>
                    <p>I am 28 years old and i live in Aalborg in Denmark. I have always had a great interrest in IT and in 2020 i decided to become a frontend developer. Since then, I have learned HTML, CSS and Javascript. I have some experience with CMS systems like Contentful and Strapi and for the past year I have worked with Typescript and Next.</p>
                    <p>During my education I participated in an ERASMUS project which took place on Gran Canaria where we had to code a "guide" app in 3 weeks.</p>
                    <p>I have made a song database app, where the user could log in and create, edit and delete songs including artists. The app was made using React for frontend and MySql and express for backend.</p>
                    <p>My hobbies are discgolf, gaming, movies, music and friends.</p>
                </div>
                <div>
                    <img src={image} alt="image-of-me" />
                </div>
            </article>
        </section>
    )
}