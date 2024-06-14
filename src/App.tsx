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
            <img src={BasePng} alt="" className={styles.img} />
            <img ref={icon1Ref} src={Mattia2Svg0} alt="" className={styles.icon_2_right} />
            <img ref={icon2Ref} src={Mattia1Svg0} alt="" className={styles.icon_1_right} />
        </div>
    );
}

export default App;
