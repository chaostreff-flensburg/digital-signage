<template>
	<section id="34c3">
		<nuxt/>

		<img src="~/assets/img/34c3/34c3-tuwat.svg" alt="" id="tuwat" class="absolute">
	</section>
</template>

<style lang="scss">
@import '../assets/fonts/34c3/stylesheet.scss';
@import url('https://fonts.googleapis.com/css?family=Unna');

[id='34c3'] {
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
	padding: 0 !important;
	
	color: rgb(0, 0, 0);

	background-image: url('~/assets/img/34c3/Phasenpruefer.svg');
	background-size: cover;
	background-position: center;

	.heading {
		font-family: 'three_the_hard_wayregular';
		font-size: 110pt;
	}
	.subline {
		font-family: 'three_the_hard_wayregular';
		text-transform: uppercase;

		&::before {
			content: '»';
		}
		&::after {
			content: '«';
		}
	}
}

.absolute {
	position: absolute;
	height: 4cm;
	width: auto;
}

#tuwat {
	bottom: 0.75cm;
	right: 1cm;
}
</style>
