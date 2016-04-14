// Create local App object so it will be minified
var App = {
    initialize: function () {
        for (var prop in App) {
            var module = App[prop];
            if ((typeof module === 'object') &&
                ('initialize' in module)) {
                module.initialize();
            }
        }
    },
    bindHandlers: function ($scope) {
        for (var prop in App) {
            var module = App[prop];
            if ((typeof module === 'object') &&
                ('bindHandlers' in module)) {
                module.bindHandlers($scope);
            }
        }
    },
    updateContent: function (response) {
        for (var prop in App) {
            var module = App[prop];
            if ((typeof module === 'object') &&
                ('updateContent' in module) &&
                (prop in response)
            ) {
                module.updateContent(response[prop]);
            }
        }
    }
};

// Store local App object globally
window.App = App;

// Kick start everything
$(App.initialize);
