// import css differently
import './style.css';
import './quote.css';

// Alpine JS setup

import Alpine from 'alpinejs';
// create your own modules to import
import { Counter } from './counter';
import Fun from './fun';

window.Alpine = Alpine;

// importing external npm modules

Alpine.data('counter', Counter);
Alpine.data('fun', Fun);

Alpine.start();

// Alpine setup in html
