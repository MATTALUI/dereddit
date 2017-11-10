httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = handleRequest;
httpRequest.open('GET', 'https://myblocker.herokuapp.com/temp', true);
httpRequest.send();
// handleRequest();

function handleRequest(){
  if (httpRequest.readyState === 4){
    const data = JSON.parse(httpRequest.responseText);
    let host = window.location.hostname;
    let body = document.getElementsByTagName('body')[0];
    let head = document.getElementsByTagName('head')[0];
    let blocked = false;
    data.blocked.forEach((blockedSite)=>{
      if (blockedSite.indexOf(host) > -1) {
        blocked = true;
      }
    });
    if (blocked){
      while (head.children.length >0){
        head.removeChild(head.children[0]);
      }
      while (body.children.length > 0){
        body.removeChild(body.children[0]);
      }
      let styles = document.createElement('style');
      styles.innerHTML = `
        html {
          background-color: #202328;
          height: 100vh;
        }
        h1 {
          text-align: center;
          margin-top: 6%;
        }
        p {
          text-align: center;
          margin-bottom: 30px;
        }
        #modal {
          background-color: white;
          border-radius: 25px;
          width: 80%;
          margin: 5% auto;
          padding-top: 15%;
          padding-bottom: 15%;
        }
      `
      body.append(styles);

      let outerDiv = document.createElement('div');
      outerDiv.id = "modal";

      let newh1 = document.createElement('h1');
      newh1.innerHTML = 'Get out of here, you!';
      outerDiv.append(newh1);

      let warning = document.createElement('p');
      warning.innerHTML = 'It looks like this is one of those sites that you have decided not to use any longer.';
      outerDiv.append(warning);

      // let moreButton = document.createElement('button');
      // moreButton.id = "moreButton";
      // moreButton.innerHTML = "Find out more!";        outerDiv.append(moreButton);

      body.append(outerDiv);
      // document.getElementById('moreButton').addEventListener('click', clickMoreButton);
    }
  }
}
function clickMoreButton(){
  console.log('show more!');
}
