import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.cgo.co.id',
  headers: {
    'Content-Type': 'application/json',
  }
})