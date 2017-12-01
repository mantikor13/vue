import Vue from 'vue'
//import App from './App.vue'

let car = {model: 'Totota', year: '2000', test: 'test'};

// let Child = {
//     template: '<div class="table__row" v-for="item in cars"><div class="table__row-cell" v-for="items in item">{{items}}</div></div>',
//     data: function () {
//         return{
//             cars: {
//                 car,
//                 car2: {model: 'Totota', year: '2000'},
//                 car3: {model: 'Totota', year: '2000', test: 'test', common: 'test'},
//                 car4: {model: 'Totota', year: '2000', test1: 'test', test2: 'test', test3: 'test', test4: 'test', test5: 'test', test6: 'test', test7: 'test', test8: 'test', test9: 'test', test10: 'test', test11: 'test', test12: 'test', test: 'test', test: 'test', test: 'test', test: 'test', test: 'test'}
//             }
//         }
//     }
// };

const app = new Vue({
    el: '#table-body',
    data: {
        cars: {
            car,
            car2: {model: 'Totota', year: '2000'},
            car3: {model: 'Totota', year: '2000', test: 'test', common: 'test'},
            car4: {model: 'Totota', year: '2000', test1: 'test', test2: 'test', test3: 'test', test4: 'test', test5: 'test', test6: 'test', test7: 'test', test8: 'test', test9: 'test', test10: 'test', test11: 'test', test12: 'test', test: 'test', test: 'test', test: 'test', test: 'test', test: 'test'}
        }
    },
    // components: {
    //     'my-component': Child
    // },
    //render: h => h(App)
});
//app.sayHellow();

