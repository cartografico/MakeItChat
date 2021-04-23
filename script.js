


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
];
console.log(arrayChannels);


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
    //llamar elementos del dom para crearlos en variable
    const $messageBox = document.getElementById("messageBox");
    const $messageMetaData = document.getElementById("messageMetaData");
    const $avatarImage = document.getElementById("avatarImage");
    const $userName = document.getElementById("userName");
    const $userMessage = document.getElementById("userMessage");
    const $textMessage = document.getElementById("textMessage");
   
    //creación de elemento y asignación de atributos
    const messageBox = document.createElement('div');
    messageBox.className = "messageBox";
    messageBox.appendChild(messageMetaData)

    const messageMetaData = document.createElement('div');
    messageMetaData.className = "messageMetaData";
    

    const avatarImage = document.createElement('div');
    avatarImage.className = "avatarImage";

    const userName = document.createElement('div');
    userName.className = "userName";
    const timeStamp = document.createElement('div');
    timeStamp.className="timeStamp";
    const userMessage = document.createElement('div');
    userMessage.className = "userMessage";
    const textMessage = document.createElement('p');
    textMessage.className = "userMessage";

    

    
        



    container.appendChild(message.text);
    });
};


// ________________________________________
//   function renderMessage(message) {
    



//     const messageDiv = create('div');
//     const nameDiv = create('div')
//     const textDiv = create('div')
    
//     nameDiv.append(message.userName)
//     textDiv.append(message.text)  
  
//     messageDiv.append(nameDiv);
//     messageDiv.append(textDiv);
  
//     return messageDiv;
//   }
  
//     channel.content.forEach( function (message) {
//     container.appendChild(renderMessage(message));
//   });

// ________ para añadir despues de la creación del div con los demás elementos
//   const msgContainer=document.getElementById("msgContainer");
//   const messageBox=document.createElement('div');
//   messageBox.className = "messageBox";
//   messageBox.textContent= "Hola";
  
//   msgContainer.appendChild(messageBox);
  
//   console.log(msgContainer)
//   console.log(messageBox)

