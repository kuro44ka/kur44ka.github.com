$("select[name='form_dropdown_premiere_1']").change( function() {
    $("select[name='form_dropdown_premiere_2']").removeAttr("disabled");
});