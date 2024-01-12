export declare abstract class UserRepoAbstract<T> {
    abstract createUser(): any;
    abstract editUser(): any;
    abstract deleteUser(): any;
    abstract getUser(data: object | string): Promise<null | object>;
}
