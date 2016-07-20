steal(
    'can',
    './app.stache',
    './models/people.js',
    './app.less!',
    function(can, appTemplate, people) {

        var count = can.compute(function() {
            return people.attr('length');
        });

        var compiledTemplate = appTemplate({ 
            people: people, 
            charCount: function(person) {
                return person.name.length;
            },
            count: count,
            add: function(vm, el, ev) {
                var nameInput = $('#name-input'); 
                var name = nameInput.val().trim(); 
                if (name) {
                    people.push({name: name});
                    nameInput.val('');
                }
            },
            remove: function(person, el, ev) {
                var index = this.people.indexOf(person);
                this.people.splice(index,1);
            }
        });

        $('#app').append(compiledTemplate);
    }
);
