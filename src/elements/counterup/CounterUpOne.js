import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";


const Data = [
    {
        countNum : 30,
        countTitle: 'Años operando.',
    },
    {
        countNum : 30,
        countTitle: 'Clientes',
    },
    {
        countNum : 250,
        countTitle: 'Contratos',
    },
    {
        countNum : 200,
        countTitle: 'USD Facturados',
    },
];
const CounterUpOne = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible && 
                                <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                        </TrackVisibility>
                        <h5 className="title">{data.countTitle}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CounterUpOne;