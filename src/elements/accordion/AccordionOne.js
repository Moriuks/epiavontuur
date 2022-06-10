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
                    <Card.Body> La palabra “EPI” viene del griego antiguo ἐπι y su etimología era usada principalmente en palabras científicas con el significado de “sobre”, mientras que “Avontuur” viene del holandés antiguo y significa “aventura”. Y es por eso por lo que nuestra compañía se llama “EPI Avontuur”, queremos que cada proyecto sea “Sobre la aventura” de cada uno de nuestros proyectos en volver sus sueños realidad. </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    ¿Qué soluciones proporciona EPI Avontuur?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        A través de nuestros más de 35 años de experiencia donde estuvimos involucrados en más de 250 proyectos a nivel nacional, EPI Avontuur se ha especializado a muy grandes rasgos en:<br></br>
                        •	Obra Civil<br></br>
                        •	Instalaciones Electromecánicas<br></br>
                        •	Instalaciones Hidráulicas<br></br>
                        •	Sistemas Contra Incendio<br></br>
                        •	Retrofit de Helipuertos y Overhaul de Helicópteros<br></br>
                        •	Monitoreo y Optimización de Energía<br></br>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    ¿Cómo ayudamos a reducir la huella de carbono? 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Todos los proyectos que hacemos para nuestros clientes son únicos e irremplazables, por lo que nos tomamos el tiempo de entender y conocer el proyecto a detalle para buscar alternativas de materiales que sean más amigables con el medio ambiente.<br></br>
                    Buscamos siempre materiales que requieren poca energía para su fabricación, que sean más eficientes y con una mayor vida útil que los materiales convencionales. De esta manera, no solo ayudamos durante la creación del proyecto, sino, eventualmente y después de la entrega, seguimos agregando valor a nuestros clientes reduciendo sus costos operativos. </Card.Body>
                </Accordion.Collapse>
            </Card>


        </Accordion>
    )
}
export default AccordionOne

