<template>
	<div>
		<nuxt/>

		<img src="~/assets/weekendHack0x3/img/wh-logo.svg" alt="" id="wh-logo" class="absolute">
		<img src="~/assets/weekendHack0x3/img/wh-info.svg" alt="" id="wh-info" class="absolute">
	</div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Arvo:400,700);

body {
	font-family: 'Arvo', serif;

	background-image: url('~/assets/weekendHack0x3/img/wh-waves.svg');
	background-size: 125%;
	background-position: center;
}

.absolute {
	position: absolute;
	height: 2.5cm;
	width: auto;
}

#wh-logo {
	bottom: 0.75cm;
	left: 1cm;
}

#wh-info {
	bottom: 0.75cm;
	right: 1cm;
}
</style>
