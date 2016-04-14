App.stripe = {
    isOpen: false,

    initialize: function () {

        this.$close = $('[data-role=stripe--close]');
        this.$stripe = $('[data-role=stripe]');

        this.$stripe.each(function (i, el) {
            $(this).on('click', function (e) {
                e.preventDefault();
                App.stripe.open(el);
            });
        });

        this.$close.on('click', function (e) {
            App.stripe.close();
        });
    },

    open: function (el) {
        $(el).attr('data-state', 'active');
        this.$close.attr('data-state', 'active');
    },

    close: function () {
        this.$stripe.each(function (i, el) {
            $(this).attr('data-state', 'passive');
        });
        this.$close.attr('data-state', 'passive');
    }
};
