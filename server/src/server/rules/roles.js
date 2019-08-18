import constants from '../../constants';
class RoleHelper {
    constructor(myself = true, others = []){
        this.myself = myself;
        this.others = others;
    }
}
//Hello world
const ACCESS = new Map([
    [
        constants.ACTIONS.CREAT.CONTEST, new Map([
            [constants.ROLES.BUYER, new RoleHelper()],
            [constants.ROLES.ADMIN, new RoleHelper()],
        ])
    ],
    [
        constants.ACTIONS.UPDATE.CONTEST, new Map([
            [constants.ROLES.BUYER, new RoleHelper()],
            [constants.ROLES.ADMIN, new RoleHelper(true,[constants.ROLES.BUYER,constants.ROLES.ADMIN])],
        ])
    ],
    [
        constants.ACTIONS.READ.USER.ONE_USER, new Map([
            [constants.ROLES.CREATIVE, new RoleHelper()],
            [constants.ROLES.BUYER, new RoleHelper()],
            [constants.ROLES.ADMIN, new RoleHelper(true, [constants.ROLES.BUYER, constants.ROLES.CREATIVE, constants.ROLES.ADMIN])],
    ])
    ],
    [
        constants.ACTIONS.READ.USER.ALL_USERS, new Map([
            [constants.ROLES.ADMIN, new RoleHelper(true, [constants.ROLES.CREATIVE, constants.ROLES.BUYER])]
    ])
    ],
    [
        constants.ACTIONS.UPDATE.USER, new Map([
            [constants.ROLES.ADMIN, new RoleHelper(false, [constants.ROLES.BUYER, constants.ROLES.CREATIVE, constants.ROLES.ADMIN])],
            [constants.ROLES.BUYER, new RoleHelper()],
            [constants.ROLES.CREATIVE, new RoleHelper()],
    ])
    ],

]);
module.exports = ACCESS;