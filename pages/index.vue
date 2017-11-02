<template>
	<section>
		
		<div class="wrapper">
			<h1 contenteditable="true">Saal 1</h1>
			<p contenteditable="true">Das geht nicht in Saal 1!</p>
		</div>

		<img src="~/assets/img/wh-logo.svg" alt="" id="wh-logo" class="absolute">
		<img src="~/assets/img/wh-info.svg" alt="" id="wh-info" class="absolute">
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
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
  padding: 0 !important;
	overflow: hidden;

	font-family: 'Arvo', serif;

	background-image: url('~/assets/img/wh-waves.svg');
	background-size: 125%;
	background-position: center;

	-webkit-print-color-adjust:exact;
}

.wrapper {
	position: absolute;
	z-index: 100;

	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
}

[contenteditable="true"] {
	width: 100% !important;

	text-align: center;
}

h1 {
	margin: 0;
	margin-bottom: 0.5cm;

	font-size: 90pt;
}
p {
	margin: 0;
	margin-top: 0.5cm;

	font-size: 32pt;
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
