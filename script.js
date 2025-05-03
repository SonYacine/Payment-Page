
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const cardHolder = document.getElementById("card-holder").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
        alert("الرجاء ملء جميع الحقول");
        return;
    }

    alert("تم إرسال البيانات بنجاح. سيتم معالجة الدفع قريباً!");
});
