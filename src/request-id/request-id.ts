import { v4 as uuid } from 'uuid';
import { Request, Response, NextFunction } from 'express';

export default function requestId({ headerName = 'X-Request-Id', setHeader = true } = {}) {
    return (request: Request, response: Response, next: NextFunction) => {
        const old = request.get(headerName);
        const id = old === undefined ? uuid() : old;

        if (setHeader) {
            response.set(headerName, id);
        }

        (request as any)['id'] = id;
        next();
    };
}
