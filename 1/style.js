	var btn = document.getElementsByClassName('layui-btn-sm')[0];
			var url = './index.html';
			// var url1 = '2刘奕兵/ETS--我的托业.html';
			// var url2 = '3王芳/ETS--我的托业.html';
			// var url3 = '4郝翰/ETS--我的托业.html';
			// var url4 = '5胡楷/ETS--我的托业.html';
			check = function () {
			            if (input.value == '123' && input1.value == '123456') {
			                window.location = url;
			            }
						// if (input.value == '17612173474'|| input1.value == 'LYB123') {
						//     window.location = url1;
						// } 
						// if (input.value == '17621069846'|| input1.value == 'wangfang') {
						//     window.location = url2;
						// } 
						// if (input.value == '18510470001'|| input1.value == '980512') {
						//     window.location = url3;
						// } 
						// if (input.value == '18916121291'|| input1.value == '888888') {
						//     window.location = url4;
						// } 
						// if (input.value =='0818232' && input1.value =='1997.9.5') {
						//              window.location = url;
						else{
							alert('账号密码错误！')
						}
			        };
