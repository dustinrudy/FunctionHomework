// code goes here :)

// Question 1: What is the average price of all items? \\

var sum = 0;
items.forEach(function(items){
  sum +=  Number (items.price)
})

var avg = sum / items.length 

avg.toFixed(2)

document.getElementById('answer1').innerHTML = avg.toFixed(2)

console.log(avg.toFixed(2))



// Question 2: Show me an array of items that cost between $14.00 and $18.00 USD? \\

var filt = []; 
items.filter(function(items){
	if (items.price < 18.00 && items.price > 14.00){
		return filt += items.title + " "

	}
})

document.getElementById('answer2').innerHTML = filt

console.log(filt)


// 3. Which item has a "GBP" currency code? Display it's name and price. \\
var GBP = []
items.filter(function(items){
	if (items.currency_code == 'GBP')
		GBP.push(items.title + " " + "$" + items.price)
})

document.getElementById('answer3').innerHTML = GBP


console.log(GBP)

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










