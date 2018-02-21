<template>
	<section id="hafenbutze18">
		<nuxt/>

		<img src="~/assets/img/hafenbutze18/wappen.svg" alt="" id="flWappen" class="absolute">
	</section>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Unna');

[id='hafenbutze18'] {
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
	padding: 0 !important;
	
	color: navy;
	&::after{
		content: "";
		background: url('~/assets/img/hafenbutze18/flensburgMap.svg');
		opacity: 0.5;
		background-size: cover;
		background-position: center;
		top: 0;
		left: 0;
		bottom: 0;
  		right: 0;
  		position: absolute;
  		z-index: -1;   
	}
	
	.heading {
		font-size: 110pt;
	}
	.subline {
		font-family: 'Unna', serif;
		text-transform: lowercase;

		&::before {
			content: '⚓';
		}
		&::after {
			content: '⚓';
		}
	}
}

.absolute {
	position: absolute;
	height: 7.5cm;
	width: auto;
}

#flWappen {
	bottom: 0.75cm;
	right: 1cm;
}
</style>
