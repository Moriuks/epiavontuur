import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Compromiso <br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Seguridad.",
                                        "Excelencia.",
                                        "Centrados al Cliente.",
                                        "Respeto",
                                        "Honestidad",
                                        "Un equipo",
                                        "Sostenibilidad"
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>Proveer a nuestros clientes trabajos de calidad y excelencia, con una atención y servicio al cliente ejemplares. Con nuestros más de 35 años de experiencia en la ejecución de proyectos, cumplimos siempre con los estándares de seguridad más rigurosos y bajo las normas aplicables para el correcto desarrollo y operatividad de cada proyecto.</p>

                            <p>Misión: <br></br> Mejorar el desarrollo sostenible y planificado de México, así como la calidad de vida de sus habitantes a través de proyectos de impacto</p>

                            <p>Visión: <br></br> Ofrecer soluciones integrales, adaptables y flexibles que permiten la toma de decisiones de nuestros clientes de una manera rápida y certera. </p>

                            <div className="read-more-btn mt--50">
                                <Link className="btn-default btn-icon" to="#">Conócenos <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default mission;
