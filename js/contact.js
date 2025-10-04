$(function () {
    "use strict";

    // init validator
    $('#contact-form').validator();

    // ketika form disubmit
    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            
            // ambil data form
            var name = $("#InputName").val();
            var email = $("#InputEmail").val();
            var subject = $("#InputSubject").val();
            var message = $("#InputMessage").val();

            // nomor WA tujuan (ubah sesuai nomor kamu)
            var phone = "6282116764191";

            // susun pesan ke WhatsApp
            var whatsappURL = "https://wa.me/" + phone + "?text="
                + "*Name:* " + name + "%0a"
                + "*Email:* " + email + "%0a"
                + "*Subject:* " + subject + "%0a"
                + "*Message:* " + message;

            // buka WhatsApp
            window.open(whatsappURL, '_blank');

            // reset form
            $('#contact-form')[0].reset();

            return false; // cegah form submit default
        }
    });
});
