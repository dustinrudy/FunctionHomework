// code goes here :)

// Question 1: What is the average price of all items? \\

var sum = 0;
items.forEach(function(item){
  sum +=  Number (item.price)
})

var avg = sum / items.length 

avg.toFixed(2)

document.getElementById('answer1').innerHTML = '<p>' + '$' + avg.toFixed(2) + '</p>'

console.log(avg.toFixed(2))



// Question 2: Show me an array of items that cost between $14.00 and $18.00 USD? \\

var range = items.filter(function(item){
	return item.price < 18.00 && item.price > 14.00

	})

var answer2HTML = "<ul>"
range.forEach(function(item){
	answer2HTML += "<li>" + item.title + "</li>" 
})

document.getElementById('answer2').innerHTML = answer2HTML

console.log(answer2HTML)


// 3. Which item has a "GBP" currency code? Display it's name and price. \\
var gbp = items.filter(function(item){
	return (item.currency_code == 'GBP')
})

document.getElementById('answer3').innerHTML = '<p>' + gbp[0].title + '<br />' + '</p>'


console.log(gbp)

// 4. Display a list of all items who are made of wood. \\ 

var woodItems = items.filter(function(item){
	return item.materials.indexOf('wood') !== -1
})

console.log(woodItems)

var woodHTML = "";

woodHTML += "<ul>";
woodItems.forEach(function(item){
	woodHTML += "<li>" + item.title + "</li>"
})
woodHTML += "</ul>";

document.getElementById('answer4').innerHTML = woodHTML



// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of. \\

var eightMore = items.filter(function(item) {
	return item.materials.length >= 8
})

var eightHTML = ""

eightMore.forEach((function(obj) {
	eightHTML += "<h5>" + obj.title + "</h5>"
	eightHTML += "<ul>"
	obj.materials.forEach(function(material){
		eightHTML += "<li>" + material + "</li>"
	})
	eightHTML += "</ul>"
}))



document.getElementById('answer5').innerHTML = eightHTML

// 6. How many items were made by their sellers? \\

var madeBySellers = items.filter(function(items){
	if(items.who_made === "i_did") {
		return true
	}
})

document.getElementById('answer6').innerHTML = madeBySellers.length










