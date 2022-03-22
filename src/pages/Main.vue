<template>
  <div>
		<img class="main__img" :src="img">
		<span class="main__text">Популярные товары</span>
		<div class='main__cards'>
			<Card v-for="product in collection" :key="product.id" :product="product"/>
		</div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
	components: {
		Card
	},
	data () {
		return {
			img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
			collection: [
				{
					title: 'блузка',
					img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
					price: 1300,
					id: 1,
				},
				{
					title: 'блузка',
					img: 'https://static.zara.net/photos///2022/V/0/1/p/2335/006/250/2/w/750/2335006250_2_2_1.jpg?ts=1647609704646',
					price: 1800,
					id: 2,
				},
			] 
		}
	}
}
</script>

<style lang="scss" scoped>
.main__img{
	width: 450px;
	margin: 40px auto 0 auto;
	display: flex;
}
.main__text{
	font-weight: 700;
	font-size: 25px;
	line-height: 54px;
	align-items: center;
	text-align: center;
	display: flex;
	justify-content: center;
	margin-top: 30px;
}
.main__cards{
	display: flex;
	justify-content: space-evenly;
	margin-top: 50px;
}
</style>>
