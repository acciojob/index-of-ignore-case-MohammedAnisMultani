function indexOfIgnoreCase(s1, s2) {
  s1 = s1.toLowerCase()
s2 = s2.toLowerCase();

for(let i=0; i<s1.length; i++){
    let s = "";
    for(let j=i; j<s2.length+i; j++){
        s = s + s1.charAt(j);
    }
    if(s==s2){
        return i;
    }
}
return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
