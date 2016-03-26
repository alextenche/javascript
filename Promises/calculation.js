var calculationPromise = new Promise(function(resolve, reject){
  setTimeout(function(){
	 resolve(1 + 1);
  }, 1000);
});

calculationPromise.then(function(value){
  console.log("The answer is: ", value);
});
