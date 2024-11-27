import { NextFunction, Request, Response } from 'express';

import { HttpErrorMessage } from './Error.consts';
import { GitApiProfileError, GitApiRepoError } from './Error.model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ErrorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof GitApiRepoError) {
        res.status(err.status).send({ error: HttpErrorMessage(err.status), message: err.cause });
    } else if (err instanceof GitApiProfileError) {
        res.status(err.status).send({ error: HttpErrorMessage(err.status), message: err.cause });
    } else {
        res.status(500).send({ error: 'Something went wrong' });
    }
};