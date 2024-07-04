
import { EbookComponent, Hero } from '../../../components'
import heroImg from "../../Hero/img/hero-img.png"
import ellipse from "../../Hero/img/ellipse.svg"

const Ebook = () => {
    return (
        <>
            <Hero
                heroImg={heroImg}
                ellipse={ellipse}
            />
            <EbookComponent />
            <div className="padding-bottom"></div>
        </>
    )
}

export default Ebook