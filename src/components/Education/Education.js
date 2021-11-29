import React, { useEffect } from 'react';
import style from "./Education.module.css"
import Aos from 'aos';

const Education = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    },[])
    return (
        <div className="mt-4">
            <div class="container" data-aos="fade-down-left">
    <div class="row">
        <div class="col-md-12">
            <div class="card  alert alert-primary">
                <div class="card-body">
                    <h5 class="card-title">Eductaion</h5>
                    <div id="content">
                        <ul className={style.timeline}>
                            <li className={style.event} data-date="2015- 2017">
                                <h3>Hassan Al Banna Academy</h3>
                                <p>S.S.C</p>
                            </li>
                            <li className={style.event} data-date="2017 - 2019">
                                <h3>Dhaka State College</h3>
                                <p>H.S.C</p>
                            </li>
                            <li className={style.event} data-date="2019 - Present">
                                <h3>Mohammadpur Central University College</h3>
                                <p>BSC in Computer Science and Engineering (CSE)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Education;