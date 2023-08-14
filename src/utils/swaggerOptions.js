import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'IDEAS Authentication API',
      description: 'Simple Authentication API with Express and JWT',
      version: '1.0.0'
    }
  },
  apis: ['./src/**/*.js'] // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
export default openapiSpecification;
