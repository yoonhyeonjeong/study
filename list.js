// linked list (단순연결리스트)

class ListNode {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
// headnode
const headNode = new ListNode(1) // data : 1 
headNode.next = new ListNode(2) // data : 2
headNode.next.next = new ListNode(3) // data : 3

class LinkedLst{
    constructor(head, size){
        this.head = head;
        this.size = size; // 리스트 노드 수
    }
    //탐색 (index 찾기)
    search(index){
        let current = this.head;
        for( let i = 0; i <= index-1; i++){
            current = current.next; //this.head.next
        }
        return current;
    }
    //추가
    push(value){
        this.search(this.size-1)
        //마지막 노드 찾기 (마지막 값 찾아서 value값 넣기)
        const lastNode = this.search(this.size-1) 
        lastNode.next = new ListNode(value) // push
        this.size += 1;
    }
    // 맨 마지막값 지우고, 마지막값 리턴
    pop(){
        const prevNode = this.search(this.size-2) 
        const lastData = prevNode.next.data 
        prevNode.next = null; // 마지막값 지우는것
        this.size -= 1; // length값 -1 
        return lastData
    }

}

const asd = new LinkedLst(headNode, 3)
// console.log(asd)
console.log(asd.search(2))


// console.log(asd.push(4))
// console.log(asd.push(50))

// console.log(asd.search(4), 'search4')
// console.log(asd.pop())
// console.log(asd.size)

