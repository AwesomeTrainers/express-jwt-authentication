import express from 'express';
import initializeAuthenticationRoutes from './authenticationRoutes';
import initializeGreetingRoutes from './greetingRoutes';

const router = express.Router();
const initializeRoutes = (app) => {
  app.use('/', router);
  router.use('/tokens', initializeAuthenticationRoutes(app));
  router.use('/greetings', initializeGreetingRoutes(app));
};

export default initializeRoutes;
