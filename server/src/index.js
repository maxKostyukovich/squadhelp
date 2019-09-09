import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import db from './server/models';
import abilities from './server/rules/ability';
import constants from '../src/constants';
import { permittedFieldsOf } from '@casl/ability/extra'

const User = db.User;
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', router);
const abil = abilities.buyerAbility({id: 2, isBanned: false});
const u = new User({ id: 2, firstName: "Max", isBanned: true });
//console.log(abil.can(constants.ACTIONS.UPDATE, u, Object.keys(u.dataValues)));
console.log(permittedFieldsOf(abil,'update', 'User'));
//console.log(Object.keys(u.dataValues));
app.use((err, req, res, next)=>{
  if(err.status) {
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send(err.message);
  }
});
app.listen(constants.PORT);


