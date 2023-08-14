import app from './app';
import dbconfig from './database/config';

const port = 3000;

dbconfig.connect();

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
