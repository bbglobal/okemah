import { AboutComponent, ContactForm, Hero } from '../../../components'
import heroImg from "../../Hero/img/hero-img.png"
import ellipse from "../../Hero/img/ellipse.svg"
import aboutImg from "../Home/img/about-img.png"

const Contact = () => {
    return (
        <>
            <Hero
                heroImg={heroImg}
                ellipse={ellipse}
            />

            <ContactForm />
            <div className="padding-bottom"></div>
        </>
    )
}

export default Contact