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
                    ¿Qué soluciones proporciona Epi Avoontur ? 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet finibus lorem eu varius. Nam hendrerit elit ac massa pretium, sed ultrices lorem euismod. Maecenas varius semper dictum.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    ¿Cómo ayudamos a reducir la huella de carbono ? 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet finibus lorem eu varius. Nam hendrerit elit ac massa pretium, sed ultrices lorem euismod. Maecenas varius semper dictum..</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    ¿Cómo ayudamos a reducir la huella de carbono ? 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet finibus lorem eu varius. Nam hendrerit elit ac massa pretium, sed ultrices lorem euismod. Maecenas varius semper dictum.</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

