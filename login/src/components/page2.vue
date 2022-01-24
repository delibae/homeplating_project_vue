
<template>
  <div class="container">
    <div class="item-1 title" id="title" @click="tt">Sign Up</div>
    <div class="item-2 box">
      <div class="idt acenter">
        <h class="wf">Email</h>
      </div>

      <div class="id acenter">
        <input
          class="ibox wf"
          type="email"
          placeholder="Email"
          v-model="email"
          id="email"
        />
      </div>

      <div class="idt acenter">
        <h class="wf">Password</h>
      </div>

      <div class="pw acenter">
        <input
          class="ibox wf"
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
          @change="activateButton"
        />
      </div>

      <div class="idt acenter">
        <h class="wf" id="cpw">Confirm Password</h>
      </div>

      <div class="pw acenter">
        <input
          class="ibox wf"
          id="cpassword"
          type="password"
          placeholder="Confirm Password"
          @change="activateButton, red()"
        />
      </div>

      <div class="idt acenter">
        <h class="wf">Name</h>
      </div>

      <div class="pw acenter">
        <input
          class="ibox wf"
          type="text"
          id="Name"
          placeholder="Name"
          v-model="Name"
          @change="activateButton"
        />
      </div>

      <div class="idt acenter">
        <h class="wf">Phone Number</h>
      </div>

      <div class="pw acenter">
        <input
          id="phonenumber"
          class="ibox wf"
          type="text"
          placeholder="Phone Number"
          v-model="phonenumber"
        />
      </div>

      <div></div>

      <div class="m_check_wrap acenter agreeleft">
        <input
          type="checkbox"
          class="check_all_list checkbox"
          id="agree1"
          v-on:click="checkAllList"
          @change="activateButton"
        />

        <label for="agree1" class="agreetext"> Agree to the Terms</label>
      </div>

      <div class="m_check_wrap acenter agreeleft">
        <input
          type="checkbox"
          class="check_all_list checkbox"
          id="agree2"
          v-on:click="checkAllList"
          @change="activateButton"
        />
        <label for="agree2" class="agreetext"
          >Use of collected information</label
        >
      </div>
      <div class="m_check_wrap acenter agreeleft">
        <input
          type="checkbox"
          class="check_all_list checkbox"
          id="agree3"
          v-on:click="checkAllList"
          @change="activateButton"
        />
        <label for="agree3" class="agreetext"
          >Sharing collected information
        </label>
      </div>
      <div class="m_check_wrap acenter">
        <input
          type="checkbox"
          class="check_all_list1 checkbox"
          id="allCheck"
          v-on:click="allCheck"
          v-on:change="activateButton"
        />

        <label for="allCheck" class="agreetext">All agree</label>
      </div>

      <div class="sbtrow acenter">
        <input
          type="button"
          name="submit"
          id="submit"
          class="signupbt"
          value="Sign Up"
          @click="signup"
        />
      </div>
    </div>
  </div>
</template>

<script src="./page2.js"></script>
<script>
import page2 from "./page2.js";
export default page2;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  /* height: 100%; */
}

* {
}

.checkbox {
  width: calc(12px + 0.3vw);
  height: calc(12px + 0.3vw);
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1.3px solid #ddd;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-left: 2px;
  cursor: pointer;
}

.checkbox:checked {
  background-color: orange;
  border: none;
}

.agreeleft {
  margin-left: 0.6vw;
}
.sbtrow {
  grid-row: 17 / 19;
}
.signupbt {
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
  height: 4vw;
  max-height: 45px;
  background: #173ba0 0% 0% no-repeat padding-box;
  border-radius: 10px;
  border: none;
  opacity: 1;
  color: white;
  font-weight: bold;
  font-size: calc(12px + 0.3vw);
  font-family: Roboto;
  min-height: 20px;
  cursor: pointer;
}

.signupbt:disabled {
  background: white;
  color: black;
  border: 1px solid black;
}

.agreetext {
  font-weight: normal;
  font-size: calc(12px + 0.2vw);
  font-family: Roboto;
  margin-left: 3px;
  cursor: pointer;
}

.wf {
  width: 100%;
}

.suptext {
  color: #ffffff;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: calc(12px + 0.5vw);
  font-family: Roboto;
}

.sup {
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
  height: 0.6vw;
  background: #f0483e 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}

.gimage {
  width: 1vw;
  height: auto;
  position: relative;
  left: 0.5vw;
}

.acenter {
  display: flex;
  align-items: center;
}

.grid {
  display: grid;
  grid-auto-columns: 1fr 1fr;
}

.check {
  position: relative;
  top: -0.4vw;
}

.left {
  text-align: left;
}

.stext {
  font-size: 0.7vw;
}

.ibox {
  width: 100%;
  height: 1.3vw;
  border-top: none;
  border-left: none;
  border-right: none;
  font: normal Roboto;
  font-size: calc(12px + 0.1vw);
}

.idt {
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: calc(12px + 0.3vw);
  font-family: Roboto;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  vertical-align: middle;
  line-height: 1.61vw;
}

.box {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #000000;
  border-radius: 24px;
  opacity: 1;
  padding: 2.5vw;
}

.title {
  font-weight: bold;
  font-size: calc(12px + 0.8vw);
  font-family: Roboto;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  position: relative;
  left: calc(10px + 5vw);
  line-height: 6vw;
  bottom: -4px;
}

.container {
  width: 100vw;
  height: 90vh;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10px 6vw auto 10px;
  column-gap: 1.4vw;
}

.item-1 {
  grid-column-start: 5;
  grid-column-end: 9;

  grid-row: 2;
  /* background: pink; */
}

.item-2 {
  grid-column: 5 / 9;
  grid-row: 3;
  height: 30vw;
  margin-left: 3.5vw;
  margin-right: 3.5vw;
  display: grid;
  grid-template-rows: repeat(19, 1fr);
  row-gap: 0.5vw;
  min-width: 400px;
  min-height: 600px;
}
</style>
