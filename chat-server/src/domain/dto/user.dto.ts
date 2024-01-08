
export interface UserDto {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
}

export interface UserAuthDto {
    email: string
    password: string
}