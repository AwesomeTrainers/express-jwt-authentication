import express from 'express';

const router = express.Router();

/**
 * @openapi
 * /tokens:
 *   post:
 *     description: Login with username and password
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   description: Registered username
 *                   required: true
 *                 password:
 *                   type: string
 *                   description: Registered password
 *                   required: true
 *               example:
 *                   username: "johndoe"
 *                   password: "password123"
 *     responses:
 *       200:
 *         description: Successfully logged in and returns an authorization token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Generated token
 *             example:
 *               token: "token"
 *       404:
 *         description: Username and/or password is incorrect
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *             example:
 *               message: "error message"
 */

const initializeAuthenticationRoutes = (app) => {
  const { authenticationController } = app.locals.controllers;
  router.post('/', authenticationController.authenticate);
  return router;
};

export default initializeAuthenticationRoutes;
