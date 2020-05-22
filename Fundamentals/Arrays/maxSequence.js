function maxSeqOfElement(arr) {
  let indBiggSeq = -1;
  let maxSeqLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let currentSeq = 1;

    for (let j = i + 1; j < arr.length; j++) {
      let next = arr[j];

      if (current != next) {
        break;
      }
      currentSeq++;
    }
    if (currentSeq > maxSeqLength) {
      maxSeqLength = currentSeq;
      indBiggSeq = i;
    }
  }
  let el = arr[indBiggSeq];
  console.log(`${el} `.repeat(maxSeqLength));
}
