// هذا الكود يتأكد من أن الصفحة قد تم تحميلها بالكامل قبل تشغيل JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 1. تغيير نص العنوان الرئيسي (H1)
    // نبحث عن أول عنصر H1 في الصفحة
    const mainHeading = document.querySelector('h1');
    if (mainHeading) {
        // إذا وجدنا العنصر، نغير نصه إلى "هذا ما تعلمته"
        mainHeading.textContent = 'هذا ما تعلمته';
    }

    // 2. تسجيل رسالة في وحدة تحكم المتصفح (Console)
    console.log("ملف JavaScript يعمل بنجاح! تم تغيير العنوان.");
});
