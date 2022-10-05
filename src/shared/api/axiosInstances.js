import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://188.225.83.80:6719/',
  headers: {
    'Content-Type': 'application/json',
  },
})
