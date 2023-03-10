<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import ErrorInfoVue from '../components/ErrorInfo.vue';

import axios from 'axios'
const route = useRoute()
let config = ref(null)
let loading = ref(true)
if(route.query.config){
    axios.get(`${route.query.config}/config.json`)
    .then((response) => {
        if(response.data) {
            config.value = response.data
        }
    })
    .finally(()=>{
        loading.value = false
    })
}else{
    loading.value = false
}
</script>

<template>
    <template v-if="config">
        <template v-for="(style, index) in config.css" :key="index">
            <link rel="stylesheet" :href="`${(style.includes('http') ? '' : route.query.config)}${style}`">
        </template>
        <div class="wrapper">
            <template v-for="(element, index) in config.editable_elements" :key="index">
                <h1 v-if="element.tag === 'h1'" contenteditable="true" :class="element.class">{{ element.default }}</h1>
                <h2 v-else-if="element.tag === 'h2'" contenteditable="true" :class="element.class">{{ element.default }}</h2>
                <h3 v-else-if="element.tag === 'h3'" contenteditable="true" :class="element.class">{{ element.default }}</h3>
                <h4 v-else-if="element.tag === 'h4'" contenteditable="true" :class="element.class">{{ element.default }}</h4>
                <h5 v-else-if="element.tag === 'h5'" contenteditable="true" :class="element.class">{{ element.default }}</h5>
                <h6 v-else-if="element.tag === 'h6'" contenteditable="true" :class="element.class">{{ element.default }}</h6>
                <p v-else-if="element.tag === 'p'" contenteditable="true" :class="element.class">{{ element.default }}</p>
                <p v-else-if="element.tag === 'span'" contenteditable="true" :class="element.class">{{ element.default }}</p>
            </template>
        </div>
        <section :id="config.name">
            <template v-for="(element, index) in config.styling_elements" :key="index">
                <img 
                    v-if="element.tag === 'img'" 
                    :class="element.class" 
                    :alt="element.alt" 
                    :src="element.src" 
                    :id="element.id"
                    />
            </template>
        </section>
    </template>
    <div v-else class="center-content">
        <template v-if="loading">
            <div id="loading"></div>
        </template>
        <ErrorInfoVue v-else/>
    </div>
</template>


<style>
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
	align-items: center;
}
[contenteditable="true"] {
	text-align: center;
}
h1 {
	margin: 0;
	margin-bottom: 0.5cm;
	font-size: 75pt;
}
p {
	margin: 0;
	margin-top: 0.5cm;
	font-size: 32pt;
}
.center-content{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.error-notification{
    padding: 2rem;
}
#loading {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #3232d5;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>