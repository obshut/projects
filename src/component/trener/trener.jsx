import {useLocation} from "react-router-dom";
import "./trener.css";
import "./trener_media.css";
import React, {useEffect, useState} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {getDownloadURL, getStorage, ref} from 'firebase/storage';


const Trener = () => {

    const storage = getStorage();

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const [trainerInfo, setTrainerInfo] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('id');
        console.log(id)
        console.log(localStorage)
        if (id) {
            const db = firebase.database();
            const ref = db.ref(`team/${id}`);
            console.log(ref)
            ref.on('value', (snapshot) => {
                const data = snapshot.val();
                setTrainerInfo(data);
                console.log(data)
                getPostImgSrc(data.img)
            });
            console.log(ref)

        }
    }, []);

    const getPostImgSrc = (postImg) => {
        console.log(postImg)
        getDownloadURL(ref(storage, postImg))
            .then((url) => {

                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                const img = document.getElementById('trainer');
                img.setAttribute('src', url);
            })
            .catch((error) => {
            });
    };


    return (
        <div className={"container__trener"}>
            <div className={"trener__div"}>
                <div className={"trener__photo"}>
                    <div>
                        <img id={'trainer'} alt={""}/>
                    </div>
                </div>
                <div className={"info__trener"}>
                    <h2 className={"trener__h2"}>
                        {trainerInfo.name}
                    </h2>

                    <div className={"infa"}>
                        <p>{trainerInfo.trainer}</p>
                        <p>Стаж работы: {trainerInfo.experience}</p>
                        <p>Телефон:{trainerInfo.phone}</p>
                        <p>Instagram:{trainerInfo.instagram}</p>

                    </div>
                    <div className={"about"}>
                        <h3>Специализация</h3>
                        <p>{trainerInfo.specialization}</p>

                        <h3>Образование</h3>
                        <p>{trainerInfo.education}</p>
                        <p>{trainerInfo.education2}</p>

                        <h3>Достижения</h3>
                        <p>{trainerInfo.achievements}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Trener;