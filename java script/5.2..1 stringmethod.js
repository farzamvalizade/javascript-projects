let data=`JavaScript is a high-level programming language that follows the ECMAScript standard. It was originally designed as a scripting language for websites but became widely adopted as a general-purpose programming language, and is currently the most popular programming language in use.[1] JavaScript is usually found running in a web browser as interactive or automated content, ranging from popup messages and live clocks to large web applications. JavaScript is also commonly used in server-side programming through platforms like Node.js,[2] or "embedded" in non-JavaScript applications where the base programming language lacks the high-level functionality that JavaScript offers.`;
console.log(data.length);
//java script start from 0
console.log(data[0]);
console.log(data.slice(0,10));
console.log(data.substr(0,4));
console.log(data.includes("JavaScript"));
data=data.toLowerCase();
console.log(data.includes("javascript"));
console.log(data.search("js")); 
console.log(data.replace("javascript",'js'));
console.log(data);
let sp="        farzam     ";
console.log(sp.trim());
let st="farzam valizade";
console.log(st.startsWith("f"));
console.log(st.endsWith("e"))
let num="51"
console.log(num.padStart(4,'0'))
console.log(num.padEnd(4,'0'))