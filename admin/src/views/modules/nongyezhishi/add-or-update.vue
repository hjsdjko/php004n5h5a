<template>
	<div class="addEdit-block" :style='{"minHeight":"calc(100vh - 200px)","padding":"10px 0 30px","margin":"0 auto","color":"#666","background":"none","width":"calc(100% - 20px)","fontSize":"12px","height":"100%"}'>
		<el-form
			:style='{"border":"1px solid #ddd","padding":"30px 0","boxShadow":"inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1)","borderColor":"#ccc","alignItems":"flex-start","borderRadius":"0px","flexWrap":"wrap","background":"#eee","borderWidth":"1px","display":"flex","fontSize":"inherit","borderStyle":"solid"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="200px"
		>
			<template >
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="标题" prop="biaoti">
					<el-input v-model="ruleForm.biaoti" placeholder="标题" clearable  :readonly="ro.biaoti"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="标题" prop="biaoti">
					<el-input v-model="ruleForm.biaoti" placeholder="标题" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="select" v-if="type!='info'"  label="农业分类" prop="nongyefenlei">
					<el-select :disabled="ro.nongyefenlei" v-model="ruleForm.nongyefenlei" placeholder="请选择农业分类" >
						<el-option
							v-for="(item,index) in nongyefenleiOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="农业分类" prop="nongyefenlei">
					<el-input v-model="ruleForm.nongyefenlei"
						placeholder="农业分类" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.tupian" label="图片" prop="tupian">
					<file-upload
						tip="点击上传图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.tupian?ruleForm.tupian:''"
						@change="tupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.tupian" label="图片" prop="tupian">
					<img v-if="ruleForm.tupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.tupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info'&& !ro.shipin" label="视频" prop="shipin">
					<file-upload
						tip="点击上传视频"
						action="file/upload"
						:limit="1"
						:type="2"
						:multiple="true"
						:fileUrls="ruleForm.shipin?ruleForm.shipin:''"
						@change="shipinUploadChange"
					></file-upload>
				</el-form-item> 
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.shipin" label="视频" prop="shipin">
					<el-button :style='{"border":"1px solid #ccc","cursor":"pointer","padding":"0 10px","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"4px","background":"#f6f6f6","width":"auto","lineHeight":"30px","fontSize":"12px","height":"30px"}' type="text" size="small" @click="download($base.url+ruleForm.shipin)">预览</el-button>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else-if="!ruleForm.shipin" label="视频" prop="shipin">
					<el-button :style='{"border":"1px solid #ccc","cursor":"pointer","padding":"0 10px","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"4px","background":"#f6f6f6","width":"auto","lineHeight":"30px","fontSize":"12px","height":"30px"}' type="text" size="small">无</el-button>
				</el-form-item>
			</template>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="textarea" v-if="type!='info'" label="注意事项" prop="zhuyishixiang">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="注意事项"
					  v-model="ruleForm.zhuyishixiang" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.zhuyishixiang" label="注意事项" prop="zhuyishixiang">
					<span :style='{"fontSize":"12px","lineHeight":"24px","color":"inherit","fontWeight":"500","display":"inline-block"}'>{{ruleForm.zhuyishixiang}}</span>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-if="type!='info'"  label="农业详情" prop="nongyexiangqing">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.nongyexiangqing" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 8px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.nongyexiangqing" label="农业详情" prop="nongyexiangqing">
                    <span :style='{"fontSize":"12px","lineHeight":"24px","color":"inherit","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.nongyexiangqing"></span>
                </el-form-item>
			<el-form-item :style='{"padding":"0","margin":"30px auto","alignItems":"center","textAlign":"center","background":"none","display":"flex","width":"100%","fontSize":"18px"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao10" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					确定
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao08" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				biaoti : false,
				nongyefenlei : false,
				tupian : false,
				shipin : false,
				zhuyishixiang : false,
				nongyexiangqing : false,
				thumbsupnum : false,
				crazilynum : false,
				clicktime : false,
				clicknum : false,
				discussnum : false,
				storeupnum : false,
			},
			
			
			ruleForm: {
				biaoti: '',
				nongyefenlei: '',
				tupian: '',
				shipin: '',
				zhuyishixiang: '',
				nongyexiangqing: '',
				clicktime: '',
			},
		
			nongyefenleiOptions: [],

			
			rules: {
				biaoti: [
				],
				nongyefenlei: [
				],
				tupian: [
				],
				shipin: [
				],
				zhuyishixiang: [
				],
				nongyexiangqing: [
				],
				thumbsupnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				crazilynum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				clicktime: [
				],
				clicknum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				discussnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				storeupnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='biaoti'){
							this.ruleForm.biaoti = obj[o];
							this.ro.biaoti = true;
							continue;
						}
						if(o=='nongyefenlei'){
							this.ruleForm.nongyefenlei = obj[o];
							this.ro.nongyefenlei = true;
							continue;
						}
						if(o=='tupian'){
							this.ruleForm.tupian = obj[o];
							this.ro.tupian = true;
							continue;
						}
						if(o=='shipin'){
							this.ruleForm.shipin = obj[o];
							this.ro.shipin = true;
							continue;
						}
						if(o=='zhuyishixiang'){
							this.ruleForm.zhuyishixiang = obj[o];
							this.ro.zhuyishixiang = true;
							continue;
						}
						if(o=='nongyexiangqing'){
							this.ruleForm.nongyexiangqing = obj[o];
							this.ro.nongyexiangqing = true;
							continue;
						}
						if(o=='thumbsupnum'){
							this.ruleForm.thumbsupnum = obj[o];
							this.ro.thumbsupnum = true;
							continue;
						}
						if(o=='crazilynum'){
							this.ruleForm.crazilynum = obj[o];
							this.ro.crazilynum = true;
							continue;
						}
						if(o=='clicktime'){
							this.ruleForm.clicktime = obj[o];
							this.ro.clicktime = true;
							continue;
						}
						if(o=='clicknum'){
							this.ruleForm.clicknum = obj[o];
							this.ro.clicknum = true;
							continue;
						}
						if(o=='discussnum'){
							this.ruleForm.discussnum = obj[o];
							this.ro.discussnum = true;
							continue;
						}
						if(o=='storeupnum'){
							this.ruleForm.storeupnum = obj[o];
							this.ro.storeupnum = true;
							continue;
						}
				}
				












			}
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/nongyefenlei/nongyefenlei`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.nongyefenleiOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `nongyezhishi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.nongyexiangqing = this.ruleForm.nongyexiangqing.replace(reg,'../../../php004n5h5a/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {



	if(this.ruleForm.tupian!=null) {
		this.ruleForm.tupian = this.ruleForm.tupian.replace(new RegExp(this.$base.url,"g"),"");
	}

	if(this.ruleForm.shipin!=null) {
		this.ruleForm.shipin = this.ruleForm.shipin.replace(new RegExp(this.$base.url,"g"),"");
	}









var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "nongyezhishi/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `nongyezhishi/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.nongyezhishiCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `nongyezhishi/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.nongyezhishiCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.nongyezhishiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    tupianUploadChange(fileUrls) {
	    this.ruleForm.tupian = fileUrls;
    },
    shipinUploadChange(fileUrls) {
	    this.ruleForm.shipin = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: inherit;
	  	  background: none;
	  	  font-weight: 600;
	  	  display: inline-block;
	  	  width: 200px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 200px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  border-color: #ccc;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 200px;
	  	  height: 30px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  border-color: #ccc;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 200px;
	  	  height: 30px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  border-color: #ccc;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 200px;
	  	  height: 30px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  border-color: #ccc;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 200px;
	  	  height: 30px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  color: #aaa;
	  	  background: #f6f6f6;
	  	  object-fit: cover;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  color: #aaa;
	  	  background: #f6f6f6;
	  	  object-fit: cover;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  color: #aaa;
	  	  background: #f6f6f6;
	  	  object-fit: cover;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #ccc;
	  	  border-radius: 4px;
	  	  padding: 10px 10px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  min-height: 80px;
	  	  min-width: 300px;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 0px solid #3fcbca;
				cursor: pointer;
				padding: 0 10px;
				margin: 0px 4px;
				color: #fff;
				display: inline-block;
				font-size: 12px;
				line-height: 24px;
				border-radius: 4px;
				outline: none;
				background: #5680ac;
				width: auto;
				height: 24px;
			}
	
	.add-update-preview .btn .btn1:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 0px solid #23b7e5;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #56ac92;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 24px;
			}
	
	.add-update-preview .btn .btn2:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 0px solid #3fcbca;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #64ac56;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 24px;
			}
	
	.add-update-preview .btn .btn3:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 0px solid #FF6B6B;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #be696d;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 24px;
			}
	
	.add-update-preview .btn .btn4:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn5 {
				border: 0px solid #65C3DF;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #aaa;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 24px;
			}
	
	.add-update-preview .btn .btn5:hover {
				opacity: 0.8;
			}
</style>
