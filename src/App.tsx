import styles from './App.module.scss';
import BasePng from './assets/base.png';
import Mattia1Svg from './assets/mattia 1.svg';
import Classnames from 'classnames';

function App() {
    return (
        <div className={styles.App}>
            <img alt="" className={styles.img} width="100%" height="100%" src={BasePng} />
            <img
                src={Mattia1Svg}
                alt=""
                className={Classnames(styles.icon, styles['slide-left'], styles.active)}
            />
        </div>
    );
}

export default App;
