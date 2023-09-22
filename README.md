
## **shaorma-bot** 1.0.0

This is a collaborative development project meant for the study and research of Discord Bots, APIs, JavaScript, design patterns and systems design. With no intention of monetization or public-facing releases the bot and it's source code are dedicated to creating an environment for fostering knowledge sharing, professional development and creativity; copyrighted under 
Attribution-NonCommercial-ShareAlike 4.0 International (**CC BY-NC-SA 4.0**).

Originally built on `Node.js v20.7.0` & `discord.js 14.13.0`.
## **3rd party docs**

 - [Node.js v20.7.0](https://nodejs.org/docs/latest-v20.x/api/)
 - [discord.js guide](https://discordjs.guide/)
 - [discord.js module docs](https://discordjs.dev/docs/packages/core/1.0.1)
 - [Discord API docs](https://discord.com/developers/docs/intro)


## **deployment**

Deployment is done through the Node runtime; with the `v20.7.0` version being recommended for stable and predictable results.
The project provides `package.json` & `package-lock.json` in order to set up the dev environment quickly; just run `npm install` inside the root directory of the project and all dependencies will be downloaded automatically.

Once your environment is set up create a file named `.env` in the root directory of the project. The file should contain the following environment variables:

```bash
DISCORD_TOKEN=your_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here
```

Once you've set up your environment variables you are ready to deploy your bot; run the following commands to get started:

```bash
npm run commands
```
This will register your bot's slash commands to the application. Run this whenever you create new commands otherwise your bot won't recognize your inputs.

Next you simply run the following command to start the bot:

```bash
npm run bot
```

Your bot should now be online and ready to process commands; have fun!

