import React from "react";
import "./StarWars.css";

const CharacterInfo = props => {
    return (
        <div className="info">
            <span>Birth Year: {props.info.birth_year}</span>
            <span>Height: {props.info.height}</span>
            <span>Mass: {props.info.mass}</span>
            <span>Gender: {props.info.gender}</span>
            <span>Hair Color: {props.info.hair_color}</span>
        </div>
    )
};

export default CharacterInfo;