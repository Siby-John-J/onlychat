
export abstract class jwtAbstract{
    abstract verifyToken(token: string): any

    abstract signToken(data: object): string

    abstract refreshToken(data: object): string
}