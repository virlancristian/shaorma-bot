const { memdb } = require.main.require('./helpers/modules/memdb/memdb');
memdb.read('blacklist');

function userIsAllowedToExec(user, command) {
    if (memdb.cache['blacklist'][user]) {
        if (memdb.cache['blacklist'][user]['banned-commands'].includes(command)
        ||  memdb.cache['blacklist'][user]['banned-commands'].includes("--all"))
        return false;
    } else {
        return true;
    }
}

module.exports = { userIsAllowedToExec }