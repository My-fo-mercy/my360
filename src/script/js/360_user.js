$(function() {
    if (ft = true) {
        $("#reg-btn").on("click", function() {
            $("form").submit();
        });
    } else $("#reg-btn").off("click")
});