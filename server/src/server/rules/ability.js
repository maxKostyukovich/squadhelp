import { AbilityBuilder, Ability } from '@casl/ability';
import constants from '../../constants';

Ability.addAlias('modify', ['update', 'delete']);
Ability.addAlias('crud', ['update', 'delete', 'create', 'read']);

function adminAbility(user) {
  return AbilityBuilder.define((can, cannot) => {
    can('modify', 'User');
    cannot('modify', 'User', { role: constants.ROLES.ADMIN });
    can('update', 'User', { id: user.id });
    cannot('update', 'User', 'isBanned');
    can('read', 'all');

    can(['modify', 'read'], 'Bundle');
    can('read', 'Contest');
  });
}
function buyerCreativeAbility(user) {
  return AbilityBuilder.define((can, cannot) => {
    can('create', 'User');
    can(['update', 'read'], 'User', { id: user.id });
    cannot('update', 'User', 'isBanned');

    if(user.role === constants.ROLES.BUYER) {
        can('crud', 'Bundle', { userId: user.id });
        can('create', ['Bundle', 'Contest']);
    }

    if(user.role === constants.ROLES.CREATIVE){
        cannot(['modify', 'create'],['Bundle', 'Contest']);
        can('read', ['Bundle', 'Contest']);
    }
    if(user.isBanned) {
      cannot('crud', 'all');
    }
  });
}

module.exports = {
  adminAbility,
  buyerCreativeAbility,
};

