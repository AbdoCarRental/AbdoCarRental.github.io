// تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // تحقق من تسجيل الدخول (اختبار بسيط فقط)
    if (username === 'admin' && password === '1234') {
        document.getElementById('loginMessage').textContent = 'تم تسجيل الدخول بنجاح';
    } else {
        document.getElementById('loginMessage').textContent = 'فشل تسجيل الدخول. يرجى التحقق من البيانات.';
    }
});

// إنشاء مستخدم جديد
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // حفظ بيانات المستخدم (اختبار بسيط فقط)
    if (newUsername && newPassword) {
        document.getElementById('signupMessage').textContent = 'تم إنشاء الحساب بنجاح';
    } else {
        document.getElementById('signupMessage').textContent = 'يرجى إدخال البيانات الصحيحة.';
    }
});
