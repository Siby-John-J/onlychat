import { jwtAbstract } from "src/domain";
import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class jwtAuth implements jwtAbstract {
    constructor(private jwt: JwtService) {}

    signToken(data: object) {
        const val = this.jwt.sign(data, { expiresIn : '8s', secret: process.env.ACCESS_TOKEN_SECRET})
        
        return val
    }

    refreshToken(data: object) {
        const val = this.jwt.sign(data, { secret: process.env.REFRESH_TOKEN_SECREAT })
        
        return val
    }

    verifyToken(token: string) {
        // console.log(t)
        const val = this.jwt.verify(token, {
            secret: process.env.ACCESS_TOKEN_SECRET
        })
        
        return val
    }
}