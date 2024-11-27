import { HttpStatusCode } from 'axios';

export const HttpErrorMessage = (status: number) => {
    switch (status) {
        case HttpStatusCode.BadRequest:
            return 'Bad request';
        case HttpStatusCode.Forbidden:
            return 'Forbidden';
        case HttpStatusCode.NotFound:
            return 'Not found';
        default:
            return 'Something went wrong :c';
    }
};