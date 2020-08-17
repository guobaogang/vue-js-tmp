export function getToken() {
    return sessionStorage.getItem('token');
}

export function setToken() {
    sessionStorage.setItem('token', true);
}