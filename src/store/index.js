// store/index.js
import { createStore } from 'redux';
import sheetsReducer from '../component/reducers/sheetsReducer';

const store = createStore(sheetsReducer);

export default store;
