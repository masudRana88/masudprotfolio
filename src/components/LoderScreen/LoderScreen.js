import React from 'react';
import style from "./LoderScreen.module.css"
import SyncLoader from "react-spinners/SyncLoader";
const LoderScreen = () => {
    return (
        <div className={style.loderContainer}>
            <SyncLoader color="#fff"/>
        </div>
    );
};

export default LoderScreen;