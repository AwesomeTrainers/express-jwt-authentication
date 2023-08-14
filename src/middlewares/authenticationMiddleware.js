import Jwt from 'jsonwebtoken';
import UnauthorizedError from '../errors/UnauthorizedError';

const authenticationMiddleware = (request, response, next) => {
  const authorizationHeader = request.get('Authorization');
  const { JWT_SECRET_KEY } = process.env;
  try {
    const token = authorizationHeader.replace('Bearer ', '');
    const decodedJwt = Jwt.verify(token, JWT_SECRET_KEY);
    if (!decodedJwt.id) {
      return next(new UnauthorizedError());
    }
    request.decodedJwt = decodedJwt;
    return next();
  } catch (error) {
    return next(new UnauthorizedError());
  }
};

export default authenticationMiddleware;
