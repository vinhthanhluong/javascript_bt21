export default function CountDownModule() {
	/** COUNT DOWN */
	if ($('.count-down').length) {
		$('.count-down').each(function () {
			let itv;
			const $time = $(this);
			function countDown() {
				const day = $time.find('.day');
				const hours = $time.find('.hours');
				const minutes = $time.find('.minutes');
				const seconds = $time.find('.seconds');
				const endTimeString = $time.data('end-time') || '05/25/2021';
				const endTime = new Date(endTimeString);
				const now = new Date();
				const restTime = new Date(Date.parse(endTime) - Date.parse(now));
				//convert
				const d = Math.floor(restTime / 86400000);
				const h = Math.floor((restTime / (1000 * 60 * 60)) % 24);
				const m = Math.floor((restTime / (1000 * 60)) % 60);
				const s = Math.floor((restTime / 1000) % 60);
				//render to html
				day.html(`${d}`);
				hours.html(`0${h}`.slice(-2));
				minutes.html(`0${m}`.slice(-2));
				seconds.html(`0${s}`.slice(-2));
				if (Date.parse(endTime) - Date.parse(now) <= 0) {
					day.html(`00`);
					hours.html(`00`);
					minutes.html(`00`);
					seconds.html(`00`);
					clearInterval(itv);
					return;
				}
			}
			countDown();
			itv = setInterval(countDown, 1000);
		});
	}
	/** COUNT DOWN - END*/
}
