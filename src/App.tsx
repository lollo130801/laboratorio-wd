import React, { useEffect, useRef } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import Mattia1Svg0 from './assets/mattia_1.svg';
import Mattia2Svg0 from './assets/mattia_2.svg';
import BasePng from './assets/base.png';

function App() {
    const icon1Ref = useRef(null);
    const icon2Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['slide-in-right']);
                } else {
                    entry.target.classList.remove(styles['slide-in-right']);
                }
            });
        });

        if (icon1Ref.current) {
            observer.observe(icon1Ref.current);
        }

        if (icon2Ref.current) {
            observer.observe(icon2Ref.current);
        }

        return () => {
            if (icon1Ref.current) {
                observer.unobserve(icon1Ref.current);
            }

            if (icon2Ref.current) {
                observer.unobserve(icon2Ref.current);
            }
        };
    }, []);

    return (
        <div className={styles.App}>
            
                <img ref={icon2Ref} src={Mattia1Svg0} alt="" className={styles.icon_1_right} />
                <div className={styles.text_1_right}>
                Mattia è nato e cresciuto a Milano, in una famiglia benestante e culturalmente
                stimolante. Suo padre è un avvocato di successo, mentre sua madre è
                una eccellente insegnante universitaria molto rispettata. Fin da giovane, Mattia ha avuto
                accesso a tutte le risorse necessarie ad una educazione eccellente, vivendo in
                un ambiente che favoriva lo studio e la crescita personale. Il suo sogno di
                diventare medico era fortemente supportato dai genitori, che vedevano in lui il
                potenziale per una carriera brillante e di grande soddisfazione personale.
                </div>
            <div>
                <img ref={icon1Ref} src={Mattia2Svg0} alt="" className={styles.icon_2_right} />
                <div className={styles.text_2_right}>
                    Mattia ha frequentato una delle migliori scuole elementari private di Milano, dove ha ricevuto
                    un'educazione di altissima qualità e ha avuto l'opportunità di partecipare a numerose attività
                    extra-curriculari. Sin da piccolo, ha mostrato un grande interesse per la scienza e la medicina, un
                    interesse che i suoi genitori hanno sempre incoraggiato, fornendogli tutto il necessario per
                    coltivare questa passione. Questo ambiente stimolante ha permesso a Mattia di sviluppare
                    competenze e conoscenze che si sono rivelate fondamentali per il suo percorso educativo.
                </div>
            </div>
            <img src={BasePng} alt="" className={styles.img} />
            
        </div>
    );
}

export default App;
