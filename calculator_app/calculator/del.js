const { evaluate } = require("mathjs")

const safe_computation = (expression) => 
{
	if (!/^[0-9+\-*/().\s]+$/.test(expression)) return "Error";
	let result = 0
	try
	{
		result = evaluate(expression);
	}
	catch (error)
	{
		return ("Error");
	}
	return (result);
};

console.log(safe_computation("1 as 1"));
