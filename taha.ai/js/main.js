document.addEventListener('DOMContentLoaded', () => {
    console.log('موقع AI Lesson Summarizer جاهز للعمل!');

    const navbar = document.querySelector('.navbar');
    
    // إضافة تأثير لشريط التنقل عند التمرير (Scroll)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // تمييز الرابط النشط في شريط التنقل عند الضغط عليه
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // لا نمنع السلوك الافتراضي لكي تعمل الروابط بين الصفحات
            // لكن نزيل الكلاس من الجميع ونضيفه للرابط الحالي
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
