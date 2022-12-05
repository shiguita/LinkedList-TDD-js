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
    describe('with incorrect index', () => {
        test('it returns null', () => {
            expect(ll.addNewIn(10,-1)).toBeNull();
            expect(ll.addNewIn(10,99)).toBeNull();
        })
    })
    describe('with correct index', () => {
        test('adds the new node at index', () => {
            expect(ll.addNewIn(15,2)).toBeTruthy();
            expect(ll.getByIndex(2).value).toBe(15);
            expect(ll.addNewIn(10,1)).toBeTruthy();
            expect(ll.getByIndex(1).value).toBe(10);
            expect(ll.addNewIn(5,0)).toBeTruthy();
            expect(ll.getByIndex(0).value).toBe(5);
        })
    })
})