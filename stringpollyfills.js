//split()
String.prototype.mySplit = function(args = ''){
    const rev = [];
    let elm = ''
    let str=this;
    for (let i = 0; i < str.length; i++) {
      const arr = str[i]
      if (arr === args || (args === '' && elm)) {
        rev.push(elm)
        elm = ''
      }
      if (arr !== args) {
        elm += arr
      }
    }
    if (elm) {
      rev.push(elm)
      elm = ''
    }
    return rev
  }
  
  const str = 'welcome-geekster-rocks';
  console.log(str.mySplit("-"));
  
  
  
  // join()
  Array.prototype.myJoin=function(args = ''){
      const arr1=this;
      let join='';
      for(let i=0;i<arr1.length-1;i++){
          join+=""+arr1[i]+args;
      }
      join+=""+arr1[arr1.length-1];
      return join;
  }
  let arr=[];
  let t=arr.myJoin('-');
  console.log(str);
  
  // Reverse()
  
  Array.prototype.myReverse=function(){ 
      const ar=this;
      let j=ar.length-1;
      for(let i =0 ;i<ar.length/2;i++){
          let temp=ar[i];
          ar[i]=ar[j];
          ar[j]=temp;
          j--;
      }
  }
  let Stri=[`welcome`,`geekster`,`rocks`];
  Stri.myReverse();
  console.log(Stri);

 