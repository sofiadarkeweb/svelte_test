import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		name: "sofia",
		surname: "darke",
	},
});

export default app;
