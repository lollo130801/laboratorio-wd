import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 6424,
        windowHeight: 6480,
        canvasBackgroundColor: '#ffffff',
        windowBackgroundColor: '#f5f5f5',
        canvasWidth: window.innerWidth,
        canvasHeight: 6480,
    },
});
