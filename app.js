
Vue.createApp({
	data() {
		return {
			//переменные
			products: [
			{img_src: 'img/1.png', price: 1000, about: 'Лодка надувная, зеленая.'},
			{img_src: 'img/2.png', price: 2000, about: 'ЛЛодка надувная, желтая.'},
			{img_src: 'img/3.png', price: 3000, about: 'Лодка с веслами.'}
			],
			index: ''
		}
	},
	methods: {
		//методы
		clickBuy(){
				console.log('это клик!')
		}
	}
}).mount('#app');