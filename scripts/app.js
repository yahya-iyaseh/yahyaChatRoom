// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
//  add a new chat 
newChatForm.addEventListener('submit', e => {
 e.preventDefault();
 const message = newChatForm.message.value.trim();
 chatroom.addChat(message)
   .then(() => newChatForm.reset())
   .catch(err => console.log(err));
})
// update username 
newNameForm.addEventListener('submit', e =>{
 e.preventDefault();
 const newName = newNameForm.name.value.trim();
 // update name via chatroom
 chatroom.updateName(newName);
 newNameForm.reset();
 // show then hide the update message
 updateMssg.textContent = `Your name was updated to ${newName}` ;
 setTimeout(() => {
  updateMssg.textContent = '';
 }, 2000);
 
})
// update the chat room  
rooms.addEventListener('click', e =>{
  if(e.target.tagName === 'BUTTON'){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat => chatUI.render(chat));
  }
})
// check local st orage for a name
  const username = localStorage.username ? localStorage.username : 'anon';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);


// get teh chats and render
chatroom.getChats(data => chatUI.render(data));