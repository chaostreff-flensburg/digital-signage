<template>
	<section id="kliemannsland">
		<nuxt/>

		<img src="~/assets/img/kliemannsland/Kliemannsland_logo-schwarz.png" alt="Logo Kliemannsland" id="kliemannsland-logo" class="absolute">
    <img src="~/assets/img/kliemannsland/Kliemannsland_Illus_Karte.png" alt="Karte Kliemannsland" id="kliemannsland-karte">
    <img src="~/assets/img/kliemannsland/Kliemannsland_Illus_Huhn_1.png" alt="Huhn Kliemannsland" id="kliemannsland-huhn">
	</section>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Vollkorn');

#kliemannsland {
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
  padding: 0 !important;

	font-family: 'Lato', sans-serif;
}

.absolute {
	position: absolute;
	height: 3.5cm;
	width: auto;
}

.subline {
  font-family: 'Vollkorn', serif;
}

#kliemannsland-logo {
	top: 1cm;
	left: 2cm;
}

#kliemannsland-karte {
  position: absolute;
  height: 5cm;
  width: auto;
  bottom: 1cm;
  right: 2.5cm;
}

#kliemannsland-huhn {
  position: absolute;
  height: 5cm;
  width: auto;
  bottom: 1cm;
  left: 2.5cm;
}

</style>
