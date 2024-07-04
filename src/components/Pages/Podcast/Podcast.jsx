
import {  Hero } from '../../../components'
import heroImg from "../../Hero/img/hero-img.png"
import ellipse from "../../Hero/img/ellipse.svg"

const PodCast = () => {
    return (
        <>
            <Hero
                heroImg={heroImg}
                ellipse={ellipse}
            />

            <div className="padding-bottom"></div>
        </>
    )
}

export default PodCast