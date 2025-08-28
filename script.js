// available icon function
function availAbleCoin(id, number, text){
    const coin = document.getElementById(id).innerText;
    const coinNumber = parseInt(coin)
    
    if (coinNumber < 20) {
        alert(`You don’t have enough coins to continue.` );
        return false;
    }
    else {
        alert(`📞 ${text} Emergency Calling... ${number}`);
    }
    const upDateAvailableCoin = coinNumber - 20;
    document.getElementById(id).innerText = upDateAvailableCoin;
    return true;
}

// call button handler
function callHandler(titleId, numberId, textId){
    const title = document.getElementById(titleId).innerText;
    const number = document.getElementById(numberId).innerText;
    const text = document.getElementById(textId).innerText;
    //available icon and alert
    const coin = availAbleCoin('available-coin', number, text);
    if(coin){
        // update call history
        updateCallHistory(title, number)
    }
}

function getTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm;

    if (h >= 12) {ampm = "PM";} else { ampm = "AM"; }

    h = h % 12;
    if (h === 0) {h = 12;}
    if (m < 10) { m = "0" + m;}
    if (s < 10) {s = "0" + s;}

    const time = h + ":" + m + ":" + s + " " + ampm;
    return time;
}

// Call history update Card
function updateCallHistory(title, number){
    const time = getTime();
    const newCard = document.createElement('div');
    newCard.className = "flex justify-between items-center bg-[#FAFAFA] p-1 rounded-lg mb-5";
    newCard.innerHTML = `
                        <div>
                            <h1 class="font-bold text-lg">${title}</h1>
                            <p  class="text-[16px]">${number}</p>
                        </div>
                        <div>
                            <p class="text-[16px]">${time}</p>
                        </div>
            `;
    const historyContainer = document.getElementById('history-container');

    if(historyContainer.children.length >= 5){
        historyContainer.removeChild(historyContainer.firstChild)
    }

    historyContainer.appendChild(newCard);
}

// all card heart function here
const hearts = document.getElementsByClassName('heart');
for(const heart of hearts){
    heart.addEventListener('click', function(){
        const heartCount = document.getElementById('heart-count').innerText;
        let heartCountNumber = parseInt(heartCount);
        heartCountNumber++;
        document.getElementById('heart-count').innerText = heartCountNumber;
    })
}


const cardNames = [
  "national", "police", "fire", "ambulance",
  "womanchild", "corruption", "electricity",
  "brack", "railway"
];

cardNames.forEach(name => {
  document.getElementById(`${name}-call-btn`).addEventListener('click', () => {
    callHandler(`${name}-title`, `${name}-Service-number`, `${name}-text`);
  });
});



// copy button feature
function copyNumber(id){
    const number = document.getElementById(id).innerText;
    navigator.clipboard.writeText(number)
        .then(() => {
            alert("Copied to clipboard: " + number)
        }).catch(err => {
            console.error("Copy failed: ", err);
        })

    // copy-count
    const copyCount = document.getElementById('copy-count').innerText;
    const copyCountNumber = parseInt(copyCount)
    let copyCountIncrese = copyCountNumber;
    copyCountIncrese++
    document.getElementById('copy-count').innerText = copyCountIncrese;
}

const copyButton = [
  "national", "police", "fire", "ambulance",
  "womanchild", "corruption", "electricity",
  "brack", "railway"
];

copyButton.forEach(copy => {
    document.getElementById(`${copy}-number-copy`).addEventListener('click', function(){
        copyNumber(`${copy}-Service-number`)
    })
})

// clear log history 
document.getElementById('clear-log-btn').addEventListener('click', function () {
    // console.log('clear button clicked')
    document.getElementById('history-container').innerHTML = '';
})
