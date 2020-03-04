const start = document.querySelector('.start');

start.addEventListener('click', () => {
  const eventSource = new EventSource("http://localhost:7070/sse");

  console.log(eventSource)

  eventSource.addEventListener('message', (evt) => {
    console.log(evt);
    messages.push(evt.data);
  });

  eventSource.addEventListener('open', (evt) => {
    console.log('connected');
  });

  eventSource.addEventListener('error', (evt) => {
    console.log('error');
  });

})

