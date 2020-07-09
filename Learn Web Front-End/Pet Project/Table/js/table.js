jQuery(document).ready(function($) {
	let timetable = [
		{time: "7h30", monday: "Chào Cờ", tuesday: "Hoá", wednesday: "Sinh",thursday:"Văn",friday:"Tiếng Anh",saturday:"Địa",sunday:"Toán(học thêm)"},
		{time: "8h25", monday: "Toán", tuesday: "Văn", wednesday: "Sử",thursday:"Hoá",friday:"Tin",saturday:"Thể Dục",sunday:"Mỹ Thuật"},
		{time: "9h20", monday: "Âm Nhạc", tuesday: "GDCD", wednesday: "Vật Lý",thursday:"Tiếng Pháp",friday:"HTML/CSS",saturday:"Javascript",sunday:"Python"},
		{time: "10h15", monday: "Java Core", tuesday: "Jquery", wednesday: "DOM",thursday:"UI/UX",friday:"Database",saturday:"Giải Thuật",sunday:"Java desktop"},
		{time: "11h10", monday: "C++", tuesday: "Tiếng Anh", wednesday: "Tiếng Nhật",thursday:"Tiếng Nhật",friday:"Hệ Điều Hành",saturday:"PHP",sunday:"PHP"},
		{time: "18h30-20h30", monday: "Chơi", tuesday: "Tiếng Anh", wednesday: "Chơi",thursday:"Tiếng Anh",friday:"Chơi",saturday:"Tiếng Anh",sunday:"Chơi"},
		{time: "21h", monday: "Tự Học", tuesday: "Tự Học", wednesday: "Tự Học",thursday:"Tự Học",friday:"Tự Học",saturday:"Tự Học",sunday:"Tự Học"},
		{time: "22h", monday: "Chơi", tuesday: "Chơi", wednesday: "Chơi",thursday:"Chơi",friday:"Chơi",saturday:"Chơi",sunday:"Chơi"},
		{time: "23h", monday: "Đi Ngủ", tuesday: "Đi Ngủ", wednesday: "Đi Ngủ",thursday:"Đi Ngủ",friday:"Đi Ngủ",saturday:"Đi Ngủ",sunday:"Đi Ngủ"}
	];

	function sortGenre(){
		for(var i = 0; i < timetable.length; i++){
			$('table').append(`<tr>
					<td>${timetable[i].time}</td>
					<td>${timetable[i].monday}</td>
					<td>${timetable[i].tuesday}</td>
					<td>${timetable[i].wednesday}</td>
					<td>${timetable[i].thursday}</td>
					<td>${timetable[i].friday}</td>
					<td>${timetable[i].saturday}</td>
					<td>${timetable[i].sunday}</td>
				</tr>`);
			}
			$('tr:nth-child(6)').after(`<tr>
											<td colspan="8" style="background-color: #27ae60;font-weight: bold;">Chiều</td>
							  			</tr>`);
	}
	function convertTime2Minute(n){

		var str = n;
  		var res = str.split("-")[0].split("h");
		let result = parseFloat(res[0]);
		if(!Number.isNaN(res[1])) result += res[1]/60.0;
		return result;
	}
	function asc(a, b) {
	    const timea = convertTime2Minute(a.time);
	    const timeb = convertTime2Minute(b.time);

	    let comparison = 0;
	    if (timea > timeb) {
	        comparison = -1;
	    } else if (timea < timeb) {
	        comparison = 1;
	    }
	    return comparison;
	}
	function desc(a, b) {
	    return -asc(a,b);
	}
	function asc1(a, b) {
	    const mondaya = b.monday.toUpperCase();
	    const mondayb = a.monday.toUpperCase();

	    let comparison = 0;
	    if (mondaya > mondayb) {
	        comparison = 1;
	    } else if (mondaya < mondayb) {
	        comparison = -1;
	    }
	    return comparison;
	}
	function desc1(a, b) {
	    return -asc1(a,b);
	}
	function asc2(a, b) {
	    const tuesdaya = b.tuesday.toUpperCase();
	    const tuesdayb = a.tuesday.toUpperCase();

	    let comparison = 0;
	    if (tuesdaya > tuesdayb) {
	        comparison = 1;
	    } else if (tuesdaya < tuesdayb) {
	        comparison = -1;
	    }
	    return comparison;
	}
	function desc2(a, b) {
	    return -asc2(a,b);
	}
	function asc3(a, b) {
	    const wednesdaya = b.wednesday.toUpperCase();
	    const wednesdayb = a.wednesday.toUpperCase();

	    let comparison = 0;
	    if (wednesdaya > wednesdayb) {
	        comparison = 1;
	    } else if (wednesdaya < wednesdayb) {
	        comparison = -1;
	    }
	    return comparison;
	}
	function desc3(a, b) {
	    return -asc3(a,b);
	}
	function asc4(a, b) {
	    const thursdaya = b.thursday.toUpperCase();
	    const thursdayb = a.thursday.toUpperCase();

	    let comparison = 0;
	    if (thursdaya > thursdayb) {
	        comparison = 1;
	    } else if (thursdaya < thursdayb) {
	        comparison = -1;
	    }
	    return comparison;
	}
	function desc4(a, b) {
	    return -asc4(a,b);
	}
	function asc5(a, b) {
	    const fridaya = b.friday.toUpperCase();
	    const fridayb = a.friday.toUpperCase();

	    let comparison = 0;
	    if (fridaya > fridayb) {
	        comparison = 1;
	    } else if (fridaya < fridayb) {
	        comparison = -1;
	    }
	    return comparison;
	}
	function desc5(a, b) {
	    return -asc5(a,b);
	}
	function asc6(a, b) {
	    const saturdaya = b.saturday.toUpperCase();
	    const saturdayb = a.saturday.toUpperCase();

	    let comparison = 0;
	    if (saturdaya > saturdayb) {
	        comparison = 1;
	    } else if (saturdaya < saturdayb) {
	        comparison = -1;
	    }
	    return comparison;
	}
	function desc6(a, b) {
	    return -asc6(a,b);
	}
	function asc7(a, b) {
	    const sundaya = b.sunday.toUpperCase();
	    const sundayb = a.sunday.toUpperCase();

	    let comparison = 0;
	    if (sundaya > sundayb) {
	        comparison = 1;
	    } else if (sundaya < sundayb) {
	        comparison = -1;
	    }
	    return comparison;
	}
	function desc7(a, b) {
	    return -asc7(a,b);
	}

	$('.asc').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(asc);
		sortGenre();
	});
	$('.desc').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(desc);
		sortGenre();
	});
	$('.asc1').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(asc1);
		sortGenre();
	});
	$('.desc1').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(desc1);
		sortGenre();
	});
	$('.asc2').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(asc2);
		sortGenre();
	});
	$('.desc2').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(desc2);
		sortGenre();
	});
	$('.asc3').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(asc3);
		sortGenre();
	});
	$('.desc3').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(desc3);
		sortGenre();
	});
	$('.asc4').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(asc4);
		sortGenre();
	});
	$('.desc4').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(desc4);
		sortGenre();
	});
	$('.asc5').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(asc5);
		sortGenre();
	});
	$('.desc5').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(desc5);
		sortGenre();
	});
	$('.asc6').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(asc6);
		sortGenre();
	});
	$('.desc6').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(desc6);
		sortGenre();
	});
	$('.asc7').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(asc7);
		sortGenre();
	});
	$('.desc7').on('click',function(){
		$('tr:gt(0)').remove();
		timetable.sort(desc7);
		sortGenre();
	});
	$('.search').on('focus',function(){
		$('.search').css("border","2px solid white");
	});
	$('.search').on('blur',function(){
		$('.search').css("border","2px solid #efbc6b");
	});

	function capitalize(para) {
			let arr = para.split(/[ ]+/);
			return arr.join(' ');
		}
	
	$('.search1').on('click', function() {
		var find = false;
		$('td').each(function(index, element) {
			$(this).css("color","black");
			if ($(this).text().trim().toLowerCase().includes(capitalize($('.search').val().toLowerCase().trim()))) {
				$(this).css("color","#e1b12c");
				find = true;
			}
		});
		if(!find) alert('k tim thay');
	});

	// $('.search').keyup('click', function() {
	// 	var text = capitalize($('.search').val().toLowerCase().trim());
	// 	var count = 0;
	// 	var find = false;
	// 	if(text.length == 0) find = true;
	// 	$('td').each(function(index, element) {
	// 		$(this).css("color","black");
	// 		if (text.length > 0 && $(this).text().trim().toLowerCase().includes(capitalize($('.search').val().toLowerCase().trim()))) {
	// 			$(this).css("color","#e1b12c");
	// 			find = true;
	// 			count++;
	// 		}
	// 	});
	// 	$('.count').text('tim thay '+count+' ket qua');
	// 	if(!find) alert('k tim thay');
	// });

	$('.search').keypress(function(event) {
		if(event.keyCode == 13){
			var find = false;
		$('td').each(function(index, element) {
			$(this).css("color","black");
			if ($(this).text().trim().toLowerCase().includes(capitalize($('.search').val().toLowerCase().trim()))) {
				$(this).css("color","#e1b12c");
				find = true;
			}
		});
		if(!find) alert('k tim thay');
		}
	});

});





























