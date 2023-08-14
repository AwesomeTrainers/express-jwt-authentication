import express from 'express';
import SwaggerUi from 'swagger-ui-express';
import swaggerOptions from './utils/swaggerOptions';
import AuthenticationService from './services/AuthenticationService';
import AuthenticationController from './controllers/AuthenticationController';
import user from './models/user';
import initializeRoutes from './routes/index';
import errorMiddleware from './middlewares/errorMiddleware';
import GreetingController from './controllers/GreetingController';

require('dotenv').config();

const app = express();

app.use('/api/docs/', SwaggerUi.serve, SwaggerUi.setup(swaggerOptions));
app.use(express.json());

const createServices = () => {
  const authenticationService = new AuthenticationService(user);
  return { authenticationService };
};

const createControllers = (services) => {
  const { authenticationService } = services;
  const authenticationController = new AuthenticationController(authenticationService);
  const greetingController = new GreetingController();

  return { authenticationController, greetingController };
};

const main = () => {
  const services = createServices();
  app.locals.controllers = createControllers(services);
  initializeRoutes(app);
};

main();

app.use(errorMiddleware);

export default app;
