


console.log("ït works!");

// object structure

const arrayChannels = [
  {
    name: "Canal1",
    content: [
      {
        author: "Thomas Anderson",
        time: "13:00",
        avatar: "img/avatar.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        author: "Thomas Anderson",
        time: "13:00",
        avatar: "img/avatar.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        author: "Thomas Anderson",
        time: "13:00",
        avatar: "img/avatar.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    name: "Canal2",
    content: [
      {
        author: "Eliot Alderson",
        time: "13:00",
        avatar: "img/cowboy.png",
        text:
        "Fuck society",
      },
      {
        author: "Thomas Anderson",
        time: "13:00",
        avatar: "img/cowboy.png",
        text:
          "El problema es la elección",
      },
      {
        author: "Jhonny Mnemonic",
        time: "13:00",
        avatar: "img/cowboy.png",
        text:
          "I'm just a hard drive, man",
      },
    ],
  },
];



//const $inputValue = document.querySelector("#messageBoxId");
//const $button = document.querySelector(".sendButton");

//___________________ Cambiar por la variable del evento click________________
const nameChannel= "Canal2";


//optener el canal correcto para iterarlo en la función de imprimir mensaje
function getChannel(nameChannel){  
    return arrayChannels.find(function (channel){
        return channel.name === nameChannel;
    });
}


//variable que guarda el objeto completo del canal seleccionado
const channel = getChannel(nameChannel);



function printMessage (channel){

    channel.content.forEach( function (message) {
     //creación de elemento y asignación de atributos

    const messageBox = document.createElement('div');
    const messageMetaData = document.createElement('div');
    const avatar = document.createElement('img')
    const avatarImage = document.createElement('div');
    const userName = document.createElement('div');
    const timeStamp = document.createElement('div');
    const userMessage = document.createElement('div');
    const textMessage = document.createElement('p');
    
    
    messageBox.className = "messageBox";
    messageBox.appendChild(messageMetaData);

    messageMetaData.className = "messageBox";
    messageMetaData.appendChild(avatar);
    avatar.src = message.avatar

    messageMetaData.className = "messageMetaData";
    messageMetaData.appendChild(avatarImage);

    avatarImage.className = "avatarImage";
    messageMetaData.appendChild(avatarImage)

    userName.className = "userName";
    messageMetaData.appendChild(userName);
    userName.textContent = message.author;

    timeStamp.className="timeStamp";
    messageMetaData.appendChild(timeStamp);
    timeStamp.textContent= message.time;

    userMessage.className = "userMessage";
    messageBox.appendChild(userMessage);

    textMessage.className = "userMessage";
    userMessage.appendChild(textMessage)
    textMessage.textContent = message.text;

    msgContainer.appendChild(messageBox);

  });

};

printMessage(channel)
