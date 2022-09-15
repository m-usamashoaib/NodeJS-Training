//New Buffer object created
const buffer= new Buffer(20);
console.log(buffer);

//Write into buffer
buffer.write('Hello World');
console.log(buffer);

//Read from buffer
buffer.toString('utf-8')
console.log(buffer.toString());

//Concatinate two buffers
const buffer1= new Buffer('Buffer 1');
const buffer2= new Buffer('Buffer 2');
const buffer3=Buffer.concat([buffer1,buffer2])
console.log(buffer3.toString());

//Compare two buffers
const buf1= new Buffer('Buffer');
const buf2= new Buffer('Buffer');
const result=buf1.compare(buf2)
console.log(result);

//Copy Buffer
const b=Buffer('Original')
const b1=Buffer(5)
b.copy(b1);
console.log(b1.toString());

//Length of buffer
const buf=Buffer('Pure Logics')
console.log(buf.length);

//Slice Buffer
const buffer4=Buffer('Hello World')
const buffer5=buffer4.slice(0,5)
console.log(buffer5.toString());