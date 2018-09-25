<template>
	<aside v-show="showInfos">
		<p class="infotext">Do not forget to activate "Print Background Images / Background Graphics" in your browsers printing dialog. Always review your print in the preview before printing.</p>
		<strong class="close" @click="showInfos = false">X</strong>
	</aside>	
</template>

<script>
export default {
	data() {
		return { showInfos: true }
	}
}
</script>


<style scoped>
@media print {
	aside {
		display: none !important;
	}
}

aside {
	position: absolute;
	z-index: 100;
	bottom: 32px;
	left: 0;
	right: 0;

	display: flex;

	margin-left: auto;
	margin-right: auto;
	padding: 20px 20px;

	max-width: 680px;

	color: #000000;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

	border-radius: 3px;
	background-color: rgba(255, 255, 255, 0.75);
	box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
}

.infotext {
	margin: 0;

	font-size: 12pt;
}

.close {
	margin: 0 8px;

	cursor: pointer;
}
</style>
