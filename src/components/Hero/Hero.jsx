import './style.css'

const Hero = ({heroImg, ellipse}) => {
    return (
        <section className="hero-section d-flex align-items-center justify-content-center">
            <div className="hero-img-wrapper">
                <img src={heroImg} alt="hero image" className="hero-img"/>
                <img src={ellipse} alt="hero image" className="ellipse"/>
            </div>
        </section>
    )
}

export default Hero