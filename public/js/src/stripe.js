App.stripe = {


    initialize: function () {

        this.$close = $('[data-role=stripe--close]');
        this.$stripe = $('[data-role=stripe]');
        this.$content = $('[data-role=content]');
        active = '';

        this.$stripe.each(function (i, el) {
            $(this).on('click', function (e) {
                e.preventDefault();
                if (active === '') {
                    active = el;
                    App.stripe.open(el);
                }
            });
        });

        this.$close.on('click', function (e) {
            App.stripe.close();
        });
    },

    open: function (el) {
        activeId = $(el).attr('data-id');
        $activeContent = this.$content.find('[data-id=' + activeId + ']');
        $activeContent.attr('data-state', 'active');
        $(el).attr('data-state', 'active');
        $(el).addClass('animated');
        setTimeout(function () {
             $(el).removeClass('animated');
        },500);
        this.$close.addClass('animated');
        setTimeout(function () {
             this.$close.removeClass('animated');
        }.bind(this),500);

        this.$content.attr('data-state', 'active');
        this.$close.attr('data-state', 'active');
    },

    close: function () {
        this.$content.find('section').attr('data-state', 'passive');
        $(active).attr('data-state', 'passive');
        $(active).addClass('animated');
        setTimeout(function () {
             $(active).removeClass('animated');
             active = '';
        },500);
        this.$close.addClass('animated');
        setTimeout(function () {
             this.$close.removeClass('animated');
        }.bind(this),500);
        this.$content.attr('data-state', 'passive');
        this.$close.attr('data-state', 'passive');
    }
};
