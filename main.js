document.querySelector('#button').addEventListener('click', checker)

let patternTierNumber = [490, 148, 69, 704, 567, 723, 308, 517, 674, 341, 781, 885, 904, 297, 948, 530, 990, 67, 273, 461, 96, 16, 792, 66, 695, 790, 321, ,263, 772, 482, 651, 347, 159, 259, 587, 324, 843, 326, 48, 406, 764, 117, 370, 880, 876, 542, 882, 111, 730, 356, 354]

function checker(){
    let inputValue = Number(document.querySelector('#input').value)
    
    patternTierNumber.includes(inputValue) ? alert('tier 1 float') : alert('this is not a teir 1 float')
}