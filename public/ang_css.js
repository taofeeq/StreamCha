.App {
      width: 100%;
      max-width: 960px;
      height: 500px;
      margin: 0 auto;
      display: flex;
      border: 1px solid #ccc;
      margin-top: 30px;
    }

    ul {
      list-style: none;
    }

    .sidebar {
      flex-basis: 30%;
      background-color: #300d4f;
      color: #fff;
      padding: 5px 10px;
    }

    .sidebar section {
      margin-bottom: 20px;
    }

    .sidebar h2 {
      margin-bottom: 10px;
    }

    .user-list li {
      margin-bottom: 10px;
      font-size: 16px;
      display: flex;
      align-items: center;
    }

    .presence {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: #fff;
      margin-right: 10px;
      border-radius: 50%;
    }

    .presence.online {
      background-color: green;
    }

    .chat-window {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .chat-window > * {
      padding: 10px 20px;
    }

    .chat-header, .chat-footer {
      display: flex;
      align-items: center;
    }

    .chat-header {
      border-bottom: 1px solid #ccc;
    }

    .chat-session {
      flex-grow: 1;
      display: flex;
      overflow: hidden;
    }

    .message-list {
      flex-grow: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .user-message {
      margin-top: 10px;
    }

    .user-message span {
      display: block;
    }

    .user-id {
      font-weight: bold;
      margin-bottom: 3px;
    }

    .chat-footer {
      border-top: 1px solid #ccc;
    }

    .chat-footer form, .chat-footer input {
      width: 100%;
    }