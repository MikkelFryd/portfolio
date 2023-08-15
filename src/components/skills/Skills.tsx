import htmlicon from '../../assets/images/icons8-html.svg'
import cssicon from '../../assets/images/icons8-css.svg'
import jsticon from '../../assets/images/icons8-javascript.svg'
import tsicon from '../../assets/images/icons8-typescript.svg'
import nexticon from '../../assets/images/icons8-nextjs.svg'
import Styles from '../../styles/skills.module.scss'
import useMediaQuery from '../hooks/useMediaQuery'

export const Skills = () => {
    
  const isDesktop = useMediaQuery("(min-width: 960px)");

    const skillsArr = [
        {
            url: htmlicon,
            text: 'HTML'
        },
        {
            url: cssicon,
            text: 'CSS'
        },
        {
            url: jsticon,
            text: 'Javascript'
        },
        {
            url: tsicon,
            text: 'Typescript'
        },
        {
            url: nexticon,
            text: 'NextJs'
        }
    ]

    return (
        <div className={`${isDesktop ? Styles.skills_desktop : Styles.skills_mobile}`}>
            <h2>Skills</h2>
            <div className={Styles.skillscontainer}>
                {skillsArr.map((item, index) => {
                    return (
                        <span key={index}>
                            <img src={item.url} alt={item.text} />
                            <p>{item.text}</p>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}