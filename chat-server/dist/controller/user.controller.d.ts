import { AnotherService } from 'src/usecase/another/another.service';
import { UserDto, UserAuthDto, jwtAbstract } from 'src/domain';
import { Response } from 'express';
export declare class AnotherController {
    private another;
    private jwt;
    private refreshList;
    constructor(another: AnotherService, jwt: jwtAbstract);
    getAnother(body: UserDto, res: Response): object;
    signInUSer(data: UserAuthDto): string;
    chatUser(): string;
    refreshToken(data: object, res: Response): void;
}
