import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// FontAwesome config: https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faMapMarkerAlt, faUser)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
