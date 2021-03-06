import React from 'react';

import favorita from '../../../Images/favorita.svg';
import reloj from '../../../Images/reloj.svg';



import './cardreceipedetails.scss'


const CardReceipeDetails = (props) => {
    console.log(props)
//rellenamos el detalle de la Card con lo que nos llega por props
    return (
        <div>
            <div className="cardreceta">
                <div className="cardreceta-imgrcp">
                    <img className="cardreceta-imgrcp-img" src={props.image} alt="cardreceta-img" />
                </div>
                <div className="cardreceta-txt-img">
                    <div className="cardreceta-txt">
                        <p className="cardreceta-txt">{props.nameRecipe}</p>
                    </div>
                    <div className="cardreceta-img">

                        <img src={favorita} alt="corazón" />
                    </div>

                </div>
                <div className="time-difficulty">
                    <div className="cardreceta-time">
                        <div>
                            <img src={reloj} alt="reloj" />
                        </div>
                        <div className="cardreceta-tiempo">
                            {props.time}
                        </div>
                    </div>

                    <div className="cardreceta-dificultad">
                        <p>Difficulty: {props.difficulty}</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardReceipeDetails

