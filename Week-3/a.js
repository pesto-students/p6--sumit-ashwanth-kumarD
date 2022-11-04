//exercise 3.1 to create a memoize function to add  numbers

function memoize (fn){
    const cache=new Map();
    return function(...args){
      const key=args.toString();
      if(cache.has(key)){
       return cache.get(key);
      }
      cache.set(key,fn(...args))
      return cache.get(key);
    }
    }
    
    function add(...args)
    {
        var sum=0;
    for (var i=0;i<args.length;i++){
        sum=sum+args[i];
    }

    return sum;
    } 
    function time(fn){
    console.time();
    fn();
    console.timeEnd();
    }
    const memoizeAdd=memoize(add);
    console.log(memoizeAdd(100,100)) 
    time(()=>memoizeAdd(100,100)); 
    time(()=>memoizeAdd(100,100)); 
    time(()=>memoizeAdd(100,100)); 
    time(() => memoizeAdd(100, 100)); 
    console.log(memoizeAdd(100))   ;   
    time(() => memoizeAdd(100));           
    time(() => memoizeAdd(100, 100)); 
    console.log(memoizeAdd(100,200))       
    time(() => memoizeAdd(100, 200));       
    console.log(memoizeAdd(100,200,300)) 
    time(() => memoizeAdd(100, 200,300)); 



    //output
   // 200
//default: 0.095ms
//default: 0.025ms
//default: 0.03ms
//default: 0.021ms
//100
//default: 0.021ms
//default: 0.02ms
//300
//default: 0.052ms
//600
//default: 0.031ms