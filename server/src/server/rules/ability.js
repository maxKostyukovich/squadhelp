import { AbilityBuilder, Ability } from '@casl/ability';
import constants from '../../constants';
Ability.addAlias('modify', ['update', 'delete'])
function adminAbility(user) {
    return AbilityBuilder.define(can => {
        can('modify', 'User', { role: constants.ROLES.BUYER });
        can('modify', 'User', { role: constants.ROLES.CREATIVE });
        can('update', 'User', { id: user.id });
        can('read','all');
    });
}