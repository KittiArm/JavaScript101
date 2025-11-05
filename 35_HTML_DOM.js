// HTML DOM (Document Object Model)

/*

Web Browser always build DOM (when web was dowloaded completed) and treat HTML like a tree (object) or we call "DOM".

# Prop.
1. Access and change element propertes on the webpage
2. control and change css format
3. interactive with the event on the webpage


#Access Element via Id, Tag, Class
1. Id : document.getElementById("idName");
2. Tag : document.getElementByTagName("tagName");
3. Class : document.getElementByClassName("className");

# DOM Document
1. Change HTML contemt : element.innerHTML
2. Change text content : element.innerText
3. Change style element : element.styl.properties=value
# Method >> element.setAttribute(attribute, value)

*/

function displayText() {
    const a = document.querySelector('#demo'); // Id
    const b = document.querySelector('.myjs'); // Class
    const c = document.querySelectorAll('p'); // Tag
    
    a.innerHTML = "<h3>JitkornOat</h3>";
    b.innerHTML = "<h3>BU</h3>";
    console.log(a);
    console.log(b);
    console.log(c);
}

