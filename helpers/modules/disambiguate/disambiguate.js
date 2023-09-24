// arguments() is WIP;
function arguments(input) {
    let sanitizedArguments;

    return sanitizedArguments;
}

async function fetchGuildUserIdByUsername(guild, username) {
    try {
        let user = await guild.members.fetch({ query: username, limit: 1});
        return user;
    } catch (error) {
        console.error(error);
    }
}

function userId(input, guild) {
    const isMention = /^@!?\d+>$/;

    return (isMention.test(input))
        ? input.match(/\d+/)[0]
    : fetchGuildUserIdByUsername(input, guild);
}

module.exports = {
    userId: userId,
    arguments: arguments
}