const linkedList = require("./LinkedList");

console.log(
    `simple implementation of linked lists using TDD
    creating classes for nodes and lists implementing
    simple operations such as:
    * insert at the head
    * insert at given index
    * get node at given index
    * remove and return head of list
    * remove (don't return) at given index
    `);    
const lista = new linkedList();
console.log("create empty list \"ll\":", lista);
console.log("insert nodes 10, 20, 30, 40, 50");
lista.insert(50);
lista.insert(40);
lista.insert(30);
lista.insert(20);
lista.insert(10);
lista.print();

console.log("\ninsert \"AAA\" at index 3");
lista.addNewIn("AAA", 3);
lista.print();
console.log("remove the same node");
lista.removeIn(3);
lista.print();

console.log("\nget value of element at index 3:\n", lista.getByIndex(3).value);

console.log("\nget head value and remove from list:\n", lista.remove().value);

console.log("final state of list:");
lista.print();