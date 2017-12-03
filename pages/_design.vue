<template>
	<div>

		<layoutselect></layoutselect>
		
		<div class="wrapper">
			<h1 contenteditable="true" class="heading">{{heading}}</h1>
			<p contenteditable="true" class="subline">{{subline}}</p>
		</div>

		<infotoast></infotoast>

	</div>
</template>

<script>
import infotoast from '@/components/infotoast.vue';
import layoutselect from '@/components/layoutselect.vue';

export default {
	components: {
		infotoast,
		layoutselect
	},
	layout(context) {
		return context.params.design;
	},
	asyncData(context) {
		return {
			heading: context.query.heading || `You are beautiful`,
			subline: context.query.subline || `Let's change the world!`
		}
	} 
}
</script>


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

	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;

	-webkit-print-color-adjust:exact;
}

.wrapper {
	position: absolute;
	z-index: 50;

	left: 2.5vw;

	width: 95vw;
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
</style>
