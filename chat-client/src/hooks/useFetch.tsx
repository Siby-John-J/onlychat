import axios from "axios"

export async function useFetch(data: object) {
    const response = await axios.post('http://localhost:2000/user/create', data)
    
    return response
}

export async function useAuthFetch(data: object) {
    const response = await axios.get('http://localhost:2000/user/signin', {params: data})

    return response.data
}

export async function useFetchUser(data: string) {
    const response = await axios.get('http://localhost:2000/user/get_user', {
        params: { id: data }
    })

    return response.data
}

export async function userEditFetch(data: object) {
    const response = await axios.patch('http://localhost:2000/user/edit', data)

    // console.log(data)
}