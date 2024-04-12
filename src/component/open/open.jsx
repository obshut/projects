import React, {useEffect} from "react";
import "./open.css";
import "./open_media.css";
import {NavLink, useLocation} from "react-router-dom";


const Open = () => {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className={'open__div'}>
            <div className={"container"}>
                <div className={"text"}>
                    <p className={"h2"}><span className={"moreon"}>Moreon Fitness </span>
                        откроет для вас
                        новые возможности</p>
                    <p className={"p"}>
                        500 000 м2 фитнес зала, 100 500 тренажеров VIP уровня, Бассейны и СПА центр,
                        гибкая клубная карта, персональные тренировки и все самые продвинутые программы 2022 года
                        ждут вас в Moreon Fitness
                    </p>
                </div>
                <div className={"button"}>
                    <button className={"button"}>
                        <NavLink className={"open__button"} style={{}} to={"/home"}>
                            <p>Узнать подробнее</p>
                        </NavLink>
                    </button>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Open;