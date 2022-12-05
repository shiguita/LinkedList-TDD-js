class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    print() {
        let output = 'HEAD:';
        let current = this.head;
        while (current) {
            output += `${current.value}-> `
            current = current.next;
        }
        console.log(`${output}null`);
    }
    // Methods:
    insert(data) {
        this.head = new node(data, this.head);
        this.size++;
    }

    getByIndex(index) {
        if (index < 0 || index >= this.size) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    addNewIn(value, index) {
        if (index === 0) {
            this.insert(value);
            return true;
        }
        let prev = this.getByIndex(index-1);
        if (prev == null) return null;
        let aux = prev.next;
        prev.next = new node(value, aux);
        return true;
    }
}

class node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

module.exports = linkedList, node;