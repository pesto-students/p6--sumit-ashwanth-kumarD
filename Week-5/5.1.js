// program t o use generators and async-await  using call back functions

function doTask1(){
setTimeout(() => {
	console.log("This is the Task of Function 1")
	console.log("**************1*****************");
}, 1000);
}
function doTask2(){
	setTimeout(() => {
		console.log("This is the Task of Function 2")
		console.log("**************2*****************");
	}, 3000);
}
function doTask3(){
	setTimeout(() => {
		console.log("This is the Task of Function 3");
		console.log("**************3*****************");
	}, 5000);
	}
	

	


	async function asyncAwait() {
		console.time();
		console.log("Resolving task 1");
		let result1 = await doTask1();
		console.log(result1);
		console.timeEnd();
	  
		console.time();
		console.log("Resolving task 2");
		let result2 = await doTask2();
		console.log(result2);
		console.timeEnd();
	  
		console.time();
		console.log("Resolving task 3");
		let result3 = await doTask3();
		console.log(result3);
		console.timeEnd();
	  }
	  
	  asyncAwait();
	  
	  // Implementation using generator function
	  function* generatorfunc() {
	
		console.log("Generator Resolving task 1");
yield doTask1();
		console.log("Generator Resolving task 2");
		yield doTask2();
		console.log("Generator Resolving task 3");
		yield doTask3();
		
	  }
	  let genstart = generatorfunc();

	  console.log(genstart.next());
	  console.log(genstart.next());
	  console.log(genstart.next());
	  console.log(genstart.next());
/*	async function starthero(){
for (let starthere of genstart){
	let abc = await starthere;
    console.log(abc);
}
	}*/