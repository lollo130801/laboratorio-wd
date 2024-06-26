import React, { useEffect, useRef } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import bg1 from './assets/bg_1.png';
import bg2 from './assets/bg_2.png';
import bg3 from './assets/bg_3.png';
import bg4 from './assets/bg_4.png';
import bg5 from './assets/bg_5.png';
import nuvoleTitolo from './assets/iconeTitolo/nuvoleTitolo.svg';
import titolo from './assets/iconeTitolo/titolo.svg';
import Mattia1Svg0 from './assets/mattia_1.svg';
import Mattia2Svg0 from './assets/mattia_2.svg';
import Mattia3Svg0 from './assets/mattia_3.svg';
import Mattia4Svg0 from './assets/mattia_4.svg';
import Mattia5Svg0 from './assets/mattia_5.svg';
import Mattia6Svg0 from './assets/mattia_6.svg';
import Mattia7Svg0 from './assets/mattia_7.svg';
import Mattia8Svg0 from './assets/mattia_8.svg';
import Mattia9Svg0 from './assets/mattia_9.svg';
import Mattia10Svg0 from './assets/mattia_10.svg';
import Mattia11Svg0 from './assets/mattia_11.svg';
import Mattia12Svg0 from './assets/mattia_12.svg';
import Mattia13Svg0 from './assets/mattia_13.svg';
import Mattia14Svg0 from './assets/mattia_14.svg';
import Mattia15Svg0 from './assets/mattia_15.svg';
import Mattia16Svg0 from './assets/mattia_16.svg';
import Ahmed1Svg0 from './assets/ahmed_1.svg';
import Ahmed2Svg0 from './assets/ahmed_2.svg';
import Ahmed3Svg0 from './assets/ahmed_3.svg';
import Ahmed4Svg0 from './assets/ahmed_4.svg';
import Ahmed5Svg0 from './assets/ahmed_5.svg';
import Ahmed6Svg0 from './assets/ahmed_6.svg';
import Ahmed7Svg0 from './assets/ahmed_7.svg';
import Ahmed8Svg0 from './assets/ahmed_8.svg';
import Ahmed9Svg0 from './assets/ahmed_9.svg';
import Ahmed10Svg0 from './assets/ahmed_10.svg';
import Ahmed11Svg0 from './assets/ahmed_11.svg';
import Ahmed12Svg0 from './assets/ahmed_12.svg';
import Ahmed13Svg0 from './assets/ahmed_13.svg';
import Ahmed14Svg0 from './assets/ahmed_14.svg';
import txtMattia1Svg from './assets/txtMattia1.svg';
import txtMattia2Svg from './assets/txtMattia2.svg';
import txtMattia3Svg from './assets/txtMattia3.svg';
import txtMattia4Svg from './assets/txtMattia4.svg';
import txtMattia5Svg from './assets/txtMattia5.svg';
import txtMattia6Svg from './assets/txtMattia6.svg';
import txtMattia7Svg from './assets/txtMattia7.svg';
import txtMattia8Svg from './assets/txtMattia8.svg';
import txtMattia9Svg from './assets/txtMattia9.svg';
import txtMattia10Svg from './assets/txtMattia10.svg';
import txtMattia11Svg from './assets/txtMattia11.svg';
import txtMattia12Svg from './assets/txtMattia12.svg';
import txtMattia13Svg from './assets/txtMattia13.svg';
import txtMattia14Svg from './assets/txtMattia14.svg';
import txtMattia15Svg from './assets/txtMattia15.svg';
import txtMattia16Svg from './assets/txtMattia16.svg';
import txtAhmed1Svg from './assets/txtAhmed1.svg';
import txtAhmed2Svg from './assets/txtAhmed2.svg';
import txtAhmed3Svg from './assets/txtAhmed3.svg';
import txtAhmed4Svg from './assets/txtAhmed4.svg';
import txtAhmed5Svg from './assets/txtAhmed5.svg';
import txtAhmed6Svg from './assets/txtAhmed6.svg';
import txtAhmed7Svg from './assets/txtAhmed7.svg';
import txtAhmed8Svg from './assets/txtAhmed8.svg';
import txtAhmed9Svg from './assets/txtAhmed9.svg';
import txtAhmed10Svg from './assets/txtAhmed10.svg';
import txtAhmed11Svg from './assets/txtAhmed11.svg';
import txtAhmed12Svg from './assets/txtAhmed12.svg';
import txtAhmed13Svg from './assets/txtAhmed13.svg';
import txtAhmed14Svg from './assets/txtAhmed14.svg';
import nuvolaMattia from './assets/nuvolaMattia.svg';
import nuvolaAhmed from './assets/nuvolaAhmed.svg';

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
    const nuvolaAhmedRef = useRef<HTMLImageElement>(null);
    const nuvolaMattiaRef = useRef<HTMLImageElement>(null);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {


            if (nuvolaAhmedRef.current) {
                const nuvolaAhmedPosition = nuvolaAhmedRef.current.getBoundingClientRect().top;
                if (nuvolaAhmedPosition < 0) {
                    nuvolaAhmedRef.current.style.position = 'fixed';
                    nuvolaAhmedRef.current.style.top = '0vh';
                }
            }

            if (nuvolaMattiaRef.current) {
                const nuvolaMattiaPosition = nuvolaMattiaRef.current.getBoundingClientRect().top;
                if (nuvolaMattiaPosition < 0) {
                    nuvolaMattiaRef.current.style.position = 'fixed';
                    nuvolaMattiaRef.current.style.top = `0vh`;
                }
            }





            // Creo un array con tutti i riferimenti
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




            <img src={nuvoleTitolo} alt="Vite Parallele" className={Classnames(styles.nuvoleTitolo, styles.AnimazioneNuvole)} />
            <img src={titolo} alt="Nuvole Sfondo titolo" className={Classnames(styles.titolo, styles.AnimazioneTitolo)} />
            <img ref={nuvolaAhmedRef} src={nuvolaAhmed} alt="Nuvola Ahmed" className={styles.nuvolaAhmed} />
            <img ref={nuvolaMattiaRef} src={nuvolaMattia} alt="Nuvola Mattia" className={styles.nuvolaMattia} />















        </div>
    );
}

export default App;