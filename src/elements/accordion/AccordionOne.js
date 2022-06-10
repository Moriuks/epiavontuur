import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    ¿Qué significa Epi Avoontur ? 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Epi Avontuur es pionera en soluciones integrales con impacto ambiental!. </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Misión
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Mejorar el desarrollo sostenible y planificado de México, así como la calidad de vida de sus habitantes a través de proyectos de impacto.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Visión 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Ofrecer soluciones integrales, adaptables y flexibles que permiten la toma de decisiones de nuestros clientes de una manera rápida y certera. </Card.Body>
                </Accordion.Collapse>
            </Card>


        </Accordion>
    )
}
export default AccordionOne

