
require.config({
    paths: config.getPaths(3)
})

define(function (require) {
	var toolbar = require('toolbar');
    var $ = require('jquery');
    var dao = require('dao');
    var grid1 = require('grid1');
    var echarts1 = require('echarts1');
    

   
    $(function () {

    	$('.panel-image').click(function () {
    		$('.window').show();
    		$('.opacity-div-for-modelwin').show();
    		grid1.drawGrid();
    		echarts1.init();
    	})
    	$('.opacity-div-for-modelwin').click(function () {
    		$('.window').hide();
    		$('.opacity-div-for-modelwin').hide();
    	})


    })
})