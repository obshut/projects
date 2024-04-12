import React, {useState} from "react";
import "./team.css";
import "./team_media.css";
import Trener from "../trener/trener";
import {NavLink} from "react-router-dom";

const Team = () => {

    const [showComponent, setShowComponent] = useState('');
    const json = (event) => {
        console.log(event.currentTarget.id);
        localStorage.setItem('id', event.currentTarget.id);
        console.log(localStorage);
        setShowComponent('Trener');
    };

    if (showComponent === 'Trener') {
        return <Trener/>;
    }


    return (
        <div className={"container__team"}>
            <p className={"team"}>Команда</p>
            <div className={"cards"}>
                <button className={"button__nav"} id={"1"} onClick={json}>
                    <NavLink style={{
                        textDecoration: 'none',
                    }} to={"/trainer"}>
                        <div className="card__team one">
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>Максим Ковалёв</p>
                                    <p className={"trener"}>Мастер тренер. Элит тренер</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </button>

                <button className={"button__nav"} id={"2"} onClick={json}>
                    <NavLink style={{
                        textDecoration: 'none',
                    }} to={"/trainer"}>
                        <div className="card__team two">
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>Иван Фролов</p>
                                    <p className={"trener"}>Мастер тренер.</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </button>

                <button className={"button__nav"} id={"3"} onClick={json}>
                    <NavLink style={{
                        textDecoration: 'none',
                    }} to={"/trainer"}>
                        <div className="card__team three">
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>Мария Михайлова</p>
                                    <p className={"trener"}>Мастер тренер. Элит тренер</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </button>

                <button className={"button__nav"} id={"4"} onClick={json}>
                    <NavLink style={{
                        textDecoration: 'none',
                    }} to={"/trainer"}>
                        <div className="card__team four">
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>Ольга Кузнецова</p>
                                    <p className={"trener"}>Мастер тренер.</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </button>

                <button className={"button__nav"} id={"5"} onClick={json}>
                    <NavLink style={{
                        textDecoration: 'none',
                    }} to={"/trainer"}>
                        <div className="card__team five">
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>Татьяна Баранова</p>
                                    <p className={"trener"}>Мастер тренер. Элит тренер</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </button>

                <button className={"button__nav"} id={"6"} onClick={json}>
                    <NavLink style={{
                        textDecoration: 'none',
                    }} to={"/trainer"}>
                        <div className="card__team six">
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>Петр Жуков</p>
                                    <p className={"trener"}>Мастер тренер.</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </button>

                <button className={"button__nav"} id={"7"} onClick={json}>
                    <NavLink style={{
                        textDecoration: 'none',
                    }} to={"/trainer"}>
                        <div className="card__team seven">
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>Александр Жук</p>
                                    <p className={"trener"}>Мастер тренер. Элит тренер</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </button>

                <button className={"button__nav"} id={"8"} onClick={json}>
                    <NavLink style={{
                        textDecoration: 'none',
                    }} to={"/trainer"}>
                        <div className="card__team eight">
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>Сергей Гордеев</p>
                                    <p className={"trener"}>Мастер тренер.</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </button>

            </div>
        </div>

    );
}

export default Team;