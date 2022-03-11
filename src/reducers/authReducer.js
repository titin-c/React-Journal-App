import { types } from '../types/types';

/* 
el objeto state del reducer será un objeto vacio
y cuando se atentique tendrá:
{
    uid: 'kjdjfhgkajdghakjdjfgkjad',
    name: 'Titín'
}
*/
export const authReducer = ( state={}, action ) => {
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
            
            case types.logout:
            return{ }
    
        default:
           return state;
    }

}