import React from "react";
import "./StarWars.css";
import CharacterInfo from "./CharacterInfo";

const ContainerCards = props => {
    return props.character.map(role => {
        return (
            <div className="characters" key="role.url">
                <h2>{role.name}</h2>
                <CharacterInfo info={role} />
            </div>
        );
    });
};

export default ContainerCards;