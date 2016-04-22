


document.addEventListener('DOMContentLoaded', function(){

// ui parent
    var Person =  Regular.extend({
        name: 'person',
        template: document.querySelector('#j-person-tpl'),
        data:{

        }
    });

// ui child
    var Man =  Person.extend({
        name: 'man',
        template: document.querySelector('#j-man-tpl'),
        data:{
            manCount: 0,
            moreChild: 1
        },
        haveBaby: function(moreChild){
            this.data.manCount = (+this.data.manCount) + (+moreChild);
            return false;
        }
    });

// ui child
    var Woman =  Person.extend({
        name: 'woman',
        template: document.querySelector('#j-woman-tpl'),
        data:{
            womanCount: 0,
            moreChild: 1
        },
        haveBaby: function(moreChild){
            this.data.womanCount = (+this.data.womanCount) + (+moreChild);
            return false;
        }
    });


// ui box
    var World = Regular.extend({
        name: 'world',
        template: document.querySelector('#j-world-tpl'),
        data:{
            totalMan: 60,
            totalWoman: 40,
            isolateMan: 0,
            isolateWoman: 0
        },
        computed:{
            totalPerson:{
                get: function(data){
                    return (+data.totalMan)+ (+data.totalWoman);
                },
                set: function(value, data){
                    data.totalMan = value - data.totalWoman;
                }
            }
        }
    });


    var world = new World();
    world.$inject(document.querySelector('#j-ui-parent'));
    $('#fullpage').fullpage();

});