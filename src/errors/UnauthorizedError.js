import httpStatus from 'http-status-codes';

export default class UserNotFoundError extends Error {
  httpStatus;

  constructor() {
    super('Unauthorized');
    this.httpStatus = httpStatus.UNAUTHORIZED;
  }
}
