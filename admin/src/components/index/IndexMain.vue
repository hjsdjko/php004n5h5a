<template>
	<div style="height: 100%;">
		<el-main :style='"vertical" == "vertical" ? (2 == 1 ? {"minHeight":"100%","padding":"0","margin":"0 0 0 210px","position":"relative","display":"block"} : (2 == 2 ? (isCollapse ? {"minHeight":"100%","padding":"111px 0 0 36px","margin":"0","position":"relative","background":"#f5f5f5","display":"block"} : {"minHeight":"100%","padding":"111px 0 0 193px","margin":"0","position":"relative","background":"#f5f5f5","display":"block"}) : "")) : {"minHeight":"100%","margin":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20230810/535be3394035428fa4bcf636d44a8bf7.gif) no-repeat 80% top,#E8EFF7"}'>
			<!-- top -->
			<index-header :style='{"boxShadow":"0 0px 0 0 rgba(0,0,0,.01), 0 0px 0px 0 rgba(0,0,0,.06)","padding":"8px 40px 8px 40px","margin":"0 auto","borderColor":"#a7b1c2","alignItems":"center","color":"#fff","display":"flex","justifyContent":"flex-end","top":"0px","left":"0px","background":"#19aa8d","borderWidth":"0 0 1px","width":"calc(100% + 0px)","fontSize":"14px","position":"fixed","borderStyle":"solid","zIndex":"1002","height":"73px"}'></index-header>
			
			<!-- menu -->
			<template v-if="'vertical' == 'vertical'">
			  <template v-if="2 == 1">
				<index-aside :style='{"boxShadow":"1px 0 6px  rgba(64, 158, 255, .3)","overflow":"hidden","top":"0","left":"0","background":"#304156","bottom":"0","width":"210px","fontSize":"0px","position":"fixed","height":"100%","zIndex":"1001"}'></index-aside>
			  </template>
			  <template v-if="2 == 2">
				<index-aside :is-collapse="isCollapse" @oncollapsechange="collapseChange" :style='isCollapse ? {"boxShadow":"0px 0 0px rgba(255,205,155,1)","padding":"20px 0 0","borderColor":"#d9d9d9","bottom":"0","transition":"width 0.3s","overflow":"hidden","top":"81px","left":"0","background":"#19aa8d","borderWidth":"0 1px 0 0","width":"36px","fontSize":"0px","position":"fixed","borderStyle":"solid","height":"100%","zIndex":"1003"} : {"boxShadow":"0px 0 0px rgba(255,205,155,1)","padding":"30px 0px 0","borderColor":"#acb0b9","bottom":"0px","transition":"width 0.3s","overflow":"hidden","top":"81px","left":"0px","background":"url(http://codegen.caihongy.cn/20231024/be133e1659f34eb09400c8921af694b9.png) no-repeat center top / 100% auto,#fff","borderWidth":"0 1px 0 0","width":"193px","fontSize":"14px","position":"fixed","borderStyle":"solid","height":"100%","zIndex":"1001"}'></index-aside>
			  </template>
			</template>
			<template v-if="'vertical' == 'horizontal'">
			  <template v-if="2 == 1">
				<index-aside :style='{"width":"100%","borderColor":"#efefef","borderStyle":"solid","background":"#304156","borderWidth":"0 0 1px 0","height":"auto"}'></index-aside>
			  </template>
			  <template v-if="2 == 2">
				<index-aside :style='{"borderColor":"#efefef","margin":"0 auto","background":"url(http://codegen.caihongy.cn/20230809/104d9fb9547b4a42b38cacc2d186a93c.png) no-repeat left center / auto 100%,url(http://codegen.caihongy.cn/20230809/de921bf03ceb48bcb43a3fd4a4a02c4b.png) no-repeat right center / auto 100%,linear-gradient(270deg, rgba(51,63,136,1) 0%, rgba(88,100,173,1) 40%, rgba(51,63,136,1) 100%),#333f88","borderWidth":"0 0 1px 0","display":"flex","width":"calc(100% - 60px)","borderStyle":"solid","height":"auto"}'></index-aside>
			  </template>
			</template>
			
			<!-- breadcrumb -->
			<bread-crumbs :title="title" :style='{"padding":"0 30px","margin":"0px auto","borderColor":"#eee","top":"73px","borderWidth":"0 0 3px","background":"rgba(255,255,255,.96)","display":"none","width":"calc(100% - 0px)","fontSize":"16px","position":"fixed","borderStyle":"solid","zIndex":"999"}' class="bread-crumbs"></bread-crumbs>
			
			<!-- TagsView -->
			<tags-view />
			
			<router-view class="router-view"></router-view>
		</el-main>
	</div>
</template>

<script>
	import IndexAside from '@/components/index/IndexAsideStatic'
	import IndexHeader from '@/components/index/IndexHeader'
	import TagsView from '@/components/index/TagsView'
	import menu from "@/utils/menu";
	export default {
		components: {
			IndexAside,
			IndexHeader,
			TagsView
		},
		data() {
			return {
				menuList: [],
				role: "",
				currentIndex: -2,
				itemMenu: [],
				title: '',
				isCollapse: false,
			};
		},
		mounted() {
			let menus = menu.list();
			this.menuList = menus;
			this.role = this.$storage.get("role");
		},
		created() {
			this.init();
		},
		methods: {
			init(){
				this.$nextTick(()=>{
					
				})
			},
			collapseChange(collapse) {
				this.isCollapse = collapse
			},
			menuHandler(menu) {
				this.$router.push({
					name: menu.tableName
				});
				this.title = menu.menu;
			},
			titleChange(index, menus) {
				this.currentIndex = index
				this.itemMenu = menus;
			},
			homeChange(index) {
				this.itemMenu = [];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
			},
			centerChange(index) {
				this.itemMenu = [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "修改密码",
					"tableName": "updatePassword"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "个人信息",
					"tableName": "center"
				}];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
				
			}
		}
	};
</script>
<style lang="scss" scoped>
	a {
		text-decoration: none;
		color: #555;
	}

	a:hover {
		background: #00c292;
	}
	
	.el-main {
		padding: 0;
		display: block;
	}

	.nav-list {
		width: 100%;
		margin: 0 auto;
		text-align: left;
		margin-top: 20px;

		.nav-title {
			display: inline-block;
			font-size: 15px;
			color: #333;
			padding: 15px 25px;
			border: none;
		}

		.nav-title.active {
			color: #555;
			cursor: default;
			background-color: #fff;
		}
	}

	.nav-item {
		margin-top: 20px;
		background: #FFFFFF;
		padding: 15px 0;

		.menu {
			padding: 15px 25px;
		}
	}
	
	.detail-form-content {
	    background: transparent;
	}
</style>
