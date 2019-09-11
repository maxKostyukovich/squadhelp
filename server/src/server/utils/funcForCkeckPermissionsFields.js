export const checkPermissionsPerField = (ability,action,fields) => {
    let res = true;
    console.log(fields);
    fields.map(value => {
        if(ability.cannot(action,'User',value)){
            res = false
        }
    });
    return res;
};
