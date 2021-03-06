const Discord = require("discord.js");
module.exports = {
    name: "help",
    usage: "",
    permlevel: "SEND_MESSAGES",
    catergory: "general",
    description: `Well, this command, of course!`,
    run: async function (client, message, args) {

        if (message.deletable) message.delete({reason: "Auto-Delete"});

        let gHelpEmbed = new Discord.MessageEmbed()
            .setDescription("**General Commands**")
            .setColor("#8be099")
            .setFooter("Developed by iBPlus")
            .setTimestamp();

        let miscHelpEmbed = new Discord.MessageEmbed()
            .setDescription("**Miscellaneous Commands**")
            .setColor("#e7dfdf")
            .setFooter("Developed by iBPlus")
            .setTimestamp();

        let mHelpEmbed = new Discord.MessageEmbed()
            .setDescription("**Moderation Commands**")
            .setColor("#c91c1c")
            .setFooter("Developed by iBPlus")
            .setTimestamp();

        let rpHelpEmbed = new Discord.MessageEmbed()
            .setTitle("**Roleplay Commands**")
            .setColor("#a82fff")
            .setFooter("Developed by iBPlus")
            .setTimestamp();

        let manageHelpEmbed = new Discord.MessageEmbed()
            .setTitle("**Management Commands**")
            .setColor("#ffd394")
            .setFooter("Developed by iBPlus")
            .setTimestamp();

        client.commands.forEach((cmd, i) => {
                if (cmd.catergory === 'general') {
                    if (!message.guild === null) {
                        if (message.member.hasPermission(cmd.permlevel)) {
                            gHelpEmbed.addField(cmd.name, cmd.description)
                        }
                    } else {
                        gHelpEmbed.addField(cmd.name, cmd.description)
                    }
                }
                else if (cmd.catergory === 'miscellaneous') {
                    if (!message.guild === null) {
                        if (message.member.hasPermission(cmd.permlevel)) {
                            miscHelpEmbed.addField(cmd.name, cmd.description)
                        }
                    } else {
                        miscHelpEmbed.addField(cmd.name, cmd.description)
                    }
                }
                else if (cmd.catergory === 'moderation') {
                    if (!message.guild === null) {
                        if (message.member.hasPermission(cmd.permlevel)) {
                            mHelpEmbed.addField(cmd.name, cmd.description)
                        }
                    } else {
                        mHelpEmbed.addField(cmd.name, cmd.description)
                    }
                }
                else if (cmd.catergory === 'management') {
                    if (!message.guild === null) {
                        if (message.member.hasPermission(cmd.permlevel)) {
                            manageHelpEmbed.addField(cmd.name, cmd.description)
                        }
                    } else {
                        manageHelpEmbed.addField(cmd.name, cmd.description)
                    }
                }
                else if (cmd.catergory === 'roleplay') {
                    if (!message.guild === null) {
                        if (message.member.hasPermission(cmd.permlevel)) {
                            rpHelpEmbed.addField(cmd.name, cmd.description)
                        }
                    } else {
                        rpHelpEmbed.addField(cmd.name, cmd.description)
                    }
                }
            }
        )
        let embedArray = [gHelpEmbed, miscHelpEmbed, mHelpEmbed, rpHelpEmbed, manageHelpEmbed]
        const Pagination = require('discord-paginationembed');

        await new Pagination.Embeds(embedArray)
            .setArray(embedArray)
            .setAuthorizedUsers([message.author.id])
            .setChannel(message.channel)
            .setPageIndicator(true)
            .setPage(1)
            // Methods below are for customising all embeds
            .build();
    }
};
