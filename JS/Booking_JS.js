// الانتظار حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('.right');

    bookingForm.addEventListener('submit', (e) => {
        // منع الصفحة من التحميل (Refresh) عند الضغط على الزرار
        e.preventDefault();

        // 1. سحب جميع القيم من الخانات
        // ملحوظة: الخانات اللي ملهاش ID سحبناها عن طريق الـ placeholder أو النوع
        const firstName = document.querySelector('input[placeholder="Enter first name"]').value;
        const phoneNumber = document.querySelector('input[type="number"]').value;
        const bookingType = document.getElementById('booking-type').value;
        const vehicle = document.getElementById('select-vehicle').value;
        const date = document.getElementById('preferred-date').value;
        const time = document.getElementById('preferred-time').value;
        const requirements = document.getElementById('additional-requirements').value;

       
        if (!firstName || !phoneNumber || !bookingType || !vehicle || !date || !time) {
            alert('Please fill in all the required fields to complete your booking.');
            return; 
        }

       
        console.log("Booking Details:", {
            Name: firstName,
            Phone: phoneNumber,
            Type: bookingType,
            Vehicle: vehicle,
            Date: date,
            Time: time,
            Notes: requirements
        });

        alert(`Thank you, ${firstName}!\nYour booking for the ${vehicle} has been received. We will contact you soon.`);
        
       
    });
});