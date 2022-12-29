function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
      var message = `Count is ${count}`;
    function log() {
     
        console.log(message);
    }
    return [increment, log];
}

const [increment,log]=createIncrement();
increment();
log();
//the output of the above function is :Count is 0 
//Reason: the given createIncrement() starts executing as soon as it reaches count =0 
//it stores count vale to 0 once its set to count it doesnt go to increment() function 
//as it hasnt been called and once it reaches "message = `Count is ${count}`" it is stored in the message
//and then it reaches log where the console shows the output as ccount is 0