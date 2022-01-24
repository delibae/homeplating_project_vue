import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

import isEmpty from "../assets/js/isEmpty.js";


export default {
  name: "page2",

  data() {
    return {
      email: "",
      password: "",
      phonenumber: "",
      Name: "",
    };
  },

  mounted: function () {
    document.getElementById("submit").disabled = true;
  },

  methods: {
    tt() {
      console.log(1);
      console.log(firebase.auth().currentUser);
    },
    home: function (event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert("Hello " + this.id + "!");
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.id);
      }
    },

    red: function () {
      var a = document.getElementById("password").value;
      var b = document.getElementById("cpassword").value;
      console.log(a);
      console.log(b);
      if (a != b) {
        document.getElementById("cpw").style.color = "red"
        document.getElementById("cpw").innerHTML = "Password Do Not Match"
      } else {
        document.getElementById("cpw").style.color = "black"
        document.getElementById("cpw").innerHTML = "Confirm Password"
      }
    },



    activateButton: function (element) {
      console.log(element.target.id);
      var email = isEmpty(document.getElementById("email").value);
      var password = isEmpty(document.getElementById("password").value);
      var cpassword = isEmpty(document.getElementById("cpassword").value);
      var name = isEmpty(document.getElementById("Name").value);
      var phonenumber = isEmpty(document.getElementById("phonenumber").value);
      var e = document.getElementById("allCheck");
      var a = document.getElementById("password").value;
      var b = document.getElementById("cpassword").value;
      if (e.checked && a == b && email == true && name == true && password == true && cpassword == true && phonenumber == true) {
        document.getElementById("submit").disabled = false;
      } else {
        document.getElementById("submit").disabled = true;
      }
    },

    allCheck: function (e) {
      // 전체 체크 버튼 클릭시 전체 체크 및 해제
      if (e.target.checked) {
        document.querySelectorAll(".check_all_list").forEach(function (v, i) {
          v.checked = true;
          console.log(i);
        });
      } else {
        document.querySelectorAll(".check_all_list").forEach(function (v, i) {
          v.checked = false;
          console.log(i);
        });
      }
    },

    checkAllList: function (e) {
      //체크 버튼 클릭시 전체 체크 버튼 체크 및 해제
      let checkCount = 0;
      document.querySelectorAll(".check_all_list").forEach(function (v, i) {
        if (v.checked === false) {
          checkCount++;
          // console.log(i);
        }
      });
      if (checkCount > 0) {
        document.getElementById("allCheck").checked = false;
      } else if (checkCount === 0) {
        document.getElementById("allCheck").checked = true;
      }
    },

    signup() {
      var db = firebase.firestore();
      db.collection("users")
        .doc(this.email)
        .set({
          email: this.email,
          name: this.Name,
          phonenumber: this.phonenumber,
        })
        .then(() => {
          console.log("Document written with ID: ");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            alert("회원가입 완료");
            location.href = "./"
          },
          function (err) {
            alert("에러:" + err.message);
          }
        );
      console.log("진행중");
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