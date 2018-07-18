var deepClone = function(obj, newobj = {}){
	// var newobj = newobj || {};
	for(var i in obj){
		if(typeof obj[i] == 'object'){
			newobj[i] = (obj[i].constructor === Array)? [] : {};
			deepClone(obj[i], newobj[i]);
		}else{
			newobj[i] = obj[i];
		}
	}

	return newobj;
}


function clone(origin, target){
	var target = target || {},
		toStr = Object.prototype.toString,
		arrStr = "[object array]";

	for(var prop in origin){
		if(origin.hasOwnProperty(prop)){
			if( origin[prop] !== "null" && typeof(origin[prop]) == 'object'){
				// if( toStr.call(origin[prop]) == arrStr ){
				// 	target[prop] = [];
				// }else{
				// 	target[prop] = {};
				// }
				target[prop] = (toStr.call(origin[prop]) == arrStr ? [] : {});
				clone(origin[prop], target[prop]);
			}else{
				target[prop] = origin[prop];
			}
		}
	}
	return target;
}

字符串比较是逐位比较ascii 码

数组常用的方法
1、改变原数组
pop.  push.  shift.   unshift.   sort().   reverse().  splice

2、不改变原数组
concat,  join(和字符串方法split互逆),   toString, slice