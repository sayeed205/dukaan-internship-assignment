export class ErrorResponse extends Error {
    statusCode: number;
    constructor(msg: string, statusCode = 500) {
        super(msg);
        this.statusCode = statusCode;
    }
}
