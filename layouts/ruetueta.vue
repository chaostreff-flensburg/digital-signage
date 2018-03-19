<template>
	<section id="ruetueta">
		<nuxt/>

		<img src="~/assets/img/ruetueta/ruetueta-logo.svg" alt="Logo Rütüta" id="ruetueta-logo" class="absolute">
		<img src="~/assets/img/ruetueta/ruetueta-info.svg" alt="" id="ruetueta-info" class="absolute">
	</section>
</template>

<style lang="scss">

#ruetueta {
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
  padding: 0 !important;

	font-family: monaco, Consolas, Lucida Console, monospace;
}

.absolute {
	position: absolute;
	height: 2.5cm;
	width: auto;
}

#ruetueta-logo {
  transform: rotate(-20deg);
	top: 1.5cm;
	left: 2cm;
}

#ruetueta-info {
	bottom: 0.75cm;
	right: 1cm;
}
</style>
