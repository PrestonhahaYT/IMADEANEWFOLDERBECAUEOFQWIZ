// TODO: Make the binary convert
// (peramiter)


document.querySelector("#convertBtn").addEventListener('click', () => {document.querySelector("#output").value = document.querySelector("#binaryInput").value.split('').reverse().map((bit, index) =>
   {
    bit = parseInt(bit);
    bit = bit >= 0 && bit <=1? bit * (2 ** index) : 0;
    return bit
  }).reduce((sum, val) => sum + val, 0)})

  //ASSISTED BY TONNNNNY