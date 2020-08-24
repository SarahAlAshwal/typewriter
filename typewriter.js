const sentence = 'hello there from lighthouse labs';

for (let index = 0; index < sentence.length; index++) {
  setTimeout(() => {

    process.stdout.write(sentence[index]);
    
    
  }, index * 50);
  

}


setTimeout(() => {
  
  process.stdout.write('\n');

}, sentence.length * 50);

 




