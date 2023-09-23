class node {
    constructor(data){
        this.data=data
        this.next=null
    }
}
class slinkedlist{
    constructor(){
        this.head==null 
        this.tail==null
    }

    addnode(data){
        let newnode=new node(data)
        if(this.head==null){
            this.head=newnode
        }else{
            this.tail.next=newnode
        }
        this.tail=newnode
    }

    display(){
        if(this.head==null){
            console.log("empty")
        }else{
            let temp=this.head
            while(temp!=null){
                console.log(temp.data)
                temp=temp.next
            }
        }
    }

    sum(){
        let sum=0
        let temp=this.head
        while(temp!=null){
            sum=sum+temp.data
            temp=temp.next
        }
       console.log("sum",sum)
    }

    deletenode(data){
        let temp=this.head
        let prev=null
        while(temp!=null && temp.data==data){
            this.head=temp.next
            return;
        }
        while(temp!=null && temp.data!=data){ 
          prev=temp
          temp=temp.next
        }
        if(temp==null){
            return
        }
        if(temp==this.tail){
            this.tail=prev
            this.tail.next=null
        }
        prev.next=temp.next
    }
    insertnode(next,data){
        let newnode=new node (data)
        let temp=this.head
        while(temp!=null && temp.data!=next){
            temp=temp.next
        }
        if(temp==null){
            return
        }
        if(temp==this.tail){
            this.tail.next=newnode 
            this.tail=newnode
            return;
        }
        newnode.next=temp.next
        temp.next=newnode
    }

}

let list=new slinkedlist()
list.addnode(10)
list.addnode(20)
list.addnode(30)
list.addnode(40)
list.display()
list.sum()
// list.deletenode(40)
list.insertnode(40,20000)
list.display()


// class node {
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class slinkedlist{
//     constructor(){
//         this.head==null 
//         this.tail==null
//     }

//     addnode(data){
//         let newnode=new node(data)
//         if(this.head==null){
//             this.head=newnode
//         }else{
//             this.tail.next=newnode
//         }
//         this.tail=newnode
//     }

//     display(){
//         if(this.head==null){
//             console.log("empty")
//         }else{
//             let temp=this.head
//             while(temp!=null){
//                 console.log(temp.data)
//                 temp=temp.next
//             }
//         }
//     }






