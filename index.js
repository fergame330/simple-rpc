const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});
let id = ""

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Codando em:",
        state: "Javascript",
        startTimestamp: new Date(),
        largeImageKey: "image",
        largeImageText: "Não é python fdp",
		smallImageKey: "image",
		smallImageText: "Sim é javascript",
		buttons:[
			{
				label:"Quero um bot", url:"https://discord.gg/fYRbXvmvUr"
			}
		]
    });

    console.log(`██████╗░██╗░██████╗██╗░░██╗░░░░██████╗░██████╗░███████╗███████╗███████╗███╗░░░██╗░██████╗███████╗
██╔══██╗██║██╔════╝██║░░██║░░░░██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝████╗░░██║██╔════╝██╔════╝
██████╔╝██║██║░░░░░███████║░░░░██████╔╝██████╔╝█████╗░░███████╗█████╗░░██╔██╗░██║██║░░░░░█████╗░░
██╔══██╗██║██║░░░░░██╔══██║░░░░██╔═══╝░██╔══██╗██╔══╝░░╚════██║██╔══╝░░██║╚██╗██║██║░░░░░██╔══╝░░
██║░░██║██║╚██████╗██║░░██║░░░░██║░░░░░██║░░██║███████╗███████║███████╗██║░╚████║╚██████╗███████╗
╚═╝░░╚═╝╚═╝░╚═════╝╚═╝░░╚═╝░░░░╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝╚═╝░░╚═══╝░╚═════╝╚══════╝
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

Made by Fer12cps
`);
});

rpc.login({
    clientId: id
});
