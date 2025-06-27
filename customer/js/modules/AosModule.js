export default function AosModule() {
    AOS.init({
		startEvent: 'DOMContentLoaded',
		offset: 0,
		duration: 600,
		delay: '200',
		easing: 'ease-in-sine',
		once: true,
		mirror: true,
		disable: function(){
            return $(window).width() <= 768;
        },
	});
}