<template>
	<section id="mikrogravitation2018">
		<nuxt/>

		<img src="~/assets/img/mikrogravitation2018/emblem.svg" alt="" id="mikro18-logo" class="absolute">
		<!-- <img src="~/assets/img/mikrogravitation2018/typo-2018.svg" alt="" id="mikro18-year" class="absolute"> -->
		<img src="~/assets/img/mikrogravitation2018/typo-w.svg" alt="" id="typo" class="absolute">
		<div id="typobg" class="absolute"></div>
	</section>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Expanded:400,900);

#mikrogravitation2018 {
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
  padding: 0 !important;

	color: #ffffff;
	font-family: 'Encode Sans Semi Expanded', sans-serif;

	background-image: url('~/assets/img/mikrogravitation2018/rainbow.svg');
	background-size: 101%;
	background-position: center;

}
h1, p[contenteditable="true"] {
	background-color: #282A36;
}
h1 {
	margin-bottom: 0.5cm;
	padding: 8px 24px;

	font-size: 60pt;
	font-weight: 900;
	text-transform: uppercase;
}
p[contenteditable="true"] {
	margin-top: 0;
	padding: 12px 16px;
}

.absolute {
	position: absolute;
	height: 2.5cm;
	width: auto;
}

#mikro18-logo {
	top: 0.75cm;
	left: 1cm;

	width: 5cm;
	height: auto;
}

#mikro18-year {
	bottom: 2cm;
	right: 0.3cm;

	width: 7cm;
	height: auto;
}

#typobg {
	bottom: 0cm;
	left: 0cm;
	right: 0cm;

	height: 2.5cm;

	background-color: #282A36;
	overflow: hidden;
}

#typo {
	bottom: 0.5cm;
	right: 0.5cm;

	width: auto;
	height: 1.5cm;

	z-index: 10;
}

</style>
