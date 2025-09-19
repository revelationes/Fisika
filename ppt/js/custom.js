window.addEventListener("load", function() {
				revealDiv = document.querySelector("body div.reveal")
				footer = document.getElementById("schauderhaft-footer");
				revealDiv.appendChild(footer);
			} );
			window.addEventListener("load", function() {
				date = new Date();
				var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
				var days = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
				var tanggal = days[date.getDay()] + ", "+ date.getDate() +" "+ months[date.getMonth()] +" "+ date.getFullYear();
				document.getElementById("tgl").innerHTML = tanggal;
			} );