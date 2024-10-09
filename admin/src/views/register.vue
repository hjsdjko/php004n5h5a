<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231027/5fa8bb2ec9d64c91b210d7855e42eb9b.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"20px","margin":"40px 0 40px 45vw","borderRadius":"20px","textAlign":"center","background":"#fff","width":"40vw","fontSize":"14px","position":"relative","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"0px","margin":"20px auto 20px","borderColor":"#eee","color":"#333","background":"none","borderWidth":"0px","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"22px","borderStyle":"solid","fontWeight":"600"}' class="title">智慧农业信息交流论坛注册</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
					<el-input  v-model="ruleForm.yonghuzhanghao"  autocomplete="off" placeholder="用户账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
					<el-input  v-model="ruleForm.yonghuxingming"  autocomplete="off" placeholder="用户姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shoujihao')?'required':''">手机号：</div>
					<el-input  v-model="ruleForm.shoujihao"  autocomplete="off" placeholder="手机号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shenfenzheng')?'required':''">身份证：</div>
					<el-input  v-model="ruleForm.shenfenzheng"  autocomplete="off" placeholder="身份证"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0px solid #fff","cursor":"pointer","padding":"0 0 0 30px","margin":"30px auto 5px","color":"#fff","borderRadius":"50px","background":"#19aa8d","display":"block","width":"50%","letterSpacing":"4px","fontSize":"20px","height":"40px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"20px 0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"50%","lineHeight":"1","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yonghu'){
				this.ruleForm = {
					yonghuzhanghao: '',
					mima: '',
					yonghuxingming: '',
					xingbie: '',
					nianling: '',
					shoujihao: '',
					shenfenzheng: '',
					touxiang: '',
					status: '',
					passwordwrongnum: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			this.yonghuxingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
						this.$message.error(`用户账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
						this.$message.error(`用户姓名不能为空`);
						return
					}
					if(`yonghu` == this.tableName && this.ruleForm.shoujihao &&(!this.$validate.isMobile(this.ruleForm.shoujihao))){
						this.$message.error(`手机号应输入手机格式`);
						return
					}
					if(`yonghu` == this.tableName && this.ruleForm.shenfenzheng &&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
						this.$message.error(`身份证应输入身份证格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20231027/5fa8bb2ec9d64c91b210d7855e42eb9b.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px;
						color: #666;
						background: #f2f2f2;
						width: calc(100% - 0px);
						font-size: 14px;
						border-color: #ddd;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px;
						color: #666;
						background: #f2f2f2;
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px 0 30px;
						color: #666;
						background: #f2f2f2;
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px 0 30px;
						color: #666;
						background: #f2f2f2;
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  background: #f2f2f2;
		  		  width: 160px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  background: #f2f2f2;
		  		  width: 160px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  background: #f2f2f2;
		  		  width: 160px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				position: absolute;
				right: 5px;
				content: "*";
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
