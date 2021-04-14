const fetch = require('node-fetch');
module.exports = {
	DiscordFetcher: async (id, options) => {
		var FetcherResponse;
		var response;
		try {
			if(options) { 
				var log = options.log || false;
				let dynamic;
				let size;
				let format;
				if(options.dynamic && typeof options.dynamic === "boolean") dynamic = options.dynamic;
				if(options.size && typeof options.size === "number") size = options.size;
				if(options.format) format = options.format;
				if(!dynamic) dynamic = true;
				if(!size) size = 1024;
				if(!format) format = "png";
				FetcherResponse = await fetch("https://api.azizmjaber04.repl.co/user/" + id + "?dynamic=" + dynamic + "&format=" + format + "&size=" + size);
				response = await FetcherResponse.json();
				if(log === true) {
					console.log(response)
				}
			} else {
				FetcherResponse = await fetch("https://api.azizmjaber04.repl.co/user/" + id);
				response = await FetcherResponse.json();			
			}
		} catch (err) {
			console.error("DiscordFetcher: "+err+"\n Support: https://discord.gg/cMKxudNhdc")
		}
		return response;
	}
}