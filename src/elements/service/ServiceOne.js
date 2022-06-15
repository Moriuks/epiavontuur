import React from 'react';
import { FiMap } from "react-icons/fi";
import { IoAirplaneOutline, IoBusinessSharp } from "react-icons/io5";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <IoBusinessSharp />,
        title: 'Infraestructura',
        description: 'Mejora para el desarrollo sostenible y planificado de México así como la calidad de vida de sus habitantes.'
    },
    {
        icon: <IoAirplaneOutline />,
        title: 'Aviación',
        description: 'Soluciones integrales adapatables y flexibles, que permiten la toma de decision y operaciones del día a día.'
    },
    {
        icon: <FiMap />,
        title: 'Solución Satelital',
        description: 'Todo con la finalidad de satisfacer a tiempo y en orden, las necesidades de suministro o emergencias.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;