import { UserDto, UserAuthDto, jwtAbstract } from 'src/domain';
import { Response } from 'express';
export declare class AnotherController {
    private jwt;
    private refreshList;
    constructor(jwt: jwtAbstract);
    getAnother(body: UserDto, res: Response): object;
    signInUSer(data: UserAuthDto): string;
    chatUser(): string;
    refreshToken(data: object, res: Response): void;
}
