var isAnagram = function(st1,st2) {
    console.log(st1,st2);
    const s= Sort([...st1])
    const t= Sort([...st2])
    console.log(s);
    console.log(t);
    let flag=0
    if (s.length !== t.length) {
        return false;
    }
    for(let i=0;i<s.length;i++){     
            if(s[i]!==t[i]){
                flag=1
                break;
            }
        }
    if (flag==0) {
        console.log("true");
    } else {
        console.log("false");
    }
    
};
function  Sort(arr){
      for(let i=0;i<arr.length;i++){
          for( let j=0;j<arr.length-1-i;j++){
              if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
              }
          }
      }
      return arr
}
isAnagram("abc", "bsca")
