import main from '../css/contact.scss';
setTimeout(() => {
    console.log("je  vérifier que ma arrow function aura disparu au terme du processus de compilation de webpack.");
}, 500);

if (module.hot) {
    module.hot.accept('./style.scss', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}