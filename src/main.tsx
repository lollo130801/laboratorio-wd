import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notification from './Notification';
import './index.css';

const RootComponent = () => {
    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        const orientationMediaQuery = window.matchMedia("(orientation: portrait)");
        const mobileMediaQuery = window.matchMedia("(max-width: 1000px)");

        const handleOrientationChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsPortrait(e.matches);
        };

        const handleMobileChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsMobile(e.matches);
        };

        orientationMediaQuery.addEventListener('change', handleOrientationChange);
        mobileMediaQuery.addEventListener('change', handleMobileChange);

        return () => {
            orientationMediaQuery.removeEventListener('change', handleOrientationChange);
            mobileMediaQuery.removeEventListener('change', handleMobileChange);
        };
    }, []);

    return (
        <React.StrictMode>
            {isMobile && !isPortrait ? <Notification /> : <App />}
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RootComponent />);
