import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import db from './server/models';
const User = db.User;
import abilities from './server/rules/ability';
import constants from '../src/constants';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', router);
const abil = abilities.buyerCreativeAbility({id: 2, isBanned: true});
const u = new User({ id: 3, firstName: "Max" });
console.log(abil.can('create', u));
app.use((err, req, res, next)=>{
  if(err.status) {
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send(err.message);
  }
});
app.listen(constants.PORT);


