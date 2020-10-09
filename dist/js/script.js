
const resizeOb = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        const element = entry.target;
        const width = element.clientWidth;
        element.classList.remove(
            'mobile',
            'tablet',
            'small-pc',
        );
        if (width < 768) {
            element.classList.add('mobile');
        }
        if (width >= 768) {
            element.classList.remove('mobile');
            element.classList.add('tablet');
        }
        if (width >= 992 || width > 1100) {
            element.classList.add('small-pc');
        }
    })
});

const wblock = document.querySelector('.wsize');

resizeOb.observe(wblock);