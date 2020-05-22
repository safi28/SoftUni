function extractFile(input) {
  let firstExtract = input.lastIndexOf("\\") + 1;
  let lastExtract = input.lastIndexOf(".") + 1;

  let firstExtinsion = input.substring(firstExtract, lastExtract - 1);
  let lastExtinsion = input.substring(lastExtract);

  console.log(`File name: ${firstExtinsion}`);
  console.log(`File extension: ${lastExtinsion}`);
}
