function Node(data,left,right) {    
    this.data = data;    
    this.left = left;    
    this.right = right;    
    this.show = show; 
}
function show() {
    return this.data; 
}
function BST() {
    this.root = null;    
    this.insert = insert;    
    // this.inOrder = inOrder; 
}
function insert(data) {    
    var n = new Node(data,null,null);   
    if(this.root == null) {        
        this.root = n;    
    }else {        
        var current = this.root;        
        var parent;        
        while(current) {            
            parent = current;            
            if(data <  current.data) {                
                current = current.left;                
                if(current == null) {                    
                    parent.left = n;                    
                    break;                
                }            
            }else {                
                current = current.right;                
                if(current == null) {                    
                    parent.right = n;                    
                    break;                
                }            
            }        
        }    
    } 
} 

var nums = new BST(); 
nums.insert(23);
nums.insert(45); 
nums.insert(16); 
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22);
console.log(nums);
/*输出
BST {
    root:
     Node {
       data: 23,
       left:
        Node {
          data: 16,
          left: [Object],
          right: [Object],
          show: [Function: show] },
       right:
        Node {
          data: 45,
          left: [Object],
          right: [Object],
          show: [Function: show] },
       show: [Function: show] },
    insert: [Function: insert] }
    */