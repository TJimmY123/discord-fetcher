# ⚡ Discord Fetcher V1 
- Simple & Full Discord User Info Fetcher

## 😏 Some Of Features
- Simple & Easy
- Include Cdn With Zero Dependencies 
- Include Some Of Fetch Option

## 🔌 Getting Started
- You can start install the package on your project:
```
npm i discord-fetcher
```
- Then Start define it like this:
```javascript
const { DiscordFetcher } = require("discord-fetcher")
```
- Or in typescript
```ts
import { DiscordFetcher } from 'discord-fetcher';
```

## 💡 Some Notes 
- Fetch Options Have Defult Values: (dynamic: true, format: "png", size: 1024, log: false)
- You Can Use The Cdn: https://unpkg.com/discord-fetcher@1.0.3/index.min.js
- You Can Test The Output With Log Fetch Option
- Fetch All The User Flags(Badgets) [BETA FEATURE]

## 📚 Examples
- Using Npm Package
```javascript
const { DiscordFetcher } = require("discord-fetcher")

async function test() {
	await DiscordFetcher("747430301654974546", {
		log: true,
		dynamic: true,
		format: "gif",
		size: 2048
	})
}
test();
```
- Using Cdn
```html
<html>
	<head>
		<title>Test Discord Fetcher Cdn</title>
		<script src="https://unpkg.com/discord-fetcher@1.0.3/index.min.js"></script>
	</head>
	<center>
		<h1 id="username"></h1>
		<img id="avatar"></img>
		<br><br>
		<p id="flags"></p>
	</center>
	<script>
		async function test() {
			let user = await DiscordFetcher("747430301654974546", {
				dynamic: true,
				size: 1024,
				format: "png",
				log: false,
			});
			document.getElementById("avatar").src = user.avatar.url;
			document.getElementById("username").innerHTML = user.username
			document.getElementById("flags").innerHTML = user.flags.join(` - `) || "NO_FLAGS"
		}
		test();
	</script>
</html>
```
- Example Output:
```json
{
  "id": "747430301654974546",
  "username": "AzizJaber",
  "tag": "AzizJaber#5414",
  "discriminator": "5414",
  "bot": false,
  "verified": false,
  "avatar": {
    "key": "a_e24c2f4e05def7620a6521fb0e933ce8",
    "url": "https://cdn.discordapp.com/avatars/747430301654974546/a_e24c2f4e05def7620a6521fb0e933ce8.gif?size=2048"
  },
  "flags": [ "HOUSE_BRAVERY", "DISCORD_NITRO" ]
}
```

## 💖 Any Bug Or Suggestion !!
- Contact With Me Discord: **AzizJaber#5414**
- Or Az Dev [Discord Server](https://discord.gg/cMKxudNhdc)

## ❗ License
[MIT](https://choosealicense.com/licenses/mit/)

## 💌 AzizJaber
[Discord Server](https://discord.gg/cMKxudNhdc)
[Website](https://azizjaber.xyz)