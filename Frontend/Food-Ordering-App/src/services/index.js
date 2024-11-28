const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
export const register = async(data) => {
    const response = await fetch(`${BACKEND_URL}/api/user/register`,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
    })
    if(response.status === 200 || response.status === 400)
        return response.json()
    throw new Error('Something went wrong')
}

export const login = async(data) => {
    const response = await fetch(`${BACKEND_URL}/api/user/login`,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
    })
    if(response.status === 200 || response.status === 400)
        return response.json()
    throw new Error('Something went wrong')
}