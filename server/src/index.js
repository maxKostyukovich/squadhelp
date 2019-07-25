import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import constants from '../src/constants';
import ApplicationError from './server/errorHandlers/ApplicationError';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', router);

app.use((err, req, res, next)=>{
  if(err instanceof ApplicationError) {
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send(err.message);
  }
});
console.log(constants.PORT);
app.listen(constants.PORT);

