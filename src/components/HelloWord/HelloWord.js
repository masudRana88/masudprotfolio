import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Aos from 'aos';

const HelloWord = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    },[])
    return (
        <Container className="mt-4" id="hello">
            <div  class="alert alert-dismissible alert-primary">
                <strong className="fs-5">Hi..</strong>
                <p>
                    I am MERN stack developer able to build a Web presence from the ground up.I am in this field since 2020. I know many technologies including javaScript, React, Node js, MongoDB. I love to work as frontend developer.
                </p>
            </div>
        </Container>
    );
};

export default HelloWord;