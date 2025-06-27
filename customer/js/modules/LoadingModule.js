export default function LoadingModule() {
	if ($('#page-loading')) {
		const pageLoading = $('#page-loading');
		pageLoading.css('opacity', 0);
		pageLoading.on('transitionend', function (e) {
			pageLoading.css('display', 'none');	
		});
	}
}