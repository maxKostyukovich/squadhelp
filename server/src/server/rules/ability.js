import { AbilityBuilder, Ability } from '@casl/ability';
import constants from '../../constants';
Ability.addAlias('modify', ['update', 'delete']);
Ability.addAlias('crud', ['update', 'delete', 'create', 'read']);
function adminAbility(user) {
  return AbilityBuilder.define((can, cannot) => {
    can('modify', 'User', { role: constants.ROLES.BUYER });
    can('modify', 'User', { role: constants.ROLES.CREATIVE });
    can('update', 'User', { id: user.id });
    can('read', 'all');

    can(['modify', 'read'], 'Bundle');
    can('read', 'Contest');
  });
}
function buyerAbility(user) {
  return AbilityBuilder.define((can, cannot) => {
    can(['update', 'read'], 'User', { id: user.id });
    cannot('update', 'User', 'isBanned');
    can('crud', 'Bundle', { userId: user.id });
    can('create', ['Bundle', 'Contest']);
    cannot('crud', 'all', { isBanned: true });
  });
}
module.exports = {
  adminAbility,
  buyerAbility,
};

