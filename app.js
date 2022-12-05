const linkedList = require("./LinkedList");

const lista = new linkedList();

lista.insert(10);
lista.insert(20);
// lista.insert(30);
// lista.insert(40);
// lista.insert(50);
lista.print();

lista.addNewIn('AA',0);
lista.print();