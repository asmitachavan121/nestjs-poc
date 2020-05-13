import { NestMiddleware, Injectable } from "@nestjs/common";
import { Request } from 'express-serve-static-core'
import { Response } from 'express-serve-static-core'

@Injectable()
export class MasterRecordMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        console.log(req, res, req.ip)
        console.log(`request path = ${req.path}`)
        next()
    }
}