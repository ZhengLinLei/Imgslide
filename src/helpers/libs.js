const helper = {};

helper.randomNumber = (length)=>{
    // GENERATE RANDOM TOKEN
    const keys = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let exportToken = '00';

    for (let i = 0; i < length-2; i++) {
        const numRand = Math.floor(Math.random() * keys.length); // GET RANDOM NUMBER
        
        exportToken += keys[numRand];
    }

    return exportToken;
}

helper.extValidate = (ext) =>{
    const acceptedKeys = ['.png', '.jpg', '.gif', '.bmp', '.jpeg', '.webp']; 

    if(acceptedKeys.includes(ext)){ return true }
    return false;
}

helper.chunkArr = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size) );

module.exports = helper;