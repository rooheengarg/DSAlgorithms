var frequencySort = function(s) {
    const hmap = {}
    for (let i = 0; i < s.length; i++) {
         const char = s.charAt(i);
        hmap[s[i]] = hmap[s[i]] + 1 || 1;
    }
    const sorted = Object.keys(hmap).sort((a, b) => hmap[b] - hmap[a])
    console.log(sorted)
    let result = ''
    for (let i = 0; i < sorted.length; i++) {
        const char = sorted[i];
        result += char.repeat(hmap[char]);
    }
    return  result
    
};

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.