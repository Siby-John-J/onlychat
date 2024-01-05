import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";
import { jwtAbstract } from "src/domain";
export declare class JwtGuard implements CanActivate {
    private jwt;
    constructor(jwt: jwtAbstract);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    extractToken(request: Request): any;
}
