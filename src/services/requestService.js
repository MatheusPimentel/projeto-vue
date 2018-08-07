import http from './http'

export const olaMundo = () => http.get('/olamundo')

export const login = (user) => http.post('/login', user)

export const register = (user) => http.post('/register', user)
