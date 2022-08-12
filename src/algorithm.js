// something like greedy algorithm but without recursion

const algorithm = (cutList, maxCutLength) => {
  let cutListLength = cutList.length;
  let patternList = [];

  let i, j;
  let k = 0;
  let sumArray = [];

  for (i = 0; i < cutListLength; i++) {
    k = 0;
    j = 0;
    while (j < cutList[i].amount) {
      if (sumArray[k] == null) sumArray[k] = 0;
      if (sumArray[k] + cutList[i].length <= maxCutLength) {
        patternList[k] = Array.prototype.concat(
          patternList[k],
          cutList[i].length
        );
        if (patternList[k][0] == null) patternList[k].shift();

        sumArray[k] = sumArray[k] + cutList[i].length;
        j++;
      } else {
        k++;
      }
    }
  }

  const resultStr = printResults(cutList, patternList, maxCutLength);
  console.log("resultStr aea: ", resultStr);
  return resultStr;
};

const printResults = (myCutList, myFinalList, myMaxCutLength) => {
  let myCutListLength = myCutList.length;
  let myFinalListLength = myFinalList.length;
  let cutListSumCheck = 0;
  let finalListSumCheck = 0;
  let testCutListString = "";

  let cutListString = "\n";
  for (let i = 0; i < myCutListLength; i++) {
    cutListString =
      cutListString +
      "" +
      myCutList[i].length +
      " x " +
      myCutList[i].amount +
      " pcs.\n";
    cutListSumCheck =
      cutListSumCheck + myCutList[i].length * myCutList[i].amount;

    for (let j = 0; j < myCutList[i].amount; j++) {
      testCutListString = testCutListString + myCutList[i].length + ",";
    }
  }

  let patternWaste = 0;
  let patternLength = 0;
  let allPatternsWaste = 0;
  let allPatternsLength = 0;
  let percentageWaste;

  let cutNo = 0;
  let finalListString = "";
  let resultString = "";

  for (let i = 0; i < myFinalListLength; i++) {
    let singlePatternString = "";
    patternWaste = 0;
    patternLength = 0;
    for (let j = 0; j < Object.keys(myFinalList[i]).length; j++) {
      patternLength = patternLength + myFinalList[i][j];
      singlePatternString = singlePatternString + "" + myFinalList[i][j] + ", ";
      finalListSumCheck = finalListSumCheck + myFinalList[i][j];
    }
    patternWaste = myMaxCutLength - patternLength;
    allPatternsWaste = allPatternsWaste + patternWaste;
    allPatternsLength = allPatternsLength + patternLength;

    cutNo++;
    if (i < 9) {
      cutNo = "0" + cutNo;
    } else {
      cutNo = i + 1;
    }

    finalListString =
      finalListString +
      "\n" +
      cutNo +
      ") " +
      singlePatternString +
      " = " +
      patternLength +
      ": waste = " +
      patternWaste +
      ";";
  }
  percentageWaste = (allPatternsWaste / allPatternsLength) * 100;

  if (cutNo <= 9) {
    cutNo = cutNo.substring(1, cutNo.length);
  }
  let endingString =
    "\n\n" +
    "Total material required: " +
    myMaxCutLength +
    " x " +
    cutNo +
    " pcs. = " +
    myMaxCutLength * cutNo +
    "\nTotal waste: " +
    allPatternsWaste +
    " (" +
    parseFloat(percentageWaste).toPrecision(4) +
    "%)";

  resultString =
    "Length of material to be cut:\n" +
    myMaxCutLength +
    "\n\nOrder:" +
    cutListString +
    "\nMaterial loss per cut is not counted!\nCutting:" +
    finalListString +
    endingString;
  return resultString;
};

module.exports = { algorithm };
