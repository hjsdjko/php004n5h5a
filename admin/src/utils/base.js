const base = {
    get() {
        return {
            url : "http://localhost:8080/php004n5h5a/",
            name: "php004n5h5a",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php004n5h5a/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智慧农业信息交流论坛"
        } 
    }
}
export default base
