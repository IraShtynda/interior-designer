(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const accordions = document.querySelectorAll('.accordion');

        accordions.forEach(el => {
            el.addEventListener('click', (e) => {
                const self = e.currentTarget;
                const control = self.querySelector('.accordion-btn');
                const content = self.querySelector('.accordion-content');

                self.classList.toggle('open');

                // если открыт аккордеон
                if (self.classList.contains('open')) {
                    control.setAttribute('aria-expanded', true);
                    content.setAttribute('aria-hidden', false);
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    control.setAttribute('aria-expanded', false);
                    content.setAttribute('aria-hidden', true);
                    content.style.maxHeight = null;
                }
            });
        });
    });
})();