const fs = require('fs');
const Postgres = require('pg');
const Eris = require('eris');
const Constants = require('../constants.js');
const utils = require('../utils.js');

var func = {
	perm: Constants.Roles.Developer,
	hidden: true,
	desc: "Evaluates a command",
	long_desc: "Evaluates a command",
	usage: "eval <command>",
	run: function(m, args, client, context) {
		if(m.author.id !== context.config.dev_id) {
			return new Error("Must be developer to use this command.");
		}

		let exp = args.join(' ');
		let emb = {
			color: 0x008000
		}
		let desc;
		try {
			let result = eval(exp);
			desc = `**In:**\n\`\`\`js\n${exp}\n\`\`\`**Out:**\n\`\`\`js\n${result}\n\`\`\``;
		}
		catch(e) {
			desc = `**In:**\n\`\`\`js\n${exp}\n\`\`\`**Out:**\n\`\`\`js\n${e.toString()}\n\`\`\``;
			emb.color = 0xED1C24;
		}
		emb.description = desc;
		m.channel.createMessage({embed: emb}).catch((e) => {
			return e;
		});
	}
}

module.exports = func;