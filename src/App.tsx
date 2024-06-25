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
import bg1 from './assets/1-min.png';
import bg2 from './assets/2-min.png';
import bg3 from './assets/3-min.png';
import bg4 from './assets/4-min.png';
import bg5 from './assets/5-min.png';

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

                <img src={bg1} alt="" className={styles.bg_1}/>
                <img src={bg2} alt="" className={styles.bg_1}/>
                <img src={bg3} alt="" className={styles.bg_1}/>
                <img src={bg4} alt="" className={styles.bg_1}/>
                <img src={bg5} alt="" className={styles.bg_2}/>

                <img ref={icon1Ref} src={Mattia1Svg0} alt="" className={styles.icon_1_right} />
                <div
                    ref={text1Ref}
                    className={styles.text_1_right}
                    style={{ display: window.innerWidth >= 600 ? 'flex' : 'none' }}
                >
                    Mattia è nato e cresciuto a Milano, in una famiglia benestante e culturalmente
                    stimolante. Suo padre è un avvocato di successo, mentre sua madre è una eccellente
                    insegnante universitaria molto rispettata. Fin da giovane, Mattia ha avuto accesso a
                    tutte le risorse necessarie ad una educazione eccellente, vivendo in un ambiente che
                    favoriva lo studio e la crescita personale. Il suo sogno di diventare medico era
                    fortemente supportato dai genitori, che vedevano in lui il potenziale per una
                    carriera brillante e di grande soddisfazione personale.
                </div>
                <div
                    ref={text1RefPopup}
                    className={styles.text_1_right}
                    style={{ display: window.innerWidth <= 600 ? 'block' : 'none' }}
                >
                    Mattia è nato e cresciuto a Milano, in una famiglia benestante e culturalmente
                    stimolante. Suo padre è un avvocato di successo, mentre sua madre è una eccellente
                    insegnante universitaria ...
                    <a
                        onClick={() => {
                            alert(
                                'Mattia è nato e cresciuto a Milano, in una famiglia benestante e culturalmente stimolante. Suo padre è un avvocato di successo, mentre sua madre è una eccellente insegnante universitaria molto rispettata.\nFin da giovane, Mattia ha avuto accesso a tutte le risorse necessarie ad una educazione eccellente, vivendo in un ambiente che favoriva lo studio e la crescita personale. Il suo sogno di diventare medico era fortemente supportato dai genitori, che vedevano in lui il potenziale per una carriera brillante e di grande soddisfazione personale.',
                            );
                        }}
                    >
                        {' '}
                        Mostra di più
                    </a>
                </div>

                <img ref={icon2Ref} src={Mattia2Svg0} alt="" className={styles.icon_2_right} />
                <div
                    ref={text2Ref}
                    className={styles.text_2_right}
                    style={{ display: window.innerWidth >= 600 ? 'flex' : 'none' }}
                >
                    Mattia ha frequentato una delle migliori scuole elementari private di Milano, dove
                    ha ricevuto un'educazione di altissima qualità e ha avuto l'opportunità di
                    partecipare a numerose attività extra-curriculari. Sin da piccolo, ha mostrato un
                    grande interesse per la scienza e la medicina, un interesse che i suoi genitori
                    hanno sempre incoraggiato, fornendogli tutto il necessario per coltivare questa
                    passione. Questo ambiente stimolante ha permesso a Mattia di sviluppare competenze e
                    conoscenze che si sono rivelate fondamentali per il suo percorso educativo.
                </div>
                <div
                    ref={text2RefPopup}
                    className={styles.text_2_right}
                    style={{ display: window.innerWidth <= 600 ? 'block' : 'none' }}
                >
                    Mattia ha frequentato una delle migliori scuole elementari private di Milano, dove
                    ha ricevuto un'educazione di altissima qualità e ha avuto l'opportunità ...
                    <a
                        onClick={() => {
                            alert(
                                "Mattia ha frequentato una delle migliori scuole elementari private di Milano, dove ha ricevuto un'educazione di altissima qualità e ha avuto l'opportunità di partecipare a numerose attività extra-curriculari. Sin da piccolo, ha mostrato un grande interesse per la scienza e la medicina, un interesse che i suoi genitori hanno sempre incoraggiato, fornendogli tutto il necessario per coltivare questa passione. Questo ambiente stimolante ha permesso a Mattia di sviluppare competenze e conoscenze che si sono rivelate fondamentali per il suo percorso educativo.",
                            );
                        }}
                    >
                        {' '}
                        Mostra di più
                    </a>
                </div>

                <img ref={icon3Ref} src={Mattia3Svg0} alt="" className={styles.icon_3_right} />

                <div
                    ref={text3Ref}
                    className={styles.text_3_right}
                    style={{ display: window.innerWidth >= 600 ? 'flex' : 'none' }}
                >
                    Ora in quarta elementare, Mattia eccelle in tutte le materie scolastiche e raramente
                    incontra difficoltà nei suoi studi. I suoi genitori sono estremamente orgogliosi dei
                    suoi successi accademici e lo incoraggiano a coltivare anche altre passioni. Grazie
                    al loro supporto, Mattia ha la possibilità di dedicarsi allo sport, in particolare
                    al calcio, un'attività che ama e che pratica con grande entusiasmo.
                </div>
                <div
                    ref={text3RefPopup}
                    className={styles.text_3_right}
                    style={{ display: window.innerWidth <= 600 ? 'block' : 'none' }}
                >
                    Ora in quarta elementare, Mattia eccelle in tutte le materie scolastiche e raramente
                    incontra difficoltà nei suoi studi. I suoi genitori sono estremamente orgogliosi ...
                    <a
                        onClick={() => {
                            alert(
                                "Ora in quarta elementare, Mattia eccelle in tutte le materie scolastiche e raramente incontra difficoltà nei suoi studi. I suoi genitori sono estremamente orgogliosi dei suoi successi accademici e lo incoraggiano a coltivare anche altre passioni. Grazie al loro supporto, Mattia ha la possibilità di dedicarsi allo sport, in particolare al calcio, un'attività che ama e che pratica con grande entusiasmo.",
                            );
                        }}
                    >
                        {' '}
                        Mostra di più
                    </a>
                </div>

                <img ref={icon4Ref} src={Mattia4Svg0} alt="" className={styles.icon_4_right} />
                <div
                    ref={text4Ref}
                    className={styles.text_4_right}
                    style={{ display: window.innerWidth >= 600 ? 'flex' : 'none' }}
                >
                    Mattia non ha difficoltà a livello comunicativo e sociale; è amico di tutti i
                    bambini nella sua classe e spesso li frequenta anche fuori dall’ambiente scolastico.
                    Gli piace incontrarsi con loro al parco o alle feste di compleanno, momenti in cui
                    anche i genitori si riuniscono, creando un'atmosfera di comunità e supporto
                    reciproco. Questo rende Mattia un bambino molto ben integrato e sereno.
                </div>
                <div
                    ref={text4RefPopup}
                    className={styles.text_4_right}
                    style={{ display: window.innerWidth <= 600 ? 'block' : 'none' }}
                >
                    Mattia non ha difficoltà a livello comunicativo e sociale; è amico di tutti i
                    bambini nella sua classe e spesso li frequenta anche fuori dall’ambiente scolastico.
                    Gli piace incontrarsi con ...
                    <a
                        onClick={() => {
                            alert(
                                "Mattia non ha difficoltà a livello comunicativo e sociale; è amico di tutti i bambini nella sua classe e spesso li frequenta anche fuori dall’ambiente scolastico. Gli piace incontrarsi con loro al parco o alle feste di compleanno, momenti in cui anche i genitori si riuniscono, creando un'atmosfera di comunità e supporto reciproco. Questo rende Mattia un bambino molto ben integrato e sereno.",
                            );
                        }}
                    >
                        {' '}
                        Mostra di più
                    </a>
                </div>


        
            <div className={styles.bg_2}>


                <img ref={icon5Ref} src={Mattia5Svg0} alt="" className={styles.icon_5_right} />
                <div
                    ref={text5Ref}
                    className={styles.text_5_right}
                    style={{ display: window.innerWidth >= 600 ? 'flex' : 'none' }}
                >
                    I suoi genitori sono molto presenti nella sua vita quotidiana e, grazie alla loro
                    istruzione, riescono ad aiutarlo nei compiti a casa e a relazionarsi efficacemente
                    con insegnanti e altri genitori. Questo sostegno continuo e competente ha un impatto
                    positivo sulla sua esperienza scolastica, rendendola più ricca e meno stressante.
                </div>
                <div
                    ref={text5RefPopup}
                    className={styles.text_5_right}
                    style={{ display: window.innerWidth <= 600 ? 'block' : 'none' }}
                >
                    I suoi genitori sono molto presenti nella sua vita quotidiana e, grazie alla loro
                    istruzione, riescono ad aiutarlo nei compiti a casa e a relazionarsi efficacemente
                    con insegnanti e altri ...
                    <a
                        onClick={() => {
                            alert(
                                'I suoi genitori sono molto presenti nella sua vita quotidiana e, grazie alla loro istruzione, riescono ad aiutarlo nei compiti a casa e a relazionarsi efficacemente con insegnanti e altri genitori. Questo sostegno continuo e competente ha un impatto positivo sulla sua esperienza scolastica, rendendola più ricca e meno stressante.',
                            );
                        }}
                    >
                        {' '}
                        Mostra di più
                    </a>
                </div>

                <img ref={icon6Ref} src={Mattia6Svg0} alt="" className={styles.icon_6_right} />
                <div
                    ref={text6Ref}
                    className={styles.text_6_right}
                    style={{ display: window.innerWidth >= 600 ? 'flex' : 'none' }}
                >
                    Il passaggio dalle scuole elementari alle scuole medie non ha rappresentato un
                    problema significativo per Mattia. Anzi, durante le medie, ha potuto approfondire il
                    suo interesse per le materie scientifiche, trovando un gruppo di ragazzi con
                    interessi simili ai suoi con cui condividere pensieri e progetti. Questa rete di
                    amici e il continuo supporto familiare hanno contribuito a far crescere la sua
                    passione per la scienza.
                </div>
                <div
                    ref={text6RefPopup}
                    className={styles.text_6_right}
                    style={{ display: window.innerWidth <= 600 ? 'block' : 'none' }}
                >
                    Il passaggio dalle scuole elementari alle scuole medie non ha rappresentato un
                    problema significativo per Mattia. Anzi, durante le medie, ha potuto approfondire il
                    suo interesse per le materie scientifiche, trovando un gruppo di ragazzi con
                    interessi simili ai suoi con cui ...
                    <a
                        onClick={() => {
                            alert(
                                'Il passaggio dalle scuole elementari alle scuole medie non ha rappresentato un problema significativo per Mattia. Anzi, durante le medie, ha potuto approfondire il suo interesse per le materie scientifiche, trovando un gruppo di ragazzi con interessi simili ai suoi con cui condividere pensieri e progetti. Questa rete di amici e il continuo supporto familiare hanno contribuito a far crescere la sua passione per la scienza.',
                            );
                        }}
                    >
                        {' '}
                        Mostra di più
                    </a>
                </div>

                <img ref={icon7Ref} src={Mattia7Svg0} alt="" className={styles.icon_7_right} />
                <div
                    ref={text7Ref}
                    className={styles.text_7_right}
                    style={{ display: window.innerWidth >= 600 ? 'flex' : 'none' }}
                >
                    In terza media, Mattia ha partecipato a diversi open day e ha scelto infine di
                    iscriversi al liceo scientifico. Ha affrontato l’esame di stato con grande impegno,
                    ottenendo un ottimo voto che lo ha reso fiero dei suoi risultati e pronto per
                    iniziare la nuova avventura liceale. Questa nuova fase rappresenta per lui un
                    ulteriore passo verso il sogno di diventare medico, un sogno che coltiva con
                    determinazione e passione.
                </div>
                <div
                    ref={text7RefPopup}
                    className={styles.text_7_right}
                    style={{ display: window.innerWidth <= 600 ? 'block' : 'none' }}
                >
                    In terza media, Mattia ha partecipato a diversi open day e ha scelto infine di
                    iscriversi al liceo scientifico. Ha affrontato l’esame di stato con grande impegno,
                    ottenendo un ottimo voto che lo ha reso fiero dei suoi risultati e pronto per...
                    <a
                        onClick={() => {
                            alert(
                                'In terza media, Mattia ha partecipato a diversi open day e ha scelto infine di iscriversi al liceo scientifico. Ha affrontato l’esame di stato con grande impegno, ottenendo un ottimo voto che lo ha reso fiero dei suoi risultati e pronto per iniziare la nuova avventura liceale. Questa nuova fase rappresenta per lui un ulteriore passo verso il sogno di diventare medico, un sogno che coltiva con determinazione e passione.',
                            );
                        }}
                    >
                        {' '}
                        Mostra di più
                    </a>
                </div>




            </div>










        </div>
    );
}

export default App;
