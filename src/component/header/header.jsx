import React, {useState} from "react";
import './header.css';
import './header_media.css';
import {NavLink} from "react-router-dom";
import Modal from 'react-modal';

const Header = () => {

    const [nameError, setNameError] = useState('');
    const [telError, setTelError] = useState('');

    const handleNameChange = (e) => {
        const pattern = /^[а-яА-Я\s]+$/;
        if (!pattern.test(e.target.value)) {
            setNameError('Пожалуйста, используйте только кириллицу.');
        } else {
            setNameError('');
        }
    };

    const handleTelChange = (e) => {
        const pattern = /^[+0-9]+$/;
        if (!pattern.test(e.target.value)) {
            setTelError('Пожалуйста, используйте только цифры.');
        } else {
            setTelError('');
        }
    };


    const [modalIsOpen2, setModalIsOpen2] = useState(false);

    const openModal2 = () => {
        setModalIsOpen2(true);
    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
    };

    const handleSubmit = () => {
        alert(`Спасибо за оставленную заявку. С вами свяжется наш сотрудник в ближайшее время.`);
    };


    const modalContent2 = (
        <div className={"feedback__div"}>
            <div style={{
                // background: "rgba(255,255,255,5)",
                display: "flex",
                borderRadius: 12,
                width: 430,
                backgroundColor: "rgba(255,255,255,0.4)",
                // backgroundColor: "#0f3f3f",
                height: 330
            }}>
                <button
                    style={{
                        width: 30,
                        height: 30,
                        background: 'bottom',
                        fontWeight: 600,
                        border: 0,
                        cursor: "pointer",
                        position: 'absolute'
                    }} onClick={closeModal2}>
                    X
                </button>
                <div style={{
                    width: '100%'
                }}>
                    <form className={"feedback__form"} onSubmit={handleSubmit}>
                        <input
                            className={"feedback__input"}
                            type={"text"}
                            placeholder={"Напишите ваше ФИО"}
                            required
                            onChange={handleNameChange}
                        />
                        {nameError && <p style={{
                            color: 'black',
                            fontFamily: 'Montserrat'
                        }}>{nameError}</p>}
                        <input
                            className={"feedback__input input"}
                            type={"tel"}
                            placeholder={"+375 "}
                            pattern={"^[+0-9]+$"}
                            minLength={12}
                            required
                            onChange={handleTelChange}
                        />
                        {telError && <p style={{
                            color: 'black',
                            fontFamily: 'Montserrat'
                        }}>{telError}</p>}
                        <button className={"bid"} type="submit">Оставить заявку на звонок</button>
                    </form>
                </div>
            </div>
        </div>
    );

    return (
        <header className={"header"}>
            <div className="line">
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox"/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li>
                            <NavLink
                                className={"menu__item"}
                                style={{
                                    color: "#333",
                                    textDecoration: 'none'
                                }} to={"/"}>
                                Начало
                            </NavLink>
                        </li>
                        <li className={'menu__item'}>
                            <NavLink style={{
                                color: "#333",
                                textDecoration: 'none',
                            }} to={"/home"}>
                                О Клубе
                            </NavLink>
                        </li>
                        <li className={'menu__item'}>
                            <NavLink style={{
                                color: "#333",
                                textDecoration: 'none',
                            }} to={"/services"}>
                                Услуги
                            </NavLink>
                        </li>
                        <li
                            className={'menu__item'}
                            onClick={openModal2}>
                            Оставить заявку на звонок
                        </li>
                        <Modal
                            className={"window"}
                            isOpen={modalIsOpen2}
                            onRequestClose={closeModal2}>
                            {modalContent2}
                        </Modal>
                    </ul>
                </div>
            </div>
            <div className="logo">
                <NavLink style={{
                    textDecoration: 'none',
                    color: '#33b0aa',
                }} to={"/"}>m o r e o n <span className={"fitnes"}>F I T N E S</span>
                </NavLink>
            </div>
            <div className="novigation">
                <ul className={"spisok"}>

                    <li className={'aboutClub'}>
                        <NavLink style={{
                            textDecoration: 'none',
                        }} className={"nav-club"}
                                 to={"/home"}>
                            О Клубе
                        </NavLink>
                    </li>

                    <li className={'galerey'}>
                        <NavLink style={{
                            textDecoration: 'none',
                        }} className={"nav-club"}
                                 to={"/services"}>
                            Услуги
                        </NavLink>
                    </li>

                    <li
                        className={'call'}
                        onClick={openModal2}>
                        Оставить заявку на звонок
                    </li>
                    <Modal
                        className={"window"}
                        isOpen={modalIsOpen2}
                        onRequestClose={closeModal2}>
                        {modalContent2}
                    </Modal>
                </ul>
            </div>
        </header>
    )
}

export default Header;