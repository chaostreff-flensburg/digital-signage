<template>
	<nav>
		<span class="selector-title">Styles:</span>
		<ul>
			<nuxt-link to="/34c3" tag="li">34c3</nuxt-link>
			<nuxt-link to="/weekendHack0x3" tag="li">weekendHack0x3</nuxt-link>
		</ul>
		<p>Need another Layout? <a href="https://github.com/chaostreff-flensburg/digitalSignage#creating-a-new-layout--design" target="_blank">Create your own!</a></p>
	</nav>
</template>

<style lang="scss" scoped>
@media print {
	nav {
		display: none;
	}
}

nav {
	position: absolute;
	z-index: 100;

	right: -120px;
	top: -1px;

	width: 180px;

	padding-top: 16px;
	padding-bottom: 16px;
	padding-left: 24px;
	padding-right: 42px;

	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;

	border-bottom-left-radius: 3px;
	background-color: rgba(255, 255, 255, 0.75);
	box-shadow: -2px 0px 20px 0px rgba(0,0,0,0.3);

	transition: right 0.2s;

	&:hover {
		right: -1px;
	}
}

ul {
	padding-left: 0;

	list-style: none;
}

.selector-title {
	margin-bottom: 12px;

	font-weight: bold;
}

li {
	padding: 4px 0;

	font-size: 14pt;

	color: #000000;
	cursor: pointer;

	transition: color 0.2s;

	&:hover {
		color: hsl(205, 100, 60);
	}
	&.nuxt-link-active {
		color: hsl(205, 100, 60);
	}
	&::before {
			content: '» ';
		}
}

p {
	color: #000000;
	font-size: 12pt;
}
</style>
