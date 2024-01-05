import axios from "axios"

export function useFetch(data: object) {
    const response = axios.post('http://localhost:3000/user/create', data)
    
    return response
}

export function useAuthFetch(data: object) {
    const response = axios.get('http://localhost:3000/user/signin', {params: data})

    return response
}