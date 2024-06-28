import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notification from './Notification';
import './index.css';

const RootComponent = () => {
    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(orientation: portrait)");

        const handleOrientationChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsPortrait(e.matches);
        };

        mediaQuery.addEventListener('change', handleOrientationChange);

        return () => {
            mediaQuery.removeEventListener('change', handleOrientationChange);
        };
    }, []);

    return (
        <React.StrictMode>
            {isPortrait ? <App /> : <Notification />}
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RootComponent />);
