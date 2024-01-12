
export abstract class UserRepoAbstract<T> {
    abstract createUser()

    abstract editUser()

    abstract deleteUser()

    abstract getUser(data: object | string) : Promise<null | object>
}