const firebaseConfig = {
    apiKey: "AIzaSyA2PfU85Jw27lJs6Xsxk7rGhncpdZJREuo",
    authDomain: "let-s-chat-web-app-ca1d5.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-ca1d5-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-ca1d5",
    storageBucket: "let-s-chat-web-app-ca1d5.appspot.com",
    messagingSenderId: "578930136562",
    appId: "1:578930136562:web:520d1fd161e7f39ea6c76b",
    measurementId: "G-W51RVNPNBP"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0
    });

    document.getElementById("msg").value = "";
  }