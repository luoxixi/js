var obj ={
 name : "xi",
 age : 30,
 sex : "male",
 height : 175,
 weight : 55
}


for(var prop in obj){
 // console.log(obj.prop ----> obj['prop'])
 
 console.log(obj[prop]) //必须是方括号

}
