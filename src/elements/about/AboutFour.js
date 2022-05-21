import React from 'react';
import VideoTwo from '../video/VideoTwo';
import { FiCheck } from "react-icons/fi";


const PopupData = [
    {
        id: "01",
        image: "./images/bg/bg-image-4.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=8-NK1ZRgZbE&ab_channel=EPIGroup',
        ],
    }
]

const AboutFour = ({image}) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-6">
                        {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>
                                <VideoTwo imagename={`${image}`} galleryItem={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title">Epi Avontuur se especializa en <br /> pequeños y grandes <strong>Negocios.</strong></h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">La sostenibilidad es una parte integral y fundamental de nuestro negocio.</h4>
                                            <p className="text">Es nuestra prioridad alentar a nuestros clientes, proveedores y todos los socios comerciales a hacer lo mismo.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Expertos en crear y mantener relaciones</h4>
                                            <p className="text">Somos expertos apasionados y comprometidos con la entrega de soluciones y servicios innovadores, reduciendo el riesgo y creando valor..</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="about-btn mt--30">
                                    <a className="btn-default" href="#">Sobre EPIAVN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour
