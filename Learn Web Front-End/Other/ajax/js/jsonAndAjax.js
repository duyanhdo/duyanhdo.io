var end = 0;
$('#btn').on('click',function(){

	let xhr = new XMLHttpRequest();
	xhr.addEventListener('load', function() {
		var count = 0;
	if (xhr.status == 200) {
		const data = JSON.parse(xhr.responseText);
		const films = data.films;
		let htmlContent = '';

		htmlContent += `<table>`;
		end ++;
		for(var i = 0; i<films.length && i < end * 2; i++) {

				htmlContent += `
				<tr>
					<td>${films[i].genre}</td>
					<td>${films[i].title}</td>
					<td>${films[i].duration}</td>
					<td>${films[i].date}</td>
				</tr>
			`;
			
		}
		
		htmlContent += `</table>`;

		document.getElementById("content").innerHTML = htmlContent;
	}
})

xhr.open('GET', 'https://minhducluong.github.io/db.json', true);
xhr.send();
});
