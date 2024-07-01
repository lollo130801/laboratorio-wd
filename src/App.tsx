import React, { useEffect, useRef } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import bg1 from './assets/1.png';
import bg2 from './assets/2.png';
import bg3 from './assets/3.png';
import bg4 from './assets/4.png';
import bg5 from './assets/5.png';
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
import iconZoom from './assets/icon_zoom.gif';
import appBoard from './_codux/boards/app/app.board';

type InitialPositions = {
    ahmed: number;
    mattia: number;
};

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

    const Ahmed1Ref = useRef<HTMLImageElement>(null);
    const Ahmed2Ref = useRef<HTMLImageElement>(null);
    const Ahmed3Ref = useRef<HTMLImageElement>(null);
    const Ahmed4Ref = useRef<HTMLImageElement>(null);
    const Ahmed5Ref = useRef<HTMLImageElement>(null);
    const Ahmed6Ref = useRef<HTMLImageElement>(null);
    const Ahmed7Ref = useRef<HTMLImageElement>(null);
    const Ahmed8Ref = useRef<HTMLImageElement>(null);
    const Ahmed9Ref = useRef<HTMLImageElement>(null);
    const Ahmed10Ref = useRef<HTMLImageElement>(null);
    const Ahmed11Ref = useRef<HTMLImageElement>(null);
    const Ahmed12Ref = useRef<HTMLImageElement>(null);
    const Ahmed13Ref = useRef<HTMLImageElement>(null);
    const Ahmed14Ref = useRef<HTMLImageElement>(null);

    const AhmedText1Ref = useRef<HTMLImageElement>(null);
    const AhmedText2Ref = useRef<HTMLImageElement>(null);
    const AhmedText3Ref = useRef<HTMLImageElement>(null);
    const AhmedText4Ref = useRef<HTMLImageElement>(null);
    const AhmedText5Ref = useRef<HTMLImageElement>(null);
    const AhmedText6Ref = useRef<HTMLImageElement>(null);
    const AhmedText7Ref = useRef<HTMLImageElement>(null);
    const AhmedText8Ref = useRef<HTMLImageElement>(null);
    const AhmedText9Ref = useRef<HTMLImageElement>(null);
    const AhmedText10Ref = useRef<HTMLImageElement>(null);
    const AhmedText11Ref = useRef<HTMLImageElement>(null);
    const AhmedText12Ref = useRef<HTMLImageElement>(null);
    const AhmedText13Ref = useRef<HTMLImageElement>(null);
    const AhmedText14Ref = useRef<HTMLImageElement>(null);
    
    const nuvolaAhmedRef = useRef<HTMLImageElement>(null);
    const nuvolaMattiaRef = useRef<HTMLImageElement>(null);
    const initialPositionsRef = useRef<InitialPositions>({ ahmed: 0, mattia: 0 });
   
    const appRef = useRef<HTMLDivElement>(null);
    const sfondoAvvisoZoom = useRef<HTMLDivElement>(null);
    const iconZoomImmagine = useRef<HTMLImageElement>(null);

    // Add scroll event listener
    useEffect(() => {
        if (nuvolaAhmedRef.current && nuvolaMattiaRef.current) {
            initialPositionsRef.current = {
                ahmed: nuvolaAhmedRef.current.getBoundingClientRect().top + window.scrollY,
                mattia: nuvolaMattiaRef.current.getBoundingClientRect().top + window.scrollY,
            };
        }

        const buffer = 5;

        const handleScroll = () => {
            const iconsleft = [mattia1Ref, mattia2Ref, mattia3Ref, mattia4Ref, mattia5Ref, mattia6Ref, mattia7Ref, mattia8Ref, mattia9Ref, mattia10Ref, mattia11Ref, mattia12Ref, mattia13Ref, mattia14Ref, mattia15Ref, mattia16Ref];
            const iconsright = [Ahmed1Ref, Ahmed2Ref, Ahmed3Ref, Ahmed4Ref, Ahmed5Ref, Ahmed6Ref, Ahmed7Ref, Ahmed8Ref, Ahmed9Ref, Ahmed10Ref, Ahmed11Ref, Ahmed12Ref, Ahmed13Ref, Ahmed14Ref];
            const text = [ mattiatext1Ref, mattiatext2Ref, mattiatext3Ref, mattiatext4Ref, mattiatext5Ref, mattiatext6Ref, mattiatext7Ref, mattiatext8Ref,
                            mattiatext9Ref, mattiatext10Ref, mattiatext11Ref, mattiatext12Ref, mattiatext13Ref, mattiatext14Ref, mattiatext15Ref, mattiatext16Ref,
                            AhmedText1Ref, AhmedText2Ref, AhmedText3Ref, AhmedText4Ref, AhmedText5Ref, AhmedText6Ref, AhmedText7Ref, AhmedText8Ref, AhmedText9Ref,
                            AhmedText10Ref, AhmedText11Ref, AhmedText12Ref, AhmedText13Ref, AhmedText14Ref];

            // Controllo Animazione Nuvole Ahmed e Mattia
            const scrollY = window.scrollY;

            if (nuvolaAhmedRef.current) {
                const initialAhmedPosition = initialPositionsRef.current.ahmed;
                const ahmedRect = nuvolaAhmedRef.current.getBoundingClientRect();

                if (ahmedRect.top < window.innerHeight && ahmedRect.top >= 0) {
                    nuvolaAhmedRef.current.classList.add(styles['Nuvola-in-right-Animazione']);
                }

                if (scrollY > initialAhmedPosition - buffer) {
                    nuvolaAhmedRef.current.style.position = 'fixed';
                    nuvolaAhmedRef.current.style.top = '0vw';
                } else {
                    nuvolaAhmedRef.current.style.position = 'absolute';
                    nuvolaAhmedRef.current.style.top = `${initialAhmedPosition}px`;
                }
            }

            if (nuvolaMattiaRef.current) {
                const initialMattiaPosition = initialPositionsRef.current.mattia;
                const mattiaRect = nuvolaMattiaRef.current.getBoundingClientRect();

                if (mattiaRect.top < window.innerHeight && mattiaRect.top >= 0) {
                    nuvolaMattiaRef.current.classList.add(styles['Nuvola-in-left-Animazione']);
                }

                if (scrollY > initialMattiaPosition - buffer) {
                    nuvolaMattiaRef.current.style.position = 'fixed';
                    nuvolaMattiaRef.current.style.top = '0vw';
                } else {
                    nuvolaMattiaRef.current.style.position = 'absolute';
                    nuvolaMattiaRef.current.style.top = `${initialMattiaPosition}px`;
                }
            }

            // Animazioni Icone Left
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
            
            // Animazioni Icone Right
            iconsright.forEach((iconRef) => {
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

            // Controllo Animazione Testo
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
        handleScroll();



        const addZoomWarningClasses = () => {
        
            if (sfondoAvvisoZoom.current && iconZoomImmagine.current) {
                sfondoAvvisoZoom.current.classList.add(styles.bloccoAvvisoZoom);
                iconZoomImmagine.current.classList.add(styles.iconZoom);
                iconZoomImmagine.current.classList.add(styles['scale-in-top']);
        
                setTimeout(() => {
                    if (sfondoAvvisoZoom.current && iconZoomImmagine.current) {
                        sfondoAvvisoZoom.current.classList.remove(styles.bloccoAvvisoZoom);
                        if (appRef.current) {
                            Array.from(appRef.current.childNodes).forEach((childNode) => {
                                if (childNode === sfondoAvvisoZoom.current || childNode === iconZoomImmagine.current) {
                                    childNode.remove();
        
                                }
                            });
                        }
                    }
                }, 3000);
            }
            
            
        
        };

        // Aggiunge le classi dopo 5 secondi
        setTimeout(addZoomWarningClasses, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={appRef} className={Classnames(styles.App)}>
                <img src={bg1} alt="Primo background" className={styles.bg_1} />
                <img src={bg2} alt="Secondo background" className={styles.bg_1} />
                <img src={bg3} alt="Terzo background" className={styles.bg_1} />
                <img src={bg4} alt="Quarto background" className={styles.bg_1} />
                <img src={bg5} alt="Quinto background" className={styles.bg_2} />

                
                <div ref={sfondoAvvisoZoom}></div>
                <img ref={iconZoomImmagine} src={iconZoom} alt="Animazione dita che fanno zoom-in"/>

                <img src={nuvoleTitolo} alt="Vite Parallele" className={Classnames(styles.nuvoleTitolo, styles.AnimazioneNuvole)} />
                <img src={titolo} alt="Nuvole Sfondo titolo" className={Classnames(styles.titolo, styles.AnimazioneTitolo)} />
                <img ref={nuvolaAhmedRef} src={nuvolaAhmed} alt="Nuvola Ahmed" className={styles.nuvolaAhmed} />
                <img ref={nuvolaMattiaRef} src={nuvolaMattia} alt="Nuvola Mattia" className={styles.nuvolaMattia} />



                <div className={styles.icon_text_container_left_1}>            
                    <img ref={mattia1Ref} src={Mattia1Svg0} alt="Mattia mano nella mano con i suoi genitori" className={styles.icon_1_left} />
                    <img ref={mattiatext1Ref} src={txtMattia1Svg} alt="Descrizione che accompagna l'immagine precedente: Mattia cresce a Milano in una famiglia
                                                                    benestante e serena. Suo padre è un
                                                                    avvocato di successo, sua madre una
                                                                    stimata professoressa universitaria.
                                                                    I suoi genitori non gli fanno mai mancare
                                                                    niente, viziandolo ogni tanto." className={styles.text_1_left} />
                </div>
                
                <div className={styles.icon_text_container_left_2}>              
                <img ref={mattia2Ref} src={Mattia2Svg0} alt="Mattia che studia un libro di scienza" className={styles.icon_2_left} />
                <img ref={mattiatext2Ref} src={txtMattia2Svg} alt="Descrizione che accompagna l'immagine precedente: Mattia frequenta una delle migliori scuole
                                                                    private di Milano, ricevendo un'ottima
                                                                    educazione e partecipando a tante attività
                                                                    extra-curriculari.
                                                                    Ama molto la scienza e sogna di diventare
                                                                    medico." className={styles.text_2_left} />
                </div>

                <div className={styles.icon_text_container_left_3}>
                <img ref={mattia3Ref} src={Mattia3Svg0} alt="Mattia mentre gioca a calcio" className={styles.icon_3_left} />
                <img ref={mattiatext3Ref} src={txtMattia3Svg} alt="Descrizione che accompagna l'immagine precedente: Ora in quarta elementare, Mattia è bravissimo
                                                                    in tutte le materie e ha pochi problemi a
                                                                    scuola. I suoi genitori sono molto orgogliosi e
                                                                    grazie al loro supporto, può giocare a calcio,
                                                                    sport che ama tantissimo." className={styles.text_3_left} />
                </div>

                <div className={styles.icon_text_container_left_4}>
                <img ref={mattia4Ref} src={Mattia4Svg0} alt="Mattia al parco con i suoi genitori e gioca felicemente con altri bambini" className={styles.icon_4_left} />
                <img ref={mattiatext4Ref} src={txtMattia4Svg} alt="Descrizione che accompagna l'immagine precedente: Mattia è amico di tutti in classe e li vede
                                                                    spesso anche fuori scuola.
                                                                    Si diverte spesso al parco e alle feste di
                                                                    compleanno, dove anche i genitori si
                                                                    riuniscono." className={styles.text_4_left} />
                </div>
                
                <div className={styles.icon_text_container_left_5}>
                <img ref={mattia5Ref} src={Mattia5Svg0} alt="Mattia viene aiutato dai suoi genitori coi compiti" className={styles.icon_5_left} />
                <img ref={mattiatext5Ref} src={txtMattia5Svg} alt="Descrizione che accompagna l'immagine precedente: I suoi genitori sono sempre presenti,
                                                                    aiutandolo coi compiti. Mattia vive la sua
                                                                    esperienza scolastica con serenità, perché
                                                                    anche davanti alle difficoltà è consapevole di
                                                                    avere il supporto dei genitori." className={styles.text_5_left} />
                </div>

                <div className={styles.icon_text_container_left_6}>
                <img ref={mattia6Ref} src={Mattia6Svg0} alt="Mattia fa amicizia con altri bambini" className={styles.icon_6_left} />
                <img ref={mattiatext6Ref} src={txtMattia6Svg} alt="Descrizione che accompagna l'immagine precedente: Il passaggio dalle elementari alle medie è
                                                                    stato semplice per Mattia.
                                                                    In questo periodo esplora le materie
                                                                    scientifiche e stringe tante amicizie." className={styles.text_6_left} />
                </div>

                <div className={styles.icon_text_container_left_7}>
                <img ref={mattia7Ref} src={Mattia7Svg0} alt="Mattia riceve un ottimo voto" className={styles.icon_7_left} />
                <img ref={mattiatext7Ref} src={txtMattia7Svg} alt="Descrizione che accompagna l'immagine precedente: In terza media, Mattia visita diversi open day
                                                                    ed è sicuro di volersi iscrivere al liceo
                                                                    scientifico. Affronta l'esame di stato con
                                                                    impegno, ottenendo un ottimo voto che lo
                                                                    rende fiero dei suoi risultati e pronto per
                                                                    iniziare il liceo." className={styles.text_7_left} />
                </div>

                <div className={styles.icon_text_container_left_8}>
                <img ref={mattia8Ref} src={Mattia8Svg0} alt="Mattia è triste perchè ha difficoltà ad ambientarsi al liceo" className={styles.icon_8_left} />
                <img ref={mattiatext8Ref} src={txtMattia8Svg} alt="Descrizione che accompagna l'immagine precedente: Mattia inizia il liceo e ha qualche difficoltà a
                                                                    socializzare con i compagni e ad ambientarsi,
                                                                    soprattutto perché gli insegnanti chiedono
                                                                    tanto impegno a tutti gli studenti." className={styles.text_8_left} />
                </div>

                <div className={styles.icon_text_container_left_9}>
                <img ref={mattia9Ref} src={Mattia9Svg0} alt="Mattia gioca a bowling con amici" className={styles.icon_9_left} />
                <img ref={mattiatext9Ref} src={txtMattia9Svg} alt="Descrizione che accompagna l'immagine precedente: In poco tempo stringe una grande amicizia
                                                                    con alcuni compagni di classe e li frequenta
                                                                    anche fuori dalla scuola, riuscendo a gestire
                                                                    bene il tempo tra amicizie e studio." className={styles.text_9_left} />
                </div>

                <div className={styles.icon_text_container_left_10}>
                <img ref={mattia10Ref} src={Mattia10Svg0} alt="Mattia e i suoi premi di studio vinti a scuola" className={styles.icon_10_left} />
                <img ref={mattiatext10Ref} src={txtMattia10Svg} alt="Descrizione che accompagna l'immagine precedente: Nel terzo anno di Liceo Scientifico, Mattia
                                                                    comincia a partecipare a varie Olimpiadi
                                                                    Scientifiche, portandosi a casa premi e
                                                                    riconoscimenti." className={styles.text_10_left} />
                </div>

                <div className={styles.icon_text_container_left_11}>
                <img ref={mattia11Ref} src={Mattia11Svg0} alt="Mattia si prepara per il test di medicina" className={styles.icon_11_left} />
                <img ref={mattiatext11Ref} src={txtMattia11Svg} alt="Descrizione che accompagna l'immagine precedente: Mattia ha iniziato a prepararsi per il test di
                                                                    ammissione a Medicina già all'inizio dell'ultimo
                                                                    anno scolastico, partecipando a corsi extra
                                                                    pomeridiani per assicurarsi un posto nella sua
                                                                    università dei sogni." className={styles.text_11_left} />
                </div>

                <div className={styles.icon_text_container_left_12}>
                <img ref={mattia12Ref} src={Mattia12Svg0} alt="Mattia in una nuova città" className={styles.icon_12_left} />
                <img ref={mattiatext12Ref} src={txtMattia12Svg} alt="Descrizione che accompagna l'immagine precedente: L'università è lontana da casa: trova quindi un
                                                                    appartamento in affitto molto vicino alla
                                                                    scuola. I suoi genitori lo sostengono
                                                                    economicamente per tutto il periodo
                                                                    universitario e non ha bisogno di cercare un
                                                                    lavoro." className={styles.text_12_left} />
                </div>

                <div className={styles.icon_text_container_left_13}>
                <img ref={mattia13Ref} src={Mattia13Svg0} alt="Mattia che inizia ad andare a feste e fare nuove amicizie all'università" className={styles.icon_13_left} />
                <img ref={mattiatext13Ref} src={txtMattia13Svg} alt="Descrizione che accompagna l'immagine precedente: Al secondo anno di università, amplia il suo
                                                                    gruppo di amici e durante il tempo libero
                                                                    partecipa a feste, aperitivi e cene insieme
                                                                    a loro." className={styles.text_13_left} />
                </div>

                <div className={styles.icon_text_container_left_14}>
                <img ref={mattia14Ref} src={Mattia14Svg0} alt="Mattia si laurea in medicina" className={styles.icon_14_left} />
                <img ref={mattiatext14Ref} src={txtMattia14Svg} alt="Descrizione che accompagna l'immagine precedente: Dopo 6 anni, Mattia si laurea in Medicina in
                                                                    tempo e decide di specializzarsi in cardiologia,
                                                                    un campo che lo ha sempre affascinato." className={styles.text_14_left} />
                </div>

                <div className={styles.icon_text_container_left_15}>
                <img ref={mattia15Ref} src={Mattia15Svg0} alt="Mattia che partecipa ad una conferenza sul computer" className={styles.icon_15_left} />
                <img ref={mattiatext15Ref} src={txtMattia15Svg} alt="Descrizione che accompagna l'immagine precedente: Mattia partecipa a conferenze internazionali,
                                                                    ha pubblicazioni su riviste scientifiche e
                                                                    contribuisce a ricerche cruciali sulle malattie
                                                                    cardiache. Affronta le sfide con il supporto
                                                                    costante della famiglia e accesso a risorse
                                                                    finanziarie e accademiche." className={styles.text_15_left} />
                </div>

                <div className={styles.icon_text_container_left_16}>
                <img ref={mattia16Ref} src={Mattia16Svg0} alt="Mattia con nello sfondo l'ospedale dove lavora" className={styles.icon_16_left} />
                <img ref={mattiatext16Ref} src={txtMattia16Svg} alt="Descrizione che accompagna l'immagine precedente: Mattia è diventato un cardiologo di successo
                                                                    e lavora in un ospedale rinomato.
                                                                    Partecipa a importanti ricerche sulle malattie
                                                                    cardiache, pubblica articoli scientifici e tiene
                                                                    conferenze internazionali, guadagnandosi
                                                                    grande rispetto nella comunità medica." className={styles.text_16_left} />
                </div>
                
                <div className={styles.icon_text_container_right_1}>
                <img ref={Ahmed1Ref} src={Ahmed1Svg0} alt="Ahmed con i suoi genitori da piccolo in Marocco" className={styles.icon_1_right} />
                <img ref={AhmedText1Ref} src={txtAhmed1Svg} alt="Descrizione che accompagna l'immagine precedente: Ahmed è nato in una piccola città del
                                                                    Marocco, in una famiglia modesta. Suo padre
                                                                    è un agricoltore e sua madre una casalinga.
                                                                    Nonostante le risorse limitate, la sua famiglia
                                                                    sacrifica molto cercando di non fargli
                                                                    mancare nulla." className={styles.text_1_right} />
                </div>

                <div className={styles.icon_text_container_right_2}>
                <img ref={Ahmed2Ref} src={Ahmed2Svg0} alt="Ahmed che sogna di essere medico da piccolo" className={styles.icon_2_right} />
                <img ref={AhmedText2Ref} src={txtAhmed2Svg} alt="Descrizione che accompagna l'immagine precedente: Durante la scuola elementare, Ahmed si
                                                                    distingue per la sua intelligenza e
                                                                    determinazione. Fin da piccolo ha un sogno
                                                                    chiaro: diventare medico." className={styles.text_2_right} />
                </div>

                <div className={styles.icon_text_container_right_3}>
                <img ref={Ahmed3Ref} src={Ahmed3Svg0} alt="Ahmed che si trasferisce in Italia con i suoi genitori" className={styles.icon_3_right} />
                <img ref={AhmedText3Ref} src={txtAhmed3Svg} alt="Descrizione che accompagna l'immagine precedente: A 9 anni, la famiglia di Ahmed decide di
                                                                    emigrare dal Marocco per cercare migliori
                                                                    opportunità.
                                                                    Purtroppo la burocrazia italiana per
                                                                    l'immigrazione è spesso scoraggiante." className={styles.text_3_right} />
                </div>

                <div className={styles.icon_text_container_right_4}>
                <img ref={Ahmed4Ref} src={Ahmed4Svg0} alt="Ahmed inizia la scuola ed è il più grande tra i suoi compagni" className={styles.icon_4_right} />
                <img ref={AhmedText4Ref} src={txtAhmed4Svg} alt="Descrizione che accompagna l'immagine precedente: Ahmed non conosce la lingua italiana, per
                                                                    questo viene iscritto alla seconda elementare
                                                                    anziché alla quarta per facilitare il suo
                                                                    nserimento nel nuovo ambiente." className={styles.text_4_right} />
                </div>

                <div className={styles.icon_text_container_right_5}>
                <img ref={Ahmed5Ref} src={Ahmed5Svg0} alt="Ahmed che ha difficoltà a studiare" className={styles.icon_5_right} />
                <img ref={AhmedText5Ref} src={txtAhmed5Svg} alt="Descrizione che accompagna l'immagine precedente: I suoi genitori, a causa delle difficoltà con la
                                                                    lingua e della loro limitata istruzione, non
                                                                    riescono ad aiutarlo come vorrebbero con i
                                                                    compiti a casa." className={styles.text_5_right} />
                </div>

                <div className={styles.icon_text_container_right_6}>
                <img ref={Ahmed6Ref} src={Ahmed6Svg0} alt="Ahmed che viene incoraggiato da un suo professore di scienze" className={styles.icon_6_right} />
                <img ref={AhmedText6Ref} src={txtAhmed6Svg} alt="Descrizione che accompagna l'immagine precedente: Un professore di scienze vede il suo potenziale
                                                                    e lo incoraggia a riaccendere la passione per
                                                                    lo studio. Notando il suo interesse per le
                                                                    materie scientifiche, gli suggerisce di iscriversi
                                                                    in un buon liceo scientifico della città." className={styles.text_6_right} />
                </div>

                <div className={styles.icon_text_container_right_7}>
                <img ref={Ahmed7Ref} src={Ahmed7Svg0} alt="Ahmed che si sente diverso insieme ai suoi nuovi amici" className={styles.icon_7_right} />
                <img ref={AhmedText7Ref} src={txtAhmed7Svg} alt="Descrizione che accompagna l'immagine precedente: Nonostante la scuola superiore sia faticosa,
                                                                    riesce a fare buoni amici in classe e esce
                                                                    spesso con loro. Però, in vari contesti sociali, si
                                                                    sente ancora diverso dagli altri." className={styles.text_7_right} />
                </div>

                <div className={styles.icon_text_container_right_8}>
                <img ref={Ahmed8Ref} src={Ahmed8Svg0} alt="Ahmed che inizia a lavorare in un ristorante" className={styles.icon_8_right} />
                <img ref={AhmedText8Ref} src={txtAhmed8Svg} alt="Descrizione che accompagna l'immagine precedente: Ahmed e i suoi genitori non possono
                                                                    permettersi di pagare le tasse universitarie,
                                                                    quindi lavora come cameriere e lavapiatti per
                                                                    risparmiare e iscriversi all'università." className={styles.text_8_right} />
                </div>

                <div className={styles.icon_text_container_right_9}>
                <img ref={Ahmed9Ref} src={Ahmed9Svg0} alt="Ahmed che ha problemi a rinnovare il suo permesso di soggiorno" className={styles.icon_9_right} />
                <img ref={AhmedText9Ref} src={txtAhmed9Svg} alt="Descrizione che accompagna l'immagine precedente: Ogni giorno Ahmed combatte con il tempo e
                                                                    le risorse limitate per rinnovare il
                                                                    permesso di soggiorno. Le procedure sono
                                                                    estenuanti, con lunghe file e documentazione
                                                                    complessa da preparare. Non si lascia
                                                                    scoraggiare, considerando ogni ostacolo come
                                                                    una tappa verso il suo obiettivo." className={styles.text_9_right} />
                </div>

                <div className={styles.icon_text_container_right_10}>
                <img ref={Ahmed10Ref} src={Ahmed10Svg0} alt="Ahmed riesce ad superare l'esame di ammissione di medicina" className={styles.icon_10_right} />
                <img ref={AhmedText10Ref} src={txtAhmed10Svg} alt="Descrizione che accompagna l'immagine precedente: Dopo due anni di sacrifici, Ahmed supera
                                                                    l'esame di ammissione alla facoltà di medicina.
                                                                    La sua vita universitaria è molto impegnativa:
                                                                    oltre agli studi intensivi, lavora part-time per
                                                                    pagarsi gli studi e le spese di vita." className={styles.text_10_right} />
                </div>

                <div className={styles.icon_text_container_right_11}>
                <img ref={Ahmed11Ref} src={Ahmed11Svg0} alt="Ahmed ha problemi con il suo capo" className={styles.icon_11_right} />
                <img ref={AhmedText11Ref} src={txtAhmed11Svg} alt="Descrizione che accompagna l'immagine precedente: Lavorando e frequentando l’università in
                                                                    contemporanea, il suo datore di lavoro è
                                                                    infastidito perché Ahmed spesso ha bisogno
                                                                    di assentarsi dal lavoro." className={styles.text_11_right} />
                </div>

                <div className={styles.icon_text_container_right_12}>
                <img ref={Ahmed12Ref} src={Ahmed12Svg0} alt="Ahmed riesce a laurearsi in medicina" className={styles.icon_12_right} />
                <img ref={AhmedText12Ref} src={txtAhmed12Svg} alt="Descrizione che accompagna l'immagine precedente: Dopo anni di duro lavoro, Ahmed si laurea in
                                                                    medicina con lode. Decide di specializzarsi in
                                                                    chirurgia generale, un campo che richiede
                                                                    dedizione totale.
                                                                    Affronta una competizione agguerrita per
                                                                    accedere alla specializzazione, nonostante un
                                                                    supporto familiare e finanziario minimo." className={styles.text_12_right} />
                </div>

                <div className={styles.icon_text_container_right_13}>
                <img ref={Ahmed13Ref} src={Ahmed13Svg0} alt="Ahmed va a lavorare come medico volontario" className={styles.icon_13_right} />
                <img ref={AhmedText13Ref} src={txtAhmed13Svg} alt="Descrizione che accompagna l'immagine precedente: Gli capita l'opportunità di andare all'estero
                                                                    come medico volontario, ma a causa del suo
                                                                    passaporto marocchino ha più problemi
                                                                    burocratici degli altri e non può partire." className={styles.text_13_right} />
                </div>

                <div className={styles.icon_text_container_right_14}>
                <img ref={Ahmed14Ref} src={Ahmed14Svg0} alt="Ahmed vestito da chirurgo" className={styles.icon_14_right} />
                <img ref={AhmedText14Ref} src={txtAhmed14Svg} alt="Descrizione che accompagna l'immagine precedente: Finalmente ora anche Ahmed è un chirurgo
                                                                    rispettato in un ospedale rinomato in Italia.
                                                                    Ogni giorno, grazie alla sua esperienza
                                                                    personale, tratta ogni paziente con empatia e
                                                                    rispetto, ricordando sempre il suo lungo
                                                                    viaggio." className={styles.text_14_right} />
                </div>
        </div>
    );
}

export default App;