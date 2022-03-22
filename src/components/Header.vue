<template>
	<div class="header">
		<div @click="disabled()">
			<router-link :to="{ name: 'Main' }">
				<img class="header__logo" src="@/assets/MYSHOP.svg">
			</router-link>
		</div>
		<div class="header__clothes">
			<div @click="disabled(); activeJacket = true">
				<router-link :to="{ name: 'Collection', params: { clothes: 'jacket' }}">
					<h3 class="clothes" :class="activeJacket ? 'clothes__active':''">пиджаки</h3>
				</router-link>
			</div>
			<div @click="disabled(); activeTrousers = true">
				<router-link :to="{ name: 'Collection', params: { clothes: 'trousers' }}">
					<h3 class="clothes" :class="activeTrousers ? 'clothes__active':''">брюки</h3>
				</router-link>
			</div>
			<div @click="disabled(); activeSkirt = true">
				<router-link :to="{ name: 'Collection', params: { clothes: 'skirt' }}">
					<h3 class="clothes" :class="activeSkirt ? 'clothes__active':''">юбки</h3>
				</router-link>
			</div>
			<img class="header__basket" src="@/assets/basket.svg">
		</div>
	</div>
</template>

<script>

export default {
  name: 'Header',
	data(){
		return{
			activeJacket: false,
			activeTrousers: false,
			activeSkirt: false,
		}
	},
	methods: {
		disabled() {
			this.activeJacket = false
			this.activeTrousers = false
			this.activeSkirt = false
		}
	}
}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    justify-content: space-between;
		margin: 20px 30px 0px 30px;
  }
  .header__clothes{
    align-items: center;
    display: flex;
		a {
			text-decoration: none;
			color: black;
		}
  }
  .clothes{
    margin: 0 20px;
    cursor: pointer;
  }
	.clothes__active{
		color:#E52020;
	}
  .header__basket{
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  .header__logo{
    width: 222px;
    height: 68px;
    cursor: pointer;
  }
</style> >

