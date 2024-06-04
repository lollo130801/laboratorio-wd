import React, { useState } from 'react';
import styles from './App.module.scss';
import ReactDOM from 'react-dom';

function App() {
    const [showMessage, setShowMessage] = useState(false);

    const handleMouseOver = () => {
        setShowMessage(true);
    };

    const handleMouseOut = () => {
        setShowMessage(false);
    };

    return (
        <div className={styles.banana}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt="Descrizione dell'immagine"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />
            {showMessage && <div className={styles.MyText}>Ciao mondo!!</div>}
        </div>
    );
}

export default App;
