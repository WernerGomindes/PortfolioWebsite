export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Werner</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--title--description">
                        From unraveling server-side mysteries with Spring Boot
                        to weaving captivating tales<br /> 
                        on the frontend with React, I'm the fullstack wizard who crafts digital enchantment
                        – turning code into seamless solutions!
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />                    
            </div>
        </section>
    );
}