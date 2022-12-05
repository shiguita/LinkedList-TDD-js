const LinkedList = require('./LinkedList')

describe('#insert', () => {
    test('adds the element at the beginning of the list', () => {
        const ll = new LinkedList();
        ll.insert(10);
        const oldhead = ll.head;
        ll.insert(20);

        expect(ll.head.value).toBe(20);
        expect(ll.head.next).toBe(oldhead);
        expect(ll.size).toBe(2);
    })
});

describe('#getByIndex', () => {
    const ll = new LinkedList();
    ll.insert(25);
    ll.insert(30);
    ll.insert(20);
    describe('with incorrect index', () => {
        test('it gives null', () => {
            expect(ll.getByIndex(-1)).toBeNull();
            expect(ll.getByIndex(999)).toBeNull();
        })
    });
    describe('with correct index', () => {
        test('it returns de correct value', () => {
            expect(ll.getByIndex(1).value).toBe(30);
            expect(ll.getByIndex(2).value).toBe(25);
        })
    })
})

describe('#addNewIn', () => {
    const ll = new LinkedList();
    ll.insert(25);
    ll.insert(30);
    ll.insert(20);
    const oldSize = ll.size;
    describe('with incorrect index', () => {
        test('it returns null', () => {
            expect(ll.addNewIn(10,-1)).toBeNull();
            expect(ll.size == oldSize).toBeTruthy;
            expect(ll.addNewIn(10,99)).toBeNull();
            expect(ll.size == oldSize).toBeTruthy;
        })
    })
    describe('with correct index', () => {
        test('adds the new node at index', () => {
            expect(ll.addNewIn(15,2)).toBeTruthy();
            expect(ll.getByIndex(2).value).toBe(15);
            expect(ll.size > oldSize).toBeTruthy;
            expect(ll.addNewIn(10,1)).toBeTruthy();
            expect(ll.getByIndex(1).value).toBe(10);
            expect(ll.size > oldSize).toBeTruthy;
            expect(ll.addNewIn(5,0)).toBeTruthy();
            expect(ll.getByIndex(0).value).toBe(5);
            expect(ll.size > oldSize).toBeTruthy;
        })
    })
})

describe('#remove', () => {
    const ll = new LinkedList();
    const oldSize = ll.size;
    test('fails to remove the head node', () => {
        expect(ll.remove()).toBeNull;
        expect(ll.size === oldSize).toBeTruthy;
    })
    test('removes the head node', () => {
        ll.insert(25);
        ll.insert(30);
        ll.insert(20);
        expect(ll.remove().value).toBe(20);
        expect(ll.size < oldSize).toBeTruthy;
        expect(ll.head.value).toBe(30);
        expect(ll.head.next).toBe(ll.getByIndex(1));
    })
})

describe('#removeIn', () => {
    const ll = new LinkedList();
    ll.insert(20);
    ll.insert(30);
    ll.insert(40);
    const oldSize = ll.size;
    describe('with wrong index', () => {
        test('it gives null', () => {
            expect(ll.removeIn(-1)).toBeNull();
            expect(ll.removeIn(99)).toBeNull();
            expect(ll.size).toBe(oldSize);
        })
    })
    describe('with valid index', () => {
        test('it removes de correct node', () => {
            expect(ll.removeIn(1)).toBeTruthy;
            expect(ll.size < oldSize).toBeTruthy;
            expect(ll.head.next).toBe(ll.getByIndex(1));            
        })
    })
})