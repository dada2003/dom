var appElement = document.getElementById('app');
var linkElement = document.createElement('a');
linkElement.href='https://google.com';
linkElement.title='go to google';
linkElement.innerText='Google';

appElement.append(linkElement);
setTimeout(function(){
linkElement.href="https://facebook.com";
    linkElement.title="fb";
    linkElement.innerText="fb";
},300);
