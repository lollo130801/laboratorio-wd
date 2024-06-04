import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 320,
        windowHeight: 1920,
        canvasWidth: 378.6666666666667,
        canvasHeight: 2106.3333333333335,
    },
});
