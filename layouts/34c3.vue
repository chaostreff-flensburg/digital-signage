<template>
	<div>
		<nuxt/>

		<div id="wh-logo" class="absolute">
			34C3.tuwat!
		</div>
		<div id="wh-info" class="absolute">
			34 Chaos Communication Congress<br>
			27.-30. Dezember 2017<br>
			Leipzig Messe
		</div>
	</div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto+Slab:400,700);
@font-face {
	font-family: '3 theHard way RMXfenotype';
	font-style: normal;
	font-weight: normal;
	src: local('3 theHard way RMXfenotype'), url('~/assets/34c3/font/3_theHard_way_RMX.woff') format('woff');
}

body {
	width: 100vw;
	height: 100vh;

	margin: 0 !important;
  padding: 0 !important;
	overflow: hidden;

	font-family: '3 theHard way RMXfenotype';
	font-weight: normal;

	background-image: url('~/assets/34c3/img/171119_Phasenpruefer_Double_Outline_Grey15.svg');
	background-size: 50%;
	background-position: 50%;
	background-repeat: no-repeat;

	-webkit-print-color-adjust: exact;
}

h1 {
	margin: 0;
	margin-bottom: 0.5cm;

	font-family: 'Roboto Slab', serif;
	font-size: 90pt;
}

.absolute {
	position: absolute;
	height: 2.5cm;
	width: auto;
}

#wh-logo {
	bottom: 0;
	left: 1cm;
	color: #A41C31;
}

#wh-info {
	bottom: .75cm;
	right: 1cm;
	line-height: 1.6em;
	text-align: right;
	color: #A41C31;
}
</style>
