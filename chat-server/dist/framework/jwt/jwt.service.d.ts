import { jwtAbstract } from "src/domain";
import { JwtService } from "@nestjs/jwt";
export declare class jwtAuth implements jwtAbstract {
    private jwt;
    constructor(jwt: JwtService);
    signToken(data: object): string;
    refreshToken(data: object): string;
    verifyToken(token: string): any;
}
