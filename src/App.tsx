import React, { useEffect, useRef } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import Mattia1Svg0 from './assets/mattia_1.svg';
import Mattia2Svg0 from './assets/mattia_2.svg';
import Mattia3Svg0 from './assets/mattia_3.svg';
import Mattia4Svg0 from './assets/mattia_4.svg';
import Mattia5Svg0 from './assets/mattia_5.svg';
import Mattia6Svg0 from './assets/mattia_6.svg';
import Mattia7Svg0 from './assets/mattia_7.svg';
import bg1 from './assets/1.png';
import bg2 from './assets/2.png';
import bg3 from './assets/3.png';
import bg4 from './assets/4.png';
import bg5 from './assets/5.png';

function App() {
    //Per ogni icona e testo creo un riferimento
    const icon1Ref = useRef<HTMLImageElement>(null);
    const icon2Ref = useRef<HTMLImageElement>(null);
    const icon3Ref = useRef<HTMLImageElement>(null);
    const icon4Ref = useRef<HTMLImageElement>(null);
    const icon5Ref = useRef<HTMLImageElement>(null);
    const icon6Ref = useRef<HTMLImageElement>(null);
    const icon7Ref = useRef<HTMLImageElement>(null);
    const text1Ref = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);
    const text3Ref = useRef<HTMLDivElement>(null);
    const text4Ref = useRef<HTMLDivElement>(null);
    const text5Ref = useRef<HTMLDivElement>(null);
    const text6Ref = useRef<HTMLDivElement>(null);
    const text7Ref = useRef<HTMLDivElement>(null);
    const text1RefPopup = useRef<HTMLDivElement>(null);
    const text2RefPopup = useRef<HTMLDivElement>(null);
    const text3RefPopup = useRef<HTMLDivElement>(null);
    const text4RefPopup = useRef<HTMLDivElement>(null);
    const text5RefPopup = useRef<HTMLDivElement>(null);
    const text6RefPopup = useRef<HTMLDivElement>(null);
    const text7RefPopup = useRef<HTMLDivElement>(null);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const icons = [icon1Ref, icon2Ref, icon3Ref, icon4Ref, icon5Ref, icon6Ref, icon7Ref];
            const text = [
                text1Ref,
                text2Ref,
                text3Ref,
                text4Ref,
                text5Ref,
                text6Ref,
                text7Ref,
                text1RefPopup,
                text2RefPopup,
                text3RefPopup,
                text4RefPopup,
                text5RefPopup,
                text6RefPopup,
                text7RefPopup,
            ];

            // Controllo se l'elemento è visibile
            icons.forEach((iconRef) => {
                if (iconRef.current) {
                    var iconPosition = iconRef.current.getBoundingClientRect().top;
                    var windowHeight = window.innerHeight;
                    var windowCenter = windowHeight;
                    if (iconPosition < windowCenter) {
                        // Se l'icona supera il centro dello schermo aggiungo la classe per l'animazione
                        iconRef.current.classList.add(styles['slide-in-right']);
                    } else {
                        // Altrimenti rimuovo la classe
                        iconRef.current.classList.remove(styles['slide-in-right']);
                    }
                }
            });

            text.forEach((textRef) => {
                if (textRef.current) {
                    var textPosition = textRef.current.getBoundingClientRect().top;
                    var windowHeight = window.innerHeight;
                    if (textPosition < windowHeight) {
                        textRef.current.classList.add(styles['scale-in-top']);
                    } else {
                        textRef.current.classList.remove(styles['scale-in-top']);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call the function once on initial render

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.App}>



            <img src={bg1} alt="" className={styles.bg_1} />
            <img src={bg2} alt="" className={styles.bg_1} />
            <img src={bg3} alt="" className={styles.bg_1} />
            <img src={bg4} alt="" className={styles.bg_1} />
            <img src={bg5} alt="" className={styles.bg_2} />

            <img ref={icon1Ref} src={Mattia1Svg0} alt="" className={styles.icon_1_right} />
    

            <img ref={icon2Ref} src={Mattia2Svg0} alt="" className={styles.icon_2_right} />

            <img ref={icon3Ref} src={Mattia3Svg0} alt="" className={styles.icon_3_right} />


            <img ref={icon4Ref} src={Mattia4Svg0} alt="" className={styles.icon_4_right} />

            <img ref={icon5Ref} src={Mattia5Svg0} alt="" className={styles.icon_5_right} />
            

            <img ref={icon6Ref} src={Mattia6Svg0} alt="" className={styles.icon_6_right} />
            

            <img ref={icon7Ref} src={Mattia7Svg0} alt="" className={styles.icon_7_right} />
            















        </div>
    );
}

export default App;