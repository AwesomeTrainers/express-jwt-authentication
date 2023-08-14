/* eslint-disable no-unused-vars */
const errorMiddleware = (error, request, response, next) => {
  response.status(error.httpStatus).json({ message: error.message });
};

export default errorMiddleware;
