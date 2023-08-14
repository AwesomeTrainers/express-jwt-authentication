import httpStatus from 'http-status-codes';

export default class GreetingController {
  #greetings;

  constructor() {
    this.#greetings = 'Greetings!';
    this.greetings = this.greetings.bind(this);
  }

  greetings(request, response) {
    const { decodedJwt: { username } } = request;

    response.status(httpStatus.OK).json(`${this.#greetings} ${username}`);
  }
}
