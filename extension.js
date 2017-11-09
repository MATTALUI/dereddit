let host = window.location.hostname;
let body = document.getElementsByTagName('body')[0];
let head = document.getElementsByTagName('head')[0];
if (true){
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
    }
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    #modal {
      background-color: white;
      border-radius: 25px;
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

  body.append(outerDiv);
}
