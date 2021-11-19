<script>
	import Modal from "./Modal.svelte"
	export let name;
	export let surname;
	let beltcolor = 'black'
	$: fullName = `${name} ${surname}`
	let people = [
		{name: "Sofia", beltcolor: "green", age: "40", id: "1"},
		{name: "Otis", beltcolor: "blue", age: "6", id: "2"},
		{name: "Trilby", beltcolor: "orange", age: "9", id: "3"},
		{name: "Moa", beltcolor: "black", age: "29", id: "4"}
	];

	const handleClick = (id) => {
		people = people.filter((person) => person.id != id)
		console.log(people)
	}
	
	// const handleClick = () => {
	// 	beltcolor = 'orange'
	// }

	// const handleInput = (e) => {
	// 	beltcolor = e.target.value
	// }

	let num = 25;
</script>


<Modal message="this is your offer today" isPromo={true}/>

<!-- {#if num > 20}
	<p>Number is greater than 20, the number is {num}</p>
	{:else if num < 20}
	<p>Number is smaller than 20, the number is {num}</p>
	{/if} -->

<main>
	<!-- <h1>Hello {name} {surname}!</h1> -->
	
	{#each people as person (person.id)}
	<div>
		<h1>{person.name}</h1>
		{#if person.beltcolor === "black"}
		<h3>MASTER NINJA</h3>
		{/if}
		<p>{person.age} years old, {person.beltcolor} belt.</p>
		<button on:click={() => handleClick(person.id)}>delete</button>
	</div>
	{:else}
		<p>There are no people to show</p>
	{/each}
	
	
	<!-- <p style= "color: {beltcolor}">{fullName} has got {beltcolor} belt</p>
	<p style= "color: {beltcolor}">{fullName} has got {beltcolor} belt</p> -->
	<!-- <div>{people[0].name}</div>  -->
	<!-- <button on:click={handleClick}>Update color</button>  -->
	<!-- <input type="text" on:input={handleInput} value={beltcolor}> -->
	<!-- <input type="text" bind:value={name}>
	<input type="text" bind:value={surname}>
	<input type="text" bind:value={beltcolor}> -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>