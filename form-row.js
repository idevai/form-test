function animateInlineLabel(element, currentClass, targetClass) {
    // var placeholder = element.parent().find('.form-component-placeholder');
    // element.switchClass(currentClass, targetClass, 300);
    element.removeClass(currentClass).addClass(targetClass);
}

$(document).ready(function () {
    // $('.form-component input').each(function () {
    //     if ($(this).val()) {
    //         $(this).addClass('shrunk');
    //     }
    // });
    $('body').on('focus', '.form-row input', function () {
        animateInlineLabel($(this).parent(), 'label-expanded', 'label-shrunk');
    });
    $('body').on('blur', '.form-row input', function () {
        if (!$(this).val()) {
            animateInlineLabel($(this).parent(), 'label-shrunk', 'label-expanded');
        }
    });
});


