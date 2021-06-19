import tokenService from './tokenService';

const BASE_URL = '/api/cards';

export function create(card) {
    console.log(card, 'in create')
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}