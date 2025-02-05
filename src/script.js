// Select the node that will be observed for mutations
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    let buttons = document.querySelectorAll('button')
    buttons = Array.from(buttons).filter(button => {
      return button.innerText == 'Copy Path'
    })
    buttons.forEach(button => {
      button.onclick = async (e) => {
        e.preventDefault()
        let text = await navigator.clipboard.readText() 
        text = text.replace('src', window.location.origin)
        navigator.clipboard.writeText(text);
      }
    })
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);