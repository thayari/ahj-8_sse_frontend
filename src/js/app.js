const start = document.querySelector('.start');
const messages = document.querySelector('.messages')

start.addEventListener('click', () => {
  const eventSource = new EventSource("http://localhost:7070/sse");

  console.log(eventSource)

  eventSource.addEventListener('message', (event) => {
    console.log(event);
    const message = JSON.parse(event.data);
    let iconType = '';
    if (message.type === 'goal') {
      iconType = './src/img/soccer.svg';
    } else if (message.type === 'freekick') {
      iconType = './src/img/exclamation.svg';
    }
    const elem = document.createElement('div');
    elem.classList.add('message-item');
    elem.innerHTML = `<div class="message-date">${message.date}</div>
    <div class="message-body"><img class="icon" src="${iconType}"><p class="message-text">${message.text}</p></div>`
    messages.insertAdjacentElement('beforeend', elem);
    elem.scrollIntoView();
  });

  eventSource.addEventListener('open', (event) => {
    console.log('connected');
  });

  eventSource.addEventListener('error', (event) => {
    console.log('error');
  });

})

