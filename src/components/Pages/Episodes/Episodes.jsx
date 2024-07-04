import { Hero } from '../../../components'
import heroImg from "../../Hero/img/hero-img.png"
import ellipse from "../../Hero/img/ellipse.svg"
import PodcastComponent from '../../PodcastComponent'

const Episodes = () => {
    return (
        <>
            <Hero
                heroImg={heroImg}
                ellipse={ellipse}
            />

            <PodcastComponent />
            <div className="padding-bottom"></div>
        </>
    )
}

export default Episodes