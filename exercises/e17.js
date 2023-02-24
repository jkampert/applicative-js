export function minBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  }
  let minElement = array[0];
  let minValue = cb(minElement);

  for (let i = 1; i < array.length; i++) {
    const currentValue = cb(array[i]);
    if (currentValue < minValue) {
      minElement = array[i];
      minValue = currentValue;
    }
  }

  return minElement;
}



export function maxBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  }
  let maxElement = array[0];
  let maxValue = cb(maxElement);

  for (let i = 1; i < array.length; i++) {
    const currentValue = cb(array[i]);
    if (currentValue > maxValue) {
      maxElement = array[i];
      maxValue = currentValue;
    }
  }

  return maxElement;
}
