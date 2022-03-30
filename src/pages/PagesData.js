class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export default class PagesData {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    //append add a val to the end
    append(val){
        let node = new Node(val);

        //edge cases
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.length++
        return this;
    }

    nextPage(location){
        let current = this.head

        if(location === this.head) return this.head.next.val
        if(location === this.tail) return this.head.val

        while(current.val !== location){
            current = current.next
        }
        return current.next.val
    }

    prevPage(location){
        let current = this.tail

        if(location === this.head) return this.tail.val
        if(location === this.tail) return this.tail.prev.val

        while(current.val !== location){
            current = current.prev
        }
        return current.prev.val
    }
}

export const linkedList = new PagesData()
