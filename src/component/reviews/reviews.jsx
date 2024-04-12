import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import './reviews.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../slider/slider_media.css';
import "./reviews_media.css";
import {Swiper, SwiperSlide} from "swiper/react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

const firebaseConfig = {
    apiKey: "AIzaSyB-jBAUQYuPpNC5NQGqDf6KYpSLjNcuzV8",
    authDomain: "fitnes-be743.firebaseapp.com",
    databaseURL: "https://fitnes-be743-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitnes-be743",
    storageBucket: "fitnes-be743.appspot.com",
    messagingSenderId: "753473719655",
    appId: "1:753473719655:web:6eeeb3dbe66be6a8cc73c2"
};
firebase.initializeApp(firebaseConfig);


const Reviews = () => {

    const [feedbacks, setFeedbacks] = useState([]);
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetch('https://fitnes-be743-default-rtdb.europe-west1.firebasedatabase.app/feedbacks.json')
            .then(response => response.json())
            .then(data => {
                const feedbacksList = [];
                for (let id in data) {
                    feedbacksList.push({id, ...data[id]});
                }
                setFeedbacks(feedbacksList);
            });
    }, []);


    const Submit = async (e) => {
        e.preventDefault();
        const newFeedback = {
            name,
            feedback,
            timestamp: Date.now(),
        };

        await fetch('https://fitnes-be743-default-rtdb.europe-west1.firebasedatabase.app/feedbacks.json', {
            method: 'POST',
            body: JSON.stringify(newFeedback),
        });

        setFeedbacks(prevFeedbacks => [...prevFeedbacks, newFeedback]);
        setName('');
        setFeedback('');
    };


    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className={"feedback__div"}>
            <div className={"feedback__div2"}>
                <button
                    style={{
                        width: 30,
                        height: 30,
                        background: 'bottom',
                        fontWeight: 600,
                        border: 0,
                        cursor: "pointer",
                        position: 'absolute'
                    }} onClick={closeModal}>
                    X
                </button>
                <form className={"feedback__form"} onSubmit={Submit}>
                    <input
                        required
                        className={"feedback__input"}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Напишите ваше Имя"
                    />
                    <textarea
                        required
                        className={"feedback__textarea"}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Напишите ваш отзыв"
                    />
                    <button className={"feedback__button"}>Отправить</button>
                </form>
            </div>
        </div>
    );

    return (
        <div className={'reviews__div'}>
            <h2 className={'reviews__h2'}>Отзывы</h2>
            <div>
                <Swiper
                    className={"swiper_swiper"}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    navigation
                    slidesPerView={2}
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                >
                    {feedbacks.map((feedback, index) => (
                        <SwiperSlide className={"slider"}
                                     key={index}>
                            <div className="reviews">
                                <div className={"feedback__name"}>
                                    <h3>{feedback.name}</h3>
                                </div>
                                <div className={"feedback__feedback"}>
                                    <p>{feedback.feedback}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button className={"modal_button"} onClick={openModal}>Оставить отзыв</button>
            <Modal className={"window"} isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
}

export default Reviews;