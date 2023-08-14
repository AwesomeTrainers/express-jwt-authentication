import httpStatus from 'http-status-codes';

export default class UserNotFoundError extends Error {
  httpStatus;

  constructor() {
    super('User not found');
    this.httpStatus = httpStatus.NOT_FOUND;
  }
}
