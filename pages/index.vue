<template>
	<section>

		<div class="background">
			<img src="~/assets/img/wh-logo.svg" alt="" id="wh-logo" class="absolute">
			<img src="~/assets/img/wh-info.svg" alt="" id="wh-info" class="absolute">
		</div>
	</section>
</template>

<style lang="scss">
@media print {
	@page {
		size: A4 landscape;
		overflow: hidden;
		margin: 0cm;
	}
}

body {
	height: 100%;

	margin: 0 !important; 
  padding: 0 !important;
	overflow: hidden;

	font-family: 'Arvo', serif;

	background-image: url('~/assets/img/wh-waves.svg');
	background-size: 125%;
	background-position: center;

	-webkit-print-color-adjust:exact;
}

.background {
	width: 100vw;
	height: 100vh;

	overflow: hidden;
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
