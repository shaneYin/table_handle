
	var count = 1;
	init();

	function init() {
		initData();
		initEvent();
	}
	function initEvent() {

		$(".add").click(function(){
			$("tbody").append("<tr><td class='number'>"+ count +"</td><td><input type='text' /></td><td><input type='text' /></td><td><span class='remove'>删除</span></td></tr>");
			addOdd(count);
			count++;
		});

		$('table').on('click','.remove',function(e) {
			var target = e.target;
			var el = $(target).parent().parent();
			if(el.next().length > 0){
				var currentCount = el.children().eq(0).text();
				nextEleHandle(el,currentCount);
			}
			el.remove();
			count--;
		});

		$('.place').click(function() {
			alert('保存成功');
		});
	}

	function initData() {
		var rootPath = 'http://localhost/mock/',
		    currentPath = 'table.mock.php';
		var url = rootPath + currentPath;
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'jsonp',
			jsonp: 'onload',
			success: function(data) {
				var table = data.table;
				$.each(table, function(index, value) {
					appendTr(value);
				});
			},
			error: function() {
				console.log('数据加载出现错误');
			}
		});
		
		/*$.getJSON(url,function(data) {
			var table = data.table;
			$.each(table, function(index, value) {
				appendTr(value);
			});
		});*/

	}
	//为新元素添加odd 类 ？
	function addOdd(count) {
		if(count % 2) {
			$("tr:eq("+ count +")").addClass('odd');
		}
	}

	//通过递归对当前元素的下一个元素进行操作
	function nextEleHandle(el,count) {
    var nextEle;
    if(el.next().length > 0) {
     	nextEle = el.next();
      nextEle.children().eq(0).text(count++);
    	if(count % 2 !== 0){
      	nextEle.removeClass('odd');
      }else{
        nextEle.addClass('odd');
      }
      nextEleHandle(nextEle, count);
    }else{
    	return false;
  	}
  }

  //添加一个行元素
  function appendTr(data) {
  	$('tbody').append("<tr><td class='number'>"+ data.id +"</td><td><span class='data'>"+ data.col1 +"</span></td><td><span class='data'>"+ data.col2 +"</span></td><td><span class='remove'>删除<span></td></tr>");
  	addOdd(data.id);
  	count += 1;
  }