
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
			count_index: 0,
			show: true,
			show_in_basket: true,
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

			console.log(event)

			//className = event.target.className;
			this.button_id = event.target.id;
			console.log('button_id='+this.button_id)
			//передаем src картинки
			this.buy_products_img[this.count_index] = this.products[this.button_id].img_src;
			//передаем описание
			this.buy_products_about[this.count_index] = this.products[this.button_id].about;
			//передаем цену
			this.buy_products_price[this.count_index] = this.products[this.button_id].price;
			this.buy_products_price_basket[this.count_index] = this.products[this.button_id].price;
		
			this.button_id = '';
			//this.className = '';
			this.buy_products_count[this.button_id]=1;
			this.show = false;
			console.log('this.buy_products_img='+this.buy_products_img);

			
			console.log('this.buy_products_img='+this.buy_products_img[0])
		},
		priceVolumeUp(index){
			//увеличиваем счетчик в массиве чтобы у каждого эл-та был свой count
			this.buy_products_count[index] = this.buy_products_count[index]+1;
			this.buy_products_price_basket[index] = this.buy_products_price[index]*this.buy_products_count[index];
		},
		priceVolumeDown(index){
			if(this.buy_products_count[index] > 0){
				this.buy_products_count[index] = this.buy_products_count[index]-1;
				
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