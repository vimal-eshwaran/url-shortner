import React, { lazy ,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NameProvider} from './Context/context.jsx';
import { BeatLoader } from 'react-spinners'


const App=lazy(() => import('./App.jsx'));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NameProvider>
  <Suspense fallback={<div style={{marginLeft:'50vw'}}><BeatLoader
  color="#36d7b7"
  size={35}
 
/>
</div>}>
      <App />
   </Suspense>
    </NameProvider>
  </React.StrictMode>,
);
