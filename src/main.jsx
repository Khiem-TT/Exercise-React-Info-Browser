import ReactDOM, {createRoot} from 'react-dom/client'

const browserInfo = <h4>Browser's details: {navigator.userAgent}</h4>
const root = createRoot(document.getElementById('root'));

root.render(browserInfo);