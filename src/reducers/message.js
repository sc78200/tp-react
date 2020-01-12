const initMessages = {
  messages: [
    {
      username: "Alexis",
      message: "Hello my friend",
      sentAt: "01/01/2020"
    },

    {
      username: "Mathéo",
      message: "Hi !!",
      sentAt: "01/01/2020"
    },
    {
      username: "Leo",
      message: "Hello you",
      sentAt: "02/01/2020"
    },
    {
      username: "Laure",
      message: "Hi baby !",
      sentAt: "04/01/2020"
    }
  ]
};

const messages = (state = initMessages, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        messages: [
          ...state.messages,
          {
            message: action.message,
            username: action.username,
            sentAt: action.sentAt
          }
        ]
      };
    default:
      return state;
  }
};

export default messages;
