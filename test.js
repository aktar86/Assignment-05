// // available icon function
// function availAbleCoin(id){
//     const coin = document.getElementById(id).innerText;
//     const coinNumber = parseInt(coin)

//     if (coinNumber < 20) {
//         alert("You don’t have enough coins to continue.");
//         return;
//     }
//     else {
//         alert('Call ongoin');
//     }
//     const upDateAvailableCoin = coinNumber - 20;
//     document.getElementById(id).innerText = upDateAvailableCoin;
// }

// // Call history update Card
// function updateCallHistory(title, number){
//     const time = getTime();

//     const newCard = document.createElement('div');
//     newCard.className = "flex justify-between items-center bg-[#FAFAFA] p-1 rounded-lg mb-5";

//     newCard.innerHTML = `
//                         <div>
//                             <h1 class="font-bold text-lg">${title}</h1>
//                             <p  class="text-[16px]">${number}</p>
//                         </div>
//                         <div>
//                             <p class="text-[16px]">${time}</p>
//                         </div>
//             `;

//     const historyContainer = document.getElementById('history-container');
//     historyContainer.appendChild(newCard);
// }

// // copy button feature
// function copyNumber(id){
//         const number = document.getElementById(id).innerText;
//     navigator.clipboard.writeText(number)
//         .then(() => {
//             alert("Number Copied Successfully: " + number)
//         }).catch(err => {
//             console.error("Copy failed: ", err);
//         })

//     // copy-count
//     const copyCount = document.getElementById('copy-count').innerText;
//     const copyCountNumber = parseInt(copyCount)
//     let copyCountIncrese = copyCountNumber;
//     copyCountIncrese++
//     document.getElementById('copy-count').innerText = copyCountIncrese;
// }



// // all card heart function here
// const hearts = document.getElementsByClassName('heart');
// for(const heart of hearts){
//     heart.addEventListener('click', function(){
//         const heartCount = document.getElementById('heart-count').innerText;
//         let heartCountNumber = parseInt(heartCount);
//         heartCountNumber++;
//         document.getElementById('heart-count').innerText = heartCountNumber;
//     })
// }


// // clear log history 
// document.getElementById('clear-log-btn').addEventListener('click', function () {
//     // console.log('clear button clicked')
//     document.getElementById('history-container').innerHTML = '';
// })


// // time function
// function getTime() {
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();

//     // am/pm check
//     let ampm;
//     if (h >= 12) { ampm = 'PM'; } else { ampm = 'AM';}

//     // minutes check
//     if (m < 10) { m = "0" + m; } else { m = m.toString();}

//     // second check
//     if (s < 10) { s = "0" + s; } else { s = s.toString();}

//     const time = h + ":" + m + ":" + s + ' ' + ampm;
//     return time;
// }




// // card 1
// document.getElementById('national-call-btn').addEventListener('click', function () { 
//     availAbleCoin('available-coin')
//     // update call history
//     const title = document.getElementById('national-title').innerText;
//     const number = document.getElementById('national-Service-number').innerText;
//     updateCallHistory(title, number)
// })


// // car 2
// document.getElementById('police-call-btn').addEventListener('click', function () {
//     availAbleCoin('available-coin')
//     // update call history here
//     const title = document.getElementById('police-title').innerText;
//     const number = document.getElementById('police-service-number').innerText;
//     updateCallHistory(title, number)
// })

// // card 3
// document.getElementById('fire-call-btn').addEventListener('click', function () { 
//     availAbleCoin('available-coin')
//     // update call history
//     const title = document.getElementById('fire-title').innerText;
//     const number = document.getElementById('fire-Service-number').innerText;
//     updateCallHistory(title, number)
// })


// // card 4
// document.getElementById('ambulance-call-btn').addEventListener('click', function () { 
//     availAbleCoin('available-coin')
//     // update call history
//     const title = document.getElementById('ambulance-title').innerText;
//     const number = document.getElementById('ambulance-Service-number').innerText;
//     updateCallHistory(title, number)
// })

// // card 5
// document.getElementById('womanchild-call-btn').addEventListener('click', function () { 
//     availAbleCoin('available-coin')
//     // update call history
//     const title = document.getElementById('womanchild-title').innerText;
//     const number = document.getElementById('womanchild-Service-number').innerText;
//     updateCallHistory(title, number)
// })

// // card 6
// document.getElementById('corruption-call-btn').addEventListener('click', function () { 
//     availAbleCoin('available-coin')
//     // update call history
//     const title = document.getElementById('corruption-title').innerText;
//     const number = document.getElementById('corruption-Service-number').innerText;
//     updateCallHistory(title, number)
// })


// // card 7
// document.getElementById('Electricity-call-btn').addEventListener('click', function () { 
//     availAbleCoin('available-coin')
//     // update call history
//     const title = document.getElementById('Electricity-title').innerText;
//     const number = document.getElementById('Electricity-Service-number').innerText;
//     updateCallHistory(title, number)
// })


// // card 8
// document.getElementById('brack-call-btn').addEventListener('click', function () { 
//     availAbleCoin('available-coin')
//     // update call history
//     const title = document.getElementById('brack-title').innerText;
//     const number = document.getElementById('brack-Service-number').innerText;
//     updateCallHistory(title, number)
// })

// // card 9
// document.getElementById('railway-call-btn').addEventListener('click', function () { 
//     availAbleCoin('available-coin')
//     // update call history
//     const title = document.getElementById('railway-title').innerText;
//     const number = document.getElementById('railway-Service-number').innerText;
//     updateCallHistory(title, number)
// })


// //card 1 copy button
// document.getElementById('national-number-copy').addEventListener('click', function () {
//         copyNumber('national-Service-number')
// })

// // card 2 copy button
// document.getElementById('police-number-copy').addEventListener('click', function () {
//         copyNumber('police-service-number')
// })

// //card 3 copy button
// document.getElementById('fire-number-copy').addEventListener('click', function () {
//         copyNumber('fire-Service-number')
// })

// //card 4 copy button
// document.getElementById('ambulance-number-copy').addEventListener('click', function () {
//         copyNumber('ambulance-Service-number')
// })

// //card 5 copy button
// document.getElementById('womanchild-number-copy').addEventListener('click', function () {
//         copyNumber('womanchild-Service-number')
// })

// //card 6 copy button
// document.getElementById('corruption-number-copy').addEventListener('click', function () {
//         copyNumber('corruption-Service-number')
// })

// //card 7 copy button
// document.getElementById('Electricity-number-copy').addEventListener('click', function () {
//         copyNumber('Electricity-Service-number')
// })

// //card 8 copy button
// document.getElementById('brack-number-copy').addEventListener('click', function () {
//         copyNumber('brack-Service-number')
// })

// //card 9 copy button
// document.getElementById('railway-number-copy').addEventListener('click', function () {
//         copyNumber('railway-Service-number')
// })


