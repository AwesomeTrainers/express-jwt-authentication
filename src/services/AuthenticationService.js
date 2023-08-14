import Jwt from 'jsonwebtoken';
import UserNotFoundError from '../errors/UserNotFoundError';

export default class AuthenticationService {
  #userModel;

  constructor(userModel) {
    this.#userModel = userModel;
  }

  async authenticate(userData) {
    const { username, password } = userData;
    const user = await this.#userModel.findOne({ username, password });

    if (!user) {
      throw new UserNotFoundError();
    }

    const { JWT_EXPIRATION, JWT_SECRET_KEY } = process.env;
    const payload = JSON.parse(JSON.stringify(user));
    const token = Jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRATION });
    return { token };
  }
}
