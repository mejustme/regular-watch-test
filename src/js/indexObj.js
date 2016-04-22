


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
            manCount: {m:0},
            moreChild: 1
        },
        haveBaby: function(moreChild){
            this.data.manCount.m = (+this.data.manCount.m) + (+moreChild);
            return false;
        }
    });

// ui child
    var Woman =  Person.extend({
        name: 'woman',
        template: document.querySelector('#j-woman-tpl'),
        data:{
            womanCount: {w:0},
            moreChild: 1
        },
        haveBaby: function(moreChild){
            this.data.womanCount.w = (+this.data.womanCount.w) + (+moreChild);
            return false;
        }
    });


// ui box
    var World = Regular.extend({
        name: 'world',
        template: document.querySelector('#j-world-tpl'),
        data:{
            totalMan: {m:60},
            totalWoman: {w:40},
            isolateMan: 3,
            isolateWoman: 3
        },
        computed:{
            totalPerson:{
                get: function(data){
                    return (+data.totalMan.m)+ (+data.totalWoman.w);
                },
                set: function(value, data){
                    data.totalMan.m = value - data.totalWoman.w;
                }
            }
        }
    });


    var world = new World();
    window.world = world;
    window.man = world.$refs.man;
    window.woman = world.$refs.woman;
    world.$inject(document.querySelector('#j-ui-parent'));
    $('#fullpage').fullpage();

});