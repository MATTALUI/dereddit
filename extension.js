let host = window.location.hostname;
let body = document.getElementsByTagName('body')[0];
let head = document.getElementsByTagName('head')[0];
console.log(head);
if (true){
  while (head.children.length >0){
    head.removeChild(head.children[0]);
  }
  while (body.children.length > 0){
    body.removeChild(body.children[0]);
  }
  let styles = document.createElement('link');
  styles.rel = "stylesheet";
  styles.type = "text/css";
  styles.href = "modal.css";
  head.append(styles);
  let outerDiv = document.createElement('div');
  outerDiv.id = "modal";
  let newh1 = document.createElement('h1');
  newh1.innerHTML = 'get back to work, you bum!';
  outerDiv.append(newh1);
  body.append(outerDiv);
}
