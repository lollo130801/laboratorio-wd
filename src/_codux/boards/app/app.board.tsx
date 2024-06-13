import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasBackgroundColor: '#ffffff',
        windowBackgroundColor: '#f5f5f5',
        canvasWidth: window.innerWidth,
        canvasHeight: window.innerHeight,
   },
});
