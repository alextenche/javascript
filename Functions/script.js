
function plus(a, b) {
  return (
	console.log(a+b),
	console.log(this),
	console.log(arguments)
  )
}

// traditional invocation
plus(2,3);





