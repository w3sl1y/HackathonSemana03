//Ejercicio #0
function unique(arr) {
    return Array.from(new Set(arr));
  }

//Ejercicio #1
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares', 'are']

//nap, pan -> anp
//ear, era, are -> aer
//cheaters, hectares, teachers -> aceehrst

const aclean = (arr) => {
    let map = new Map();

    for(let word of array){
        let sorted = word.tolowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

console.log(aclean(arr));

//Ejercicio #2
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);

//Ejercicio #3
let i = 3;
while (i) { alert( i-- );}
//El últimmo valor alertado será el número 0, porque while(i) detendrá el bucle cuando i llegue a su valor 0

//Ejercicio #4
let i = 0;while (++i < 5) alert( i ); //Muestra valores desde el 1 al 4 y al llegar a 5 se detiene

let i = 0;while (i++ < 5) alert( i ); //Muestra valores desde el 1 al 5 y se detiene pero este último es falso

//Ejercicio #5
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  //Ejercicio #6
  function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }

  //Ejercicio #7
  let num;

do {
  num = prompt("Ingrese un número mayor que 100?", 0);
} while (num <= 100 && num);

//Ejercicio #8
//Bucle
function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  }
  printList(list);

//Recursividad
function printList(list) {

    alert(list.value);
  
    if (list.next) {
      printList(list.next);
    }
  }
  printList(list);
  //Cualquiera de las dos formas es buena, pero el bucle es más efectivo