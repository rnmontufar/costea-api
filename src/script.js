//events, buttons, etc, without optimizing algorithm
const al = require("./algorithm");

class cut {
  constructor(length, amount) {
    this.length = length;
    this.amount = amount;
  }
}

const start = () => {
  let cutList = getInputList();
  
  //maxCutLength
  let maxCutLength = 60;

  if (inputRepeatedLengths(cutList) == true) {
    console.log("The lengths set for cutting cannot be repeated");
    return;
  }
  if (inputExceedsMaxCutLength(cutList, maxCutLength) == true) {
    console.log(
      "At least one of the cutting lengths exceeds the specified material length"
    );
    return;
  }
  if (inputIsZeroOrNull(cutList, maxCutLength) == true) {
    console.log("Lengths and quantities cannot be equal zero");
    return;
  }

  cutList = cutList.sort(compareDesc);
  const result = al.algorithm(cutList, maxCutLength);
  return result;
}

const inputIsZeroOrNull = (myCutList, myMaxCutLength) => {
  for (i = 0; i < myCutListLength; i++) {
    if (myCutList[i].length == 0) {
      return true;
    }
    if (myCutList[i].amount == 0) {
      return true;
    }
  }
  if (myMaxCutLength == 0 || myMaxCutLength == null) {
    return true;
  }
  return false;
}

const inputExceedsMaxCutLength = (myCutList, myMaxCutLength) => {
  myCutListLength = myCutList.length;
  for (i = 0; i < myCutListLength; i++) {
    if (myCutList[i].length > myMaxCutLength) {
      return true;
    }
  }
  return false;
}

const inputRepeatedLengths = (myCutList) => {
  myCutListLength = myCutList.length;
  //check if there are no repeated lengths
  for (i = 0; i < myCutListLength; i++) {
    let currentLength = myCutList[i].length;
    for (j = 0; j < myCutListLength; j++) {
      if (j != i) {
        if (currentLength == myCutList[j].length) {
          return true;
        }
      }
    }
  }
  return false;
}

const getInputList = () => {
  //Cantidad de cortes
  let listLength = 3;
  let cutLength;
  let cutAmount;

  let cutList = [];
  cutList.length = 0;

  let j = 0;
  for (let i = 0; i < listLength; i++) {
    cutLength = 2;
    cutAmount = 3;
		//cutLength = parseInt($("#input-length-" + i).val());
    //cutAmount = parseInt($("#input-amount-" + i).val());

    if (cutLength >= 0 && cutAmount >= 0) {
      cutList[j] = new cut(cutLength, cutAmount);
      //console.log('cut: '+j+", length: "+cutList[j].length+", amount: "+cutList[j].amount);
      j++;
    }
  }
	const cutList2 = [
		{ length: 2, amount: 3 },
		{ length: 3, amount: 4 },
	]
	console.log("cutList: ", cutList);
	console.log("cutList2: ", cutList2);

  return cutList2;
}

const compareDesc = (a, b) => {
  if (a.length > b.length) {
    return -1;
  }
  if (a.length < b.length) {
    return 1;
  }
  return 0;
}

module.exports = { start };