<template>
  <router-link :to="{ name: 'Product', params: { id: product.id }}" class="card">
		<img class="card__img" :src="product.img">
		<div class="card__info">
			<div class="info__text">{{ product.title }}</div>
			<div class="info__text">{{ product.price }}₽</div>
		</div>
  </router-link>
</template>

<script>
export default {
	name: 'Card',
	props: {
		product: { 
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>
.card{
	position: relative;
	width: 300px;

	&:hover{
		filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.3));
	}
}
.card__img{
	width: 100%;
	height: 100%;
	border-radius: 10px;
}
.card__info{
	background: rgba(60, 60, 60, 0.7);
	border-radius: 0px 0px 10px 10px;   
	position: absolute;
	width: 100%;
	padding: 20px; 
	box-sizing: border-box;
	bottom: 0;
}
.info__text{
	color: white;
	font-size: 24px;
	line-height: 24px;
	text-align: center;
}
</style>