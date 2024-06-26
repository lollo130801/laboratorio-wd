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
    const mattia1Ref = useRef<HTMLImageElement>(null);
    const mattia2Ref = useRef<HTMLImageElement>(null);
    const mattia3Ref = useRef<HTMLImageElement>(null);
    const mattia4Ref = useRef<HTMLImageElement>(null);
    const mattia5Ref = useRef<HTMLImageElement>(null);
    const mattia6Ref = useRef<HTMLImageElement>(null);
    const mattia7Ref = useRef<HTMLImageElement>(null);
    const mattia8Ref = useRef<HTMLImageElement>(null);
    const mattia9Ref = useRef<HTMLImageElement>(null);
    const mattia10Ref = useRef<HTMLImageElement>(null);
    const mattia11Ref = useRef<HTMLImageElement>(null);
    const mattia12Ref = useRef<HTMLImageElement>(null);
    const mattia13Ref = useRef<HTMLImageElement>(null);
    const mattia14Ref = useRef<HTMLImageElement>(null);
    const mattia15Ref = useRef<HTMLImageElement>(null);
    const mattia16Ref = useRef<HTMLImageElement>(null);
    const mattiatext1Ref = useRef<HTMLImageElement>(null);
    const mattiatext2Ref = useRef<HTMLImageElement>(null);
    const mattiatext3Ref = useRef<HTMLImageElement>(null);
    const mattiatext4Ref = useRef<HTMLImageElement>(null);
    const mattiatext5Ref = useRef<HTMLImageElement>(null);
    const mattiatext6Ref = useRef<HTMLImageElement>(null);
    const mattiatext7Ref = useRef<HTMLImageElement>(null);
    const mattiatext8Ref = useRef<HTMLImageElement>(null);
    const mattiatext9Ref = useRef<HTMLImageElement>(null);
    const mattiatext10Ref = useRef<HTMLImageElement>(null);
    const mattiatext11Ref = useRef<HTMLImageElement>(null);
    const mattiatext12Ref = useRef<HTMLImageElement>(null);
    const mattiatext13Ref = useRef<HTMLImageElement>(null);
    const mattiatext14Ref = useRef<HTMLImageElement>(null);
    const mattiatext15Ref = useRef<HTMLImageElement>(null);
    const mattiatext16Ref = useRef<HTMLImageElement>(null);
  

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const iconsleft = [mattia1Ref, mattia2Ref, mattia3Ref, mattia4Ref, mattia5Ref, mattia6Ref, mattia7Ref, mattia8Ref, mattia9Ref, mattia10Ref, mattia11Ref, mattia12Ref, mattia13Ref, mattia14Ref, mattia15Ref, mattia16Ref];
            const text = [ mattiatext1Ref, mattiatext2Ref, mattiatext3Ref, mattiatext4Ref, mattiatext5Ref, mattiatext6Ref, mattiatext7Ref, mattiatext8Ref, mattiatext9Ref, mattiatext10Ref, mattiatext11Ref, mattiatext12Ref, mattiatext13Ref, mattiatext14Ref, mattiatext15Ref, mattiatext16Ref];

            // Controllo se l'elemento è visibile
            iconsleft.forEach((iconRef) => {
                if (iconRef.current) {
                    var iconPosition = iconRef.current.getBoundingClientRect().top;
                    var windowHeight = window.innerHeight;
                    var windowCenter = windowHeight;
                    if (iconPosition < windowCenter) {
                        // Se l'icona supera il centro dello schermo aggiungo la classe per l'animazione
                        iconRef.current.classList.add(styles['slide-in-left']);
                    } else {
                        // Altrimenti rimuovo la classe
                        iconRef.current.classList.remove(styles['slide-in-left']);
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

                <img ref={mattia1Ref} src={Mattia1Svg0} alt="" className={styles.icon_1_left} />
                <img ref={mattiatext1Ref} src={txtMattia1Svg} alt="" className={styles.text_1_left} />
                
                <img ref={mattia2Ref} src={Mattia2Svg0} alt="" className={styles.icon_2_left} />
                <img ref={mattiatext2Ref} src={txtMattia2Svg} alt="" className={styles.text_2_left} />

                <img ref={mattia3Ref} src={Mattia3Svg0} alt="" className={styles.icon_3_left} />
                <img ref={mattiatext3Ref} src={txtMattia3Svg} alt="" className={styles.text_3_left} />

                <img ref={mattia4Ref} src={Mattia4Svg0} alt="" className={styles.icon_4_left} />
                <img ref={mattiatext4Ref} src={txtMattia4Svg} alt="" className={styles.text_4_left} />

                <img ref={mattia5Ref} src={Mattia5Svg0} alt="" className={styles.icon_5_left} />
                <img ref={mattiatext5Ref} src={txtMattia5Svg} alt="" className={styles.text_5_left} />

                <img ref={mattia6Ref} src={Mattia6Svg0} alt="" className={styles.icon_6_left} />
                <img ref={mattiatext6Ref} src={txtMattia6Svg} alt="" className={styles.text_6_left} />

                <img ref={mattia7Ref} src={Mattia7Svg0} alt="" className={styles.icon_7_left} />
                <img ref={mattiatext7Ref} src={txtMattia7Svg} alt="" className={styles.text_7_left} />

                <img ref={mattia8Ref} src={Mattia8Svg0} alt="" className={styles.icon_8_left} />
                <img ref={mattiatext8Ref} src={txtMattia8Svg} alt="" className={styles.text_8_left} />

                <img ref={mattia9Ref} src={Mattia9Svg0} alt="" className={styles.icon_9_left} />
                <img ref={mattiatext9Ref} src={txtMattia9Svg} alt="" className={styles.text_9_left} />

                <img ref={mattia10Ref} src={Mattia10Svg0} alt="" className={styles.icon_10_left} />
                <img ref={mattiatext10Ref} src={txtMattia10Svg} alt="" className={styles.text_10_left} />

                <img ref={mattia11Ref} src={Mattia11Svg0} alt="" className={styles.icon_11_left} />
                <img ref={mattiatext11Ref} src={txtMattia11Svg} alt="" className={styles.text_11_left} />

                <img ref={mattia12Ref} src={Mattia12Svg0} alt="" className={styles.icon_12_left} />
                <img ref={mattiatext12Ref} src={txtMattia12Svg} alt="" className={styles.text_12_left} />

                <img ref={mattia13Ref} src={Mattia13Svg0} alt="" className={styles.icon_13_left} />
                <img ref={mattiatext13Ref} src={txtMattia13Svg} alt="" className={styles.text_13_left} />

                <img ref={mattia14Ref} src={Mattia14Svg0} alt="" className={styles.icon_14_left} />
                <img ref={mattiatext14Ref} src={txtMattia14Svg} alt="" className={styles.text_14_left} />

                <img ref={mattia15Ref} src={Mattia15Svg0} alt="" className={styles.icon_15_left} />
                <img ref={mattiatext15Ref} src={txtMattia15Svg} alt="" className={styles.text_15_left} />

                <img ref={mattia16Ref} src={Mattia16Svg0} alt="" className={styles.icon_16_left} />
                <img ref={mattiatext16Ref} src={txtMattia16Svg} alt="" className={styles.text_16_left} />
           
            <img src={bg1} alt="" className={styles.bg_1} />
            <img src={bg2} alt="" className={styles.bg_1} />
            <img src={bg3} alt="" className={styles.bg_1} />
            <img src={bg4} alt="" className={styles.bg_1} />
            <img src={bg5} alt="" className={styles.bg_2} />

            

            <img src={nuvoleTitolo} alt="Vite Parallele" className={Classnames(styles.nuvoleTitolo, styles.AnimazioneNuvole)}/>
            <img src={titolo} alt="Nuvole Sfondo titolo" className={Classnames(styles.titolo, styles.AnimazioneTitolo)}/>


        </div>
    );
}

export default App;