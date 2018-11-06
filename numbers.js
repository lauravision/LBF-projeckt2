const spans = document.querySelectorAll('span');
const spanArr = Array.from(spans);

function rollUp(object,number,max,delay)
{
  number = parseInt(number, 10) + 5;
  if(number > max){return}
  else
  {
    object.innerHTML = number;
      setTimeout(() => {rollUp(object,number,max,delay)}, delay);
  }
}
spanArr.forEach( (span) => {
  rollUp(span, span.dataset.init, span.dataset.max,50)
});
