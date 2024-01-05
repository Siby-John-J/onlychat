import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";
import { jwtAbstract } from "src/domain";

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(private jwt: jwtAbstract) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        const token = this.extractToken(req)

        try {
            const payload = this.jwt.verifyToken(token)
        } catch (error) {
            console.log(error.message)
        }
        
        
        return true
    }

    extractToken(request: Request) {
        // return request.headers.authorization.split(' ')[0]
        console.log(request.cookies)
        return request.cookies['Berer']
    }
}