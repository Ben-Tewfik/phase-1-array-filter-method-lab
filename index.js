function findMatching(array, driver) {
  const newArray = array.filter((element) => {
    if (element === driver) {
      return element;
    } else if (element.toLowerCase() === driver.toLowerCase()) {
      return element;
    }
  });
  return newArray;
}

function fuzzyMatch(array, letters) {
  const newArray = array.filter((element) => element.startsWith(letters));
  return newArray;
}

function matchName(array, driver) {
  const newArray = array.filter((element) => element.name === driver);
  return newArray;
}
