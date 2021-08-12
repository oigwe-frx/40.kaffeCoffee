const reviews =  [
  {
    rating: 10,
    max: 10,
    review: 'A rush of flavors. Absolutely divine.',
    name: 'Coffee Critic'
  },
  {
    rating: 9.4,
    max: 10,
    review: 'Unquestionably, the best coffee shop in the area! Thank you so much, guys!',
    name: 'Coffee Critic'
  },
  {
    rating: 9,
    max: 10,
    review: 'This coffee shop has it all. The ambiance, interior designs, good coffee, tasty foods, and fast wi-fi connection.  Highly recommended!',
    name: 'Coffee Critic'
  },
  {
    rating: 9,
    max: 10,
    review: 'I could not ask for more because everything that I needed was provided. Well done, guys! Keep making great coffee and pastries!',
    name: 'Coffee Critic'
  },
]

window.onload = function () { 
  

  setInterval(
    function(){ 
      let index = Math.floor(Math.random()*reviews.length);

      let data = reviews[index];

      document.getElementById('review').innerHTML = `<h2>${data.rating}/${data.max}: ${data.review}</h2><p>~${data.name}</p>`

    }, 5000)
}
