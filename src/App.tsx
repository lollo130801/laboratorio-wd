import styles from './App.module.scss';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';
import Mattia1Svg from './assets/mattia1.svg';

function App() {
    return (
        <div className={styles.App}>
            <img src={Mattia1Svg} alt="" className={styles.img1} />
        </div>
    );
}

export default App;