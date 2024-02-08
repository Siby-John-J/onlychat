import { UserDto, UserAuthDto, jwtAbstract, ChatAction } from 'src/domain';
import { Response } from 'express';
import { UserService } from 'src/usecase/user/user.service';
export declare class AnotherController {
    private jwt;
    private user;
    private refreshList;
    constructor(jwt: jwtAbstract, user: UserService);
    getAnother(body: UserDto, res: Response): Promise<any>;
    signInUSer(data: UserAuthDto): Promise<boolean | string>;
    getUser(id: any): Promise<object>;
    getAllUsers(): Promise<UserDto>;
    editUser(data: UserDto): Promise<void>;
    addToChat(data: any): Promise<void>;
    removeFromChat(data: ChatAction): Promise<string>;
    getChat(): Promise<void>;
    clearChat(data: any): Promise<void>;
    getUserChat(id: any): Promise<any>;
    chatUser(data: object): string;
    refreshToken(data: object, res: Response): void;
}
