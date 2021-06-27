import tokenService from './tokenService';

const BASE_URL = '/api/cards';

export function create(card) {
    console.log(card, 'in create')
    return fetch(BASE_URL + '/new', {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    .then(res => res.json());
}

export function deleteOne(cardId) {
    return fetch(BASE_URL + `/${cardId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    .then(res => res.text())
    .then(text => console.log(text))
}

export function editCard(cardId, card) {
    console.log(cardId, card, ' this is the card to edit')
    return fetch(BASE_URL + `/${cardId}`, {
        method: 'PUT',
        body: JSON.stringify(card),
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}