import { UserDto, UserAuthDto, jwtAbstract } from 'src/domain';
import { Response } from 'express';
import { AnotherService } from 'src/usecase/another/another.service';
export declare class AnotherController {
    private jwt;
    private user;
    private refreshList;
    constructor(jwt: jwtAbstract, user: AnotherService);
    getAnother(body: UserDto, res: Response): object;
    signInUSer(data: UserAuthDto): Promise<boolean | string>;
    getUser(id: any): Promise<object>;
    chatUser(): string;
    refreshToken(data: object, res: Response): void;
}
