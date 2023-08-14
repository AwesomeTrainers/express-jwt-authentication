import httpStatus from 'http-status-codes';

export default class AuthenticationController {
  #authenticationService;

  constructor(authenticationService) {
    this.#authenticationService = authenticationService;
    this.authenticate = this.authenticate.bind(this);
  }

  async authenticate(request, response, next) {
    const { body } = request;
    try {
      const token = await this.#authenticationService.authenticate(body);
      response.status(httpStatus.OK).json(token);
    } catch (error) {
      next(error);
    }
  }
}
