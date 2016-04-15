App.stripe = {
    active: '',

    initialize: function () {

        this.$close = $('[data-role=stripe--close]');
        this.$stripe = $('[data-role=stripe]');

        this.$stripe.each(function (i, el) {
            $(this).on('click', function (e) {
                e.preventDefault();
                active = el;
                App.stripe.open(el);
            });
        });

        this.$close.on('click', function (e) {
            App.stripe.close();
        });
    },

    open: function (el) {
        $(el).attr('data-state', 'active');
        $(el).addClass('animated');
        setTimeout(function () {
             $(el).removeClass('animated');
        },500);
        this.$close.addClass('animated');
        setTimeout(function () {
             this.$close.removeClass('animated');
        },500);

        this.$close.attr('data-state', 'active');
    },

    close: function () {
        $(active).attr('data-state', 'passive');
        $(active).addClass('animated');
        setTimeout(function () {
             $(active).removeClass('animated');
             active = '';
        },500);

        this.$close.attr('data-state', 'passive');
    }
};
