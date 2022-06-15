import React from 'react';
import Typed from 'react-typed';

const AboutOne = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">EPI Avontuur <br /> {" "}
                                    <Typed className="theme-gradient"
                                        strings={[
                                            "Consultoría.",
                                            "Infraestuctura.",
                                            "Agencia.",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    />
                                </h2>
                                <p>Contamos con un equipo de especialistas conformado por expertos con más de 35 años de experiencia en  realizando Obra Civil, Instalaciones Electromecánicas, Instalaciones Hidráulicas.</p>
                                <p>EPI utiliza las últimas tecnologías y técnicas para diseñar soluciones a medida para los proyectos más desafiantes. Es importante destacar que poseemos la capacidad de ofrecer un conjunto integrado de servicios para todo su programa de trabajo, con capacidades que cubren el ciclo de vida completo del proyecto. Tenemos un historial excepcional de calidad, innovación y éxito, y estaremos con usted en cada paso del camino. </p>
                                <div className="read-more-btn mt--40">
                                    <a className="btn-default" href="#"><span>Más sobre nosotros</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutOne
