import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/galery-image-01.svg',
        title: 'Infraestructura',
        description: 'Más de X obras realizadas a nivel nacional.'
    },
    {
        image: '/images/service/galery-image-02.svg',
        title: 'Aviación',
        description: 'Retrofit de helipuertos y Overhaul de helicópteros Series Mi17.'
    },
    {
        image: '/images/service/galery-image-03.svg',
        title: 'Solución Satelital AI4EO',
        description: 'Monitoreo Satelital Alimentado con Inteligencia Artificial.'
    },
    {
        image: '/images/service/galery-image-04.svg',
        title: 'Eficiencia Energética',
        description: 'Toma decisiones con datos, no con supuestos.'
    }
]
const ServiceTwo = ({textAlign, cardStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`card-box ${cardStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <Link to="#service">
                                        <img src={`${val.image}`} alt="card Images" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                    <Link className="btn-default btn-small btn-border" to="#service">Conocer Más</Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceTwo;