<template>
	<section>
		
		<div class="wrapper">
			<h1 contenteditable="true">Saal 1</h1>
			<p contenteditable="true">Das geht nicht in Saal 1!</p>
		</div>

	</section>
</template>

<script>
export default {
	layout(context) {
		return context.params.design;
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
</style>
