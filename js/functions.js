const addButton = document.querySelector('#addnew')
const rowsMade = document.querySelector('#rowcount')
const table = document.querySelector('table')
//const listOfArrays = []
let rowCount = 0
//click button => newJoker()
addButton.addEventListener('click', () => newJoker())


//new joker func
const newJoker = () => {
    let newArray = []
    //create array of 7 random numbers
    for(let i = 0; i <= 7; i++){
        newArray.push(createRandomNum(0,9))
    }
    //listOfArrays.push(newArray)
    rowsMade.innerHTML++
    //call addRow func
    addRow(newArray)
}

//create ran num
const createRandomNum = (min,max) => {
    return Math.floor(Math.random() * (max+1))+min
}

const addRow = (array) => {
    //add table row
    const row = table.insertRow()
    //for every element in array, inser a cell into row 
    array.forEach((element,index) => {
        row.insertCell(index).innerHTML = array[index]
    })
}