import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/* Como createStore es una acción que solo acepta un reducer
utilizamos combineReducers para unificarlas todas y mandárselas al create Store
así si creamos una nueva en un futuro la añadiriamos al combine 
y ésta ya se la envia al create...

*/
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,

});
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );