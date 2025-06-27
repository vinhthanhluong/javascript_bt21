export default function CountUpModule() {
    if ($('#countup')) {
        $('.counter').each(function () {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            // var countTo = $this.attr('data-count').replace(/,/g, ''); dauphay

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

                {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum); 
                        
                        // $this.text(numberCountUp(this.countNum)); //dauphay
                        //alert('finished');
                    }

                });
        });

        // dau phay
        // function numberCountUp(x) {
        //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // }
    }

    if ($('.countup').length) {
        const counterUp = (target, duration = 5000) => {
            const finalNumber = parseInt(target.getAttribute('data-counter'));
            const startTime = performance.now();
            const easeOutExpo = x => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };
            const updateNumber = currentTime => {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime > duration) {
                    target.innerText = finalNumber.toLocaleString();
                } else {
                    const timeRate = elapsedTime / duration;
                    const numberRate = easeOutExpo(timeRate);
                    const currentNumber = Math.round(numberRate * finalNumber);
                    target.innerText = currentNumber.toLocaleString();
                    requestAnimationFrame(updateNumber);
                }
            };
            requestAnimationFrame(updateNumber);
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    counterUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "0px 0px 0px 0px"
        });
        document.querySelectorAll('.js-counter').forEach(el => observer.observe(el));

    }
}