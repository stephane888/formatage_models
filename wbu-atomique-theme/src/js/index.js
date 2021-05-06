// src/index.js
import buttons from '../ato_design/atome/_at_buttons.scss';
import  './icons';


//import 'font-awesome/css/font-awesome.min.css'
//var circle = findIconDefinition({ prefix: 'far', iconName: 'circle' })





setTimeout(() => {
    console.log("je  vérifier que ma arrow function aura disparu au terme du processus de compilation de webpack.");
}, 500);

if (module.hot) {
    module.hot.accept('../css/style.scss', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
console.log('hallo')