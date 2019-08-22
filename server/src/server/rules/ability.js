import { AbilityBuilder, Ability } from '@casl/ability';
import { ACTIONS, ROLES } from '../../constants';

Ability.addAlias('modify', [ACTIONS.UPDATE, ACTIONS.DELETE]);
Ability.addAlias('crud', [ACTIONS.UPDATE, ACTIONS.DELETE, ACTIONS.READ, ACTIONS.CREATE]);

function adminAbility(user) {
  return AbilityBuilder.define((can, cannot) => {
    can('modify', 'User');
    cannot('modify', 'User', { role: ROLES.ADMIN });
    can(ACTIONS.UPDATE, 'User', { id: user.id });
    can(ACTIONS.READ, 'all');

    can(['modify', ACTIONS.DELETE], 'Bundle');
    can(ACTIONS.READ, 'Contest');
  });
}

function buyerAbility(user) {
  return AbilityBuilder.define((can, cannot) => {
    can(ACTIONS.CREATE, 'User');
    can([ACTIONS.UPDATE, ACTIONS.READ], 'User', { id: user.id });
    cannot(ACTIONS.UPDATE, 'User', ['isBanned', 'role']);

    can('crud', 'Bundle', { userId: user.id });
    can(ACTIONS.CREATE, ['Bundle', 'Contest']);

    if(user.isBanned) {
      cannot('crud', 'all');
    }
  });
}

function creativeAbility(user) {
  return AbilityBuilder.define((can, cannot) => {
    can(ACTIONS.READ, 'User');
    can([ACTIONS.UPDATE, ACTIONS.READ], 'User', { id: user.id });
    cannot(ACTIONS.UPDATE, 'User', ['isBanned','role']);

    cannot(['modify', ACTIONS.CREATE],['Bundle', 'Contest']);
    can(ACTIONS.READ, ['Bundle', 'Contest']);
    if(user.isBanned) {
      cannot('crud', 'all');
    }
  });
}

module.exports = {
  adminAbility,
  creativeAbility,
  buyerAbility,
};

