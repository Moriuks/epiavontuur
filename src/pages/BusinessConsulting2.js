import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderTwo from '../common/header/HeaderTwo';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutOne from '../elements/about/AboutOne';
import ServiceFive from '../elements/service/ServiceFive';
import ServiceTwo from '../elements/service/ServiceTwo';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamTwo from '../elements/team/TeamTwo';
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import Mission from "../elements/about/Mission";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);




const BusinessConsulting2 = () => {
    return (
        <>
            <SEO title="EpiAVN" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderTwo btnStyle="round" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-850">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">Una Empresa neutral en carbono</span>
                                    <h1 className="title theme-gradient display-two">Epi Avontuur <br /> {" "}
                                        <Typed
                                            strings={[
                                                "Consultaría.",
                                                "Infraestuctura.",
                                                "Agencia."
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">Ayudamos a nuestros clientes a tener éxito mediante la integración de soluciones de interconectividad y construcción.</p>
                                    <div className="button-group">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="/contact">contactar <i className="icon"><FiArrowRight /></i></a>
                                        {/* <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Contact Us <i className="icon"><FiArrowRight /></i></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start About Area  */}
                <AboutOne />                            
                {/* End About Area  */}

                <Separator />                            
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Con lo que te podemos ayudar"
                                    title = "Servicios con los que contamos."
                                    description = "Ser respetuoso al escuchar atentamente a nuestros clientes para <br /> comprender sus necesidades y desafíos en"
                                    />
                            </div>
                        </div>
                        <ServiceTwo 
                            serviceStyle = "gallery-style"
                            textAlign = "text-start"
                        />
                    </div>
                </div>
                {/* End Service Area  */}


                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}


                 {/* Start Team Area  */}
                 {/* <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Los Expertos."
                                        title = "Nuestro equipo."
                                        description = "Brindamos servicios de integración y tecnología para <br /> empresas emergentes y negocios de empresas."
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div> */}
                {/* End Team Area  */}
                <Separator /> 
                {/* Start Mission Area   */}
                <Mission />                    
                {/* Start Mission Area  */}


                <Separator />                               
                {/* Start Testimonial Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Lo que dicen nuestros clientes"
                                    title = "Nuestros clientes."
                                    description = "Brindamos servicios intregrales y de monitoreo para <br /> empresas emergentes y negocios de empresas."
                                />
                            </div>
                        </div>
                        <TestimonialThree teamStyle="" />
                    </div>
                </div>
                {/* End Testimonial Area  */}

                <Separator />   
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "historias de exito"
                                    title = "Nuestras hisorias."
                                    description = "Brindamos servicios intregrales y de monitoreo para <br /> empresas emergentes y negocios de empresas."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default BusinessConsulting2;
