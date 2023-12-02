var lengthOfLastWord = function(s) {
    const words = s.split(' ');
    let newarr=[]
    let chararr=[]
    let flag=0;
      console.log("newone",words)
      for(let i=words.length-1;i>=0;i--){
        if(words[i]!==""){
            newarr.push(words[i])
            break;
        }else{
            continue
        }
      }
      let len=newarr[0].split('').length
      console.log(newarr)
      console.log(len)
      return len

       
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
