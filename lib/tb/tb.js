//
//
//	tb.config({
//		
//		//渲染容器设定
//		container:document.getElementById('hehe'),
//		
//		//行内储存槽
//		fields:[],
//		
//		//行内容
//		columns:[{
//			dataIndex:字段名,
//			dataName:"行内显示名称",
//			renderer:function(x){},
//			titleStyle:{}
//          titleFn:{
//              type:''
//              func:function(){}
//          },
//			width:''
//		},{
//			dataIndex:字段名,
//			dataName:"行内显示名称",
//			renderer:function(x){},
//			width:''
//		}]
//	})
//
//	注:
//		1.columns数组中每一个对象为一个列配置项,其中"width"属性为可选项(即可以没有),配置为数字时，沿用px作单位,
//	如果是字符串型数字则以百分比计。default为每一个列都等宽。
//
//
//
//
//
//
//
//
//
//

;(function(root,factory){
	if(typeof define==="function"&&define.amd){
		define(function(){
			return factory();
		})
	}
	else{root.tb = factory()}
})(this,function(){

	//辅助函数
	var _handlersHelper = {

		extend: function(){

			var __temp__, i, j;

			__temp__ = arguments[0];

			for (i=1;i<arguments.length;i++) {
				for (j in arguments[i]) {
					if(__temp__[j] !== arguments[i][j]) {
						__temp__[j] = arguments[i][j];
					}
				}
			}

			return __temp__;
		},

		getItemByName:function(objArr, name){
			var temp, found = false;
			for(var i = 0; i < objArr.length; i++){
				if(found){break;}
				temp = objArr[i];
				for(var j in objArr[i]){
					if(objArr[i][j] === name){
						temp = objArr[i];
						found = true;
						break;
					}
				}
			}
			return temp;
		},

		toggleStatus:function(x){
			if (x === 'odd'){x = 'even'; return x;}
			else if(x === 'even'){x = 'odd'; return x;}
		},

		bindHandler:function(node, type, fn){

			node.addEventListener?node.addEventListener(type, fn) : node.attachEvent('on'+type, fn);
		},

		removeClass:function(node, cls){
			if (!node)
            	throw new Error("您的添加类操作没有指定一个正确的元素标签");
        	if (!cls || typeof cls !== "string")
            	throw new Error("您添加的类名称不是一个字符串");
       
        	if (node.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))) {
            	var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                node.className = node.className.replace(reg, ' ');
            }
		},

		addClass:function(node, cls){
			var reg = /\s$/;
			if(!reg.exec(node.className)){
				node.className += ' ' + cls;
			}
			else{
				node.className += cls;
			}
		},

		findDataLineByLineId:function(arr, node){
			var _temp = 'tj-grid-id';
			var id;
			id = node.attributes[_temp].value;
			return arr[id];
		},

		//return the parent element
		findDataInLine:function(arr, node){

			var id = 'tj-grid-id';
			var _temp = node.attributes[id]
			var ret;
			if(!_temp || !_temp.value){
				ret = this.findDataInLine(arr, node.parentElement);
			}
			else{
				return node;
			}
			return ret;
		},

		//check if has class
		hasClass:function(node, cls){

			var _temp = node.className;
			var classes; 
			if(_temp){
				classes = _temp.split(" ")
			}
			else{
				classes = [];
			}

			for(var i = 0; i < classes.length; i++){
				if(classes[i] === cls)
					return true;
			}
		},

		//confirm node's childs if has class
		checkChildsIfHasClass:function(parent, cls){

			if(parent.childNodes.length){
				for(var i = 0; i < parent.childNodes.length; i++){
					if(this.hasClass(parent.childNodes[i], cls)){
						return parent.childNodes[i];
					}
				}
			}
		},

		//confirm if line has btn.class
		checkLineIfHasClass:function(node, cls){
			var wantted;
			if(!this.checkChildsIfHasClass(node, cls)){
				for(var i = 0; i < node.childNodes.length; i++){
					wantted = this.checkChildsIfHasClass(node.childNodes[i], cls);
					if(wantted)
						return wantted;
				}
			}
			else{
				return this.checkChildsIfHasClass(node, cls)
			}
		},
	}

	//主构造器函数
	function tbConstructor(){


	    

	    var __obj__ = {
	        dataCoreContent: []
	    },

		option = {
		    container: '',
		    fields: [],
		    columns: []
		},

        //zLines = [];

	    dataCoreTitles = [];

		var table, newContainer, currentSelectedLine;





		//初始化
		__obj__.init = function(data){

			//画table
			//a container in option's container that holding the grid
			newContainer = document.createElement('div');
			newContainer.style.width = '100%';
			newContainer.style.height = '100%';
			newContainer.style.overflow = 'auto'
			//main table
			table = document.createElement('table');

			table.style.width = '100%';
			table.className += 'tj-grid-table';


			//add titles
			var trT = document.createElement('tr');

			for (var i = 0; i < option.columns.length; i++) {

				var _th = document.createElement('th');

				//if(!option.columns[i].width){
				//	_th.style.width = (100/option.columns.length).toFixed(1).toString()+'%';
				//}

				//else if(typeof option.columns[i].width === 'number'){
				//	_th.style.width = option.columns[i].width + 'px';
				//}

				//else if(typeof option.columns[i].width === 'string'){
				//	_th.style.width = option.columns[i].width + '%';
				//}

				_th.className += 'tj-grid-th';

				_th.innerHTML = option.columns[i]['dataName'];

				dataCoreTitles.push(option.columns[i]['dataIndex']);

				trT.appendChild(_th);

                //单个标题设置样式
				if (option.columns[i].titleStyle) {
				    for (var ts in option.columns[i].titleStyle) {
				        _th.style[ts] = option.columns[i].titleStyle[ts];
				    }
				}

			    //单个标题事件绑定
				if (option.columns[i].titleFn) {
				    if (typeof option.columns[i].titleFn.func === 'function') {

				        //_th.style.cursor = 'pointer';
				        _handlersHelper.bindHandler(_th, option.columns[i].titleFn.type, option.columns[i].titleFn.func);

				    }
				}
			}

			table.appendChild(trT);

			//add lines
			this.loadData(data);
		}

		//配置方法
		__obj__.config = function(x){
			if(typeof x !== "object")
				throw new Error('the option of tb that you set is not an Object!')

			_handlersHelper.extend(option,x);
		}

		//加载数据方法(加载与重新加载)
		__obj__.loadData = function(arr, callback){

			//empty the storage bin
			this.dataCoreContent = [];

		    //empty tds
			while (table.childNodes[1]) {
			    table.removeChild(table.childNodes[1]);
			}

			var currLine = 'odd';

			for(var i = 0; i < arr.length; i++){

				var _tr = document.createElement('tr');
				
				_tr.className += currLine;

				_tr.setAttribute('tj-grid-id', i);

				currLine = _handlersHelper.toggleStatus(currLine);

				//save
				this.dataCoreContent[i] = {};
				for (var k = 0; k < option.fields.length; k++){
					
					if(option.fields[k] in arr[i]){
					    this.dataCoreContent[i][option.fields[k]] = arr[i][option.fields[k]];
					}
					else{
					    this.dataCoreContent[i][option.fields[k]] = '';
					}
				}

				//mark the dataCoreContent
				this.dataCoreContent[i]['tj-grid-id'] = i;

				//draw
				for(var j in dataCoreTitles){
		
					var _td = document.createElement('td');

					//本该放置的数据
					var initData = arr[i][dataCoreTitles[j]];

					var _obj = _handlersHelper.getItemByName(option.columns, dataCoreTitles[j]);

					if (typeof _obj.renderer !== 'function'){
						_td.innerHTML = initData;
					} 

					else {

					    var _result = _obj.renderer(this.dataCoreContent[i]);

                        if(_result)
                            _td.innerHTML = _result;

                        else {
                            _td.innerHTML = '&nbsp;';
                        }
					}

					for (var itemStyle in _obj) {
					    _td.style[itemStyle] = _obj[itemStyle];
					}

                    //setup width
					//if (_obj.width) {
					//    _td.style.width = _obj.width;
					//}

					_td.style.height = '100%';

					_td.className += 'tj-grid-td';

					_tr.appendChild(_td);
				}

				//row select
				_handlersHelper.bindHandler(_tr, 'click', function(){
					
					for(var k = 1; k < table.childNodes.length; k++){
						_handlersHelper.removeClass(table.childNodes[k],'tjTb-grid-onSelect')
					}

					_handlersHelper.addClass(this, 'tjTb-grid-onSelect');
					
					// currentSelectedLine = _handlersHelper.findDataLineByLineId(dataCoreContent,this)

					// console.log(currentSelectedLine);

				})

				table.appendChild(_tr);
		
			}

			newContainer.appendChild(table);
			option.container.appendChild(newContainer);

			if(callback){
				if(typeof callback !== "function")
					throw new Error("the type of tb's loadData's callback is not a correct function!");
				callback(arr);
			}	
		}

		//添加各种类型事件函数
		__obj__.on = function(type, className, callback) {

		    var curr_kids = [];

		    for (var i = 1; i < table.childNodes.length; i++) {

				if(_handlersHelper.checkLineIfHasClass(table.childNodes[i], className)){

					var kid = _handlersHelper.checkLineIfHasClass(table.childNodes[i], className)

					curr_kids.push(kid);

					_handlersHelper.bindHandler(curr_kids[i-1], type, function () {

					    currentSelectedLine = _handlersHelper.findDataLineByLineId(__obj__.dataCoreContent, _handlersHelper.findDataInLine(this, this))

					var returned_kid = curr_kids[currentSelectedLine["tj-grid-id"]];

					callback(currentSelectedLine, __obj__.dataCoreContent, returned_kid);
					})	
				}
				else{

					_handlersHelper.bindHandler(table.childNodes[i], type, function(){

					    currentSelectedLine = _handlersHelper.findDataLineByLineId(__obj__.dataCoreContent, this)

					    callback(currentSelectedLine, __obj__.dataCoreContent);
					})	
				}
			
			}


		}





		//扩展方法
		// __obj__.xx=function(){}

		return __obj__;
	}




	return tbConstructor;
})