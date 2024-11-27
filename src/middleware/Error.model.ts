export class GitApiRepoError extends Error {
    public status: number;
    constructor (status?: number, message?: string, options?: ErrorOptions) {
        super(message, options);
        this.status = status ?? 500;
    }
}

export class GitApiProfileError extends Error {
    public status: number;
    constructor (status?: number, message?: string, options?: ErrorOptions) {
        super(message, options);
        this.status = status ?? 500;
    }
}

export interface ErrorMessage {
    error: string;
    message: string;
}