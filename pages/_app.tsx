import { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from "react-bootstrap/Spinner";

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        AOS.init();
    }, []);

    return (
        <>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                    <Spinner animation="border" variant="dark"/>
                </div>)}
        </>
    );
}

export default MyApp;
