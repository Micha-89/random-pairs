const output = document.querySelector('#outputPairs');
const createPairs = document.querySelector('#submitPairsBtn');
const copyPairs = document.querySelector('#copyPairsBtn');
const nextSet = document.querySelector('#newPairsBtn');
let arr;
const firstPairs = [];

createPairs.addEventListener('click', () => {
    arr = document.querySelector('#inputPairs').value.split(',');
    if (arr.length < 2) {
        alert('Please give in more then one name');
    } else {
        document.getElementById('outputPairs').innerHTML = '';
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        for(let i = 0; i < arr.length; i += 2) {
            if (arr[i+3] === undefined && arr[i+2] !== undefined) {
                const liElement = document.createElement('li');
                liElement.innerText = `${arr[i]} & ${arr[i+1]} & ${arr[i+2]}`;
                firstPairs.push([arr[i],arr[i+1],arr[i+2]]);
                document.getElementById('outputPairs').appendChild(liElement);
                break;
            } else {
                const liElement = document.createElement('li');
                liElement.innerText = `${arr[i]} & ${arr[i+1]}`;
                firstPairs.push([arr[i],arr[i+1]]);
                document.getElementById('outputPairs').appendChild(liElement);
            }
        }
        console.log(firstPairs);
         document.querySelector('#inputPairs').value = '';
    }
});
