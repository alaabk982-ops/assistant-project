function processCommand() {
    const inputElement = document.getElementById('commandInput');
    const resultElement = document.getElementById('result');
    const logElement = document.getElementById('log');
    const command = inputElement.value.trim();

    if (!command) {
        resultElement.style.color = '#dc3545'; // أحمر
        resultElement.innerText = 'الرجاء كتابة أمر أولاً.';
        return;
    }

    // عرض ما أدخله المستخدم
    logElement.innerText = 'الأمر المُدخل: ' + command;

    // منطق الأوامر (مبدئي)
    if (command.includes('حاسبة') || command.includes('الحاسبة')) {
        resultElement.style.color = '#28a745'; // أخضر
        resultElement.innerText = '✅ تم التعرف على الأمر: فتح الحاسبة.\n(ملاحظة صادقة: المتصفح لا يمكنه فتح تطبيق الحاسبة مباشرة، هذه الخطوة تحتاج لطبقة أندرويد لاحقاً).';
    } else {
        resultElement.style.color = '#ffc107'; // أصفر
        resultElement.innerText = '⚠️ أمر غير معروف حالياً: ' + command;
    }
    
    // تفريغ الحقل
    inputElement.value = '';
}
