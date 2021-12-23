import React from "react";
import "./card-list.styles.css"
import { Card } from "../card/car.component";

export const CardList = (props) => {
    console.log(props);
    return(
        <div className="card-list">
            {
                props.monsters.map(monster => {
                    return (
                        <Card monster={monster} key={monster.id}/>
                    )
                })
            }
        </div>
    );
}