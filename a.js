// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length -1]) // here the length of items = 6
// })


// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');

// // Next Button Functionality (Move the first item to the end)
// next.addEventListener('click', function() {
//     let items = document.querySelectorAll('.item');
//     let firstItem = items[0];
    
//     // Move the first item to the end of the list
//     document.querySelector('.slide').appendChild(firstItem);
// });

// // Prev Button Functionality (Move the last item to the front)
// prev.addEventListener('click', function() {
//     let items = document.querySelectorAll('.item');
//     let lastItem = items[items.length - 1];
    
//     // Move the last item to the front of the list
//     document.querySelector('.slide').prepend(lastItem);
// });

// // Optional: Automatically move the carousel items every 3 seconds (change 3000 to your preferred time in ms)
// setInterval(function() {
//     let items = document.querySelectorAll('.item');
//     let firstItem = items[0];
//     document.querySelector('.slide').appendChild(firstItem);  // Move the first item to the end automatically
// }, 3000);  // Adjust the interval for continuous loop



// Function to move the first item to the end of the slide container
function moveNext() {
    let items = document.querySelectorAll('.item');
    let firstItem = items[0];
    
    // Move the first item to the end of the list
    document.querySelector('.slide').appendChild(firstItem);
}

// Automatically move the carousel items every 3 seconds (change 3000 to your preferred time in ms)
setInterval(moveNext, 3000);  // This makes the slide move every 3 seconds
