const palindrome = ((data) => {
    
    let cleannedData = data.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    let reversedData = ''
    for (i = cleannedData.length - 1; i >= 0; i--){
        reversedData += cleannedData[i];
    
    }
    
    console.log(`reversed data: ${reversedData}, cleanedData: ${cleannedData}`)


    return reversedData === cleannedData;
})

streng = "A man, a plan, a canal, Panama"


console.log(palindrome(streng))