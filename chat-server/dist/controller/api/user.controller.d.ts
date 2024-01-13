import { UserDto, UserAuthDto, jwtAbstract } from 'src/domain';
import { Response } from 'express';
import { AnotherService } from 'src/usecase/another/another.service';
export declare class AnotherController {
    private jwt;
    private user;
    private refreshList;
    constructor(jwt: jwtAbstract, user: AnotherService);
    getAnother(body: UserDto, res: Response): Promise<any>;
    signInUSer(data: UserAuthDto): Promise<boolean | string>;
    getUser(id: any): Promise<object>;
    getAllUsers(): Promise<UserDto>;
    editUser(data: UserDto): Promise<void>;
    addToChat(data: any): Promise<void>;
    getChat(): Promise<void>;
    getUserChat(id: any): Promise<any>;
    chatUser(data: object): string;
    refreshToken(data: object, res: Response): void;
}
