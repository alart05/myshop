<template>
	<div>
		<img class="collections__img" :src="img" >
		<div class="collections__title">{{title}}</div>
		<div class="collections__text">{{text}}</div>
		<div v-for="row, index in collections" :key="index" class="collections__row">
			<Card v-for="product in row" :key="product.id" :product="product" />
		</div>
	</div>
</template>

<script>
import Card from '@/components/Card'
export default {
	name: 'Collection',
	components: {
		Card
	},
	data () {
		return {
			img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
			title: 'УКОРОЧЕННАЯ ФУТБОЛКА ИЗ ХЛОПКА', 
			text: 'Укороченная футболка из 100% хлопка. Круглый вырез.', 
			collections: [
				[
					{
						title: 'футболка',
						img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
						price: 1300,
						id: 1,
					},
					{
						title: 'штаны',
						img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
						price: 1800,
						id: 2,
					},
					{
						title: 'кеды',
						img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
						price: 2200,
						id: 3,
					}
				],
				[
					{
						title: 'туфли',
						img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
						price: 4200,
						id: 4,
					}
				]
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.collections__img{
	width: 450px;
	margin: 40px auto 0 auto;
	display: flex;
}
.collections__title{
	font-weight: 700;
	padding-top: 50px;
	display: flex;
	justify-content: center;
	font-size: 23px;
}
.collections__text{
	padding-top: 25px;
	display: flex;
	justify-content: center;
}
.collections__row {
	display: flex;
	justify-content: space-evenly;
	margin-top: 50px;
}
</style>