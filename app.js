
Vue.createApp({
	data() {
		return {
			//переменные
			products: [
			{img_src: 'img/1.png', price: 1000, about: 'Лодка надувная, зеленая.'},
			{img_src: 'img/2.png', price: 2000, about: 'Лодка надувная, желтая.'},
			{img_src: 'img/3.png', price: 3000, about: 'Лодка с веслами.'}
			],
			className: '',
			button_id: '',
			count: 1,
			show: true,
			buy_products_img: [],
			buy_products_about: [],
			buy_products_price: [],
			buy_products_price_basket: [],
			buy_products_count: []
		}
	},
	methods: {
		//методы
		clickBuy(event){
			//className = event.target.className;
			button_id = event.target.id;
			//передаем src картинки
			this.buy_products_img[button_id] = this.products[button_id].img_src;
			//передаем описание
			this.buy_products_about[button_id] = this.products[button_id].about;
			//передаем цену
			this.buy_products_price[button_id] = this.products[button_id].price;
			this.buy_products_price_basket[button_id] = this.products[button_id].price;
			//зачищаем переменную с классом
			this.button_id = button_id;
			//this.className = '';
			this.buy_products_count[button_id]=1;
			this.show = false;
		},
		priceVolumeUp(index){
			//увеличиваем счетчик в массиве чтобы у каждого эл-та был свой count
			this.buy_products_count[index] = this.buy_products_count[index]+1;
			this.buy_products_price_basket[index] = this.buy_products_price[index]*this.buy_products_count[index];
		},
		priceVolumeDown(index){
			if(this.buy_products_count[index] > 0){
				this.buy_products_count[index] = this.buy_products_count[index]-1;
				console.log('счетчик больше 0 ='+this.buy_products_count[index])
				this.buy_products_price_basket[index] = this.buy_products_price[index]*this.buy_products_count[index];
			}
		},
		toDelete(index){
			this.buy_products_img.splice([index],1);
			this.buy_products_about.splice([index],1);
			this.buy_products_price.splice([index],1);
			this.buy_products_price_basket.splice([index],1);
			
			if(this.buy_products_img.length == 0){
				this.show = true;
			}
			
		}
	},
	/*computed: {
		getIndex(index){
			return this.index = index;
		}
	}*/
}).mount('#app');