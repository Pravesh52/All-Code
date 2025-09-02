let arr=[1,2,3,"hello","hii",true, false]

      function getString(i)
      {
        return typeof i=="string";
      }

      function getNumber(i)
      {
        return typeof i=="number";
      }
      function getboolean(i)
      {
        return typeof i=="boolean";
      }

      function getFun(arr,fn)
      {
        let res=[]
        for(let i of arr)
      {
        if(fn(i))
      {
        res.push(i)
      }
      }
      return res
      }
      console.log(getFun(arr,getString));
      console.log(getFun(arr,getNumber));
      console.log(getFun(arr,getboolean));


      //closuer function

      function outer(){
        let user="ankit"
        function inner(){
          console.log(user);
        }
        //inner()
        return inner
      }
      let a=outer()
      a()

      // use case of set interval and set time out

      setTimeout(()=>{
        console.log("Pravesh")
      },3000)


      setInterval(()=>{
        console.log("Ankit");
        console.log("Pravesh")
      },1000)
