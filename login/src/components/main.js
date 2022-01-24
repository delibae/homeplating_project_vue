import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "page1",
  data() {
    return {
      email: "",
      password: "",
      remember: NaN,
    };
  },

  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert("로그아웃됨")
        location.href = "./"
      }).catch((error) => {
        // An error happened.
      });
    },
    google() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          location.href = "https://www.naver.com/"
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    },
    em() {
      console.log(firebase.auth().currentUser);
    },
    rcheck() {
      if (document.getElementById("remember").checked == true) {
        document.getElementById("remember").checked = false;
      } else {
        document.getElementById("remember").checked = true;
      }
    },
    signup() {
      location.href = './signup';
    },
    home: function (event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert("Hello " + this.id + "!");
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.id);
      }
    },
    login() {
      if (document.getElementById("remember") == true) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() => {
            return firebase.auth().signInWithEmailAndPassword(this.email, this.password);
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
        console.log(firebase.auth().currentUser);
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            function (user) {
              alert("로그인 완료");
              console.log(document.getElementById("remember").checked);
            },
            function (err) {
              alert("에러 : " + err.message);
            }
          );
      }
    },
  },
  props: {
    msg: String,
  },

  metaInfo: {
    title: "Tripllo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};