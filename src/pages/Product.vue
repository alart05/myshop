<template>
  <div class="product">
		<img class="product__img" :src="img" >
		<div class="product__description">
			<div>
				<div class="product__title">{{title}}</div>
				<div class="product__text">{{text}}</div>
			</div>
			<div>
				<div class="product__price">1300₽</div>
				<button class="product__buy">Купить</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Product',
	data () {
		return {
			img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
			title: 'УКОРОЧЕННАЯ ФУТБОЛКА ИЗ ХЛОПКА', 
			text: 'Укороченная футболка из 100% хлопка. Круглый вырез.', 
			price: 2300, 
		}
	}
}
</script>

<style lang="scss" scoped>
.product {
	margin-top: 40px;
	display: flex;
}
.product__img{
	width: 450px;
	margin: 0 55px 6px 55px;
	display: flex;
}
.product__title{
	font-weight: 700;
	display: flex;
	justify-content: center;
	font-size: 23px;
	margin-bottom: 20px;
}
.product__text{
	display: flex;
	justify-content: center;
}
.product__description{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 40px 0;
}
.product__price{
	font-weight: 700;
	font-size: 30px;
	text-align: end;
	margin-bottom: 20px;
}
.product__buy{
	margin-left: auto;
	color: #B2B2B2;
	width: 120px;
	height: 35px;
	font-size: 20px;
	border-radius: 5px;
	border: 2px solid #B2B2B2;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:hover{
		filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.3));
	}
}
</style>