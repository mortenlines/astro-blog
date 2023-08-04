<template>
<h3>{{greeting}}! Så kjekt at du tar deg tid til å besøke siden <i>min</i>!🙏</h3>
</template>

<script lang="ts">
export default {
	setup() {
    const greetings = ["Hey", "Hei på deg", "Halla", "Hallo", "Hei", "Heia"]
    const greeting = greetings[Math.floor(Math.random()*greetings.length)];

		return {
      greeting,
		};
	},
};
</script>
