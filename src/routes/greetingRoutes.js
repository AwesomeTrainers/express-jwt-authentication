import express from 'express';
import authenticationMiddleware from '../middlewares/authenticationMiddleware';

const router = express.Router();

/**
 * @openapi
 * paths:
 *   /greetings:
 *     get:
 *       security:
 *          - bearerAuth: []
 *       description: Get a greeting
 *       responses:
 *         200:
 *           description: Succesfully returns a greeting for user
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   greeting:
 *                     type: string
 *               example:
 *                   greeting: "Greetings! username"
 *         401:
 *           description: Token is unauthorized
 *           content:
 *             application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   message:
 *                     type: string
 *              example:
 *                message: "error message"
 * components:
 *    securitySchemes:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 */

const initializeGreetingRoutes = (app) => {
  const { greetingController } = app.locals.controllers;
  router.get('/', authenticationMiddleware, greetingController.greetings);
  return router;
};

export default initializeGreetingRoutes;
