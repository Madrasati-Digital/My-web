document.addEventListener('DOMContentLoaded', function() {
    // نبحث عن أول عنصر H1 في الصفحة
    const mainHeading = document.querySelector('h1');
    if (mainHeading) {
        // إذا وجدنا العنصر، نغير نصه إلى "هذا ما تعلمته"
        mainHeading.textContent = 'هذا ما تعلمته'; 
    }
    // رسالة لتأكيد عمل JavaScript (تظهر في وحدة تحكم المتصفح F12)
    console.log("ملف JavaScript يعمل بنجاح! تم تغيير العنوان.");
});
