<template>
  <div class="container">
    <div class="item-1 title" id="title">HOMEPLATING</div>
    <div class="item-2 box">
      <div class="idt acenter" @click="em">
        <h class="wf">Email</h>
      </div>
      <div class="id acenter">
        <input
          class="ibox wf"
          type="email"
          v-model="email"
          placeholder="Email or ID"
        />
      </div>
      <div class="idt acenter">
        <h class="wf">Password</h>
      </div>
      <div class="pw acenter">
        <input
          class="ibox wf"
          type="password"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <div class="add">
        <input
          type="checkbox"
          class="cbox pointer"
          id="remember"
          v-model="remember"
        />

        <div class="sstext left pointer" @click="rcheck">Stay Signed In?</div>
        <div class="find sstext pointer">Forget ID/PW?</div>
      </div>
      <div class="loginbt acenter pointer" @click="login">
        <h class="loginbtt">LOGIN</h>
      </div>
      <div class="sup acenter">
        <div class="suptext pointer" @click="signup">Sign up for Free</div>
      </div>
      <div class="google acenter">
        <!-- <img src="../assets/gg.svg" class="gimage" />
        <div class="gtext pointer" @click="google">Sign in with Google</div> -->
      </div>
    </div>
  </div>
</template>
<script src="./page1.js"></script>
<script>
import page1 from "./page1.js";
export default page1;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  /* height: 100%; */
}

* {
}

.pointer {
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
  font-size: calc(12px + 0.3vw);
  font-family: Roboto;
}

.sup {
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
  margin-top: 0.3vw;
  margin-bottom: 0.3vw;
  background: #f0483e 0% 0% no-repeat padding-box;
  border-radius: 10px;
  max-height: 40px;
  opacity: 1;
}

.gimage {
  width: 1.3vw;
  height: auto;
  position: relative;
  left: 0.7vw;
  min-width: 25px;
}

.gtext {
  width: 100%;
  font-weight: bold;
  font-size: calc(12px + 0.3vw);
  font-family: Roboto;
  text-align: center;
}

.google {
  border: 2px solid #707070;
  border-radius: 17px;
  opacity: 1;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 0.3vw;
  margin-bottom: 0.3vw;
  max-height: 40px;
  width: 70%;
  height: auto;
  padding: 0.2vw;
}

.acenter {
  display: flex;
  align-items: center;
}

.loginbtt {
  color: #ffffff;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: calc(12px + 0.3vw);
  font-family: Roboto;
}

.loginbt {
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 0.3vw;
  margin-bottom: 0.3vw;
  max-height: 40px;
  width: 50%;
  background: #173ba0 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}

.grid {
  display: grid;
  grid-auto-columns: 1fr 1fr;
}

.cbox {
  width: 1vw;
  min-width: 10px;

  position: relative;
}

.left {
  text-align: left;
}

.find {
  text-align: right;
  color: #113fbe;
}

.sstext {
  font-weight: normal;
  font-size: calc(12px + 0.2vw);
  font-family: Roboto;
}

.add {
  display: grid;
  grid-template-columns: 2.3vw auto auto;
}

.ibox {
  width: 100%;
  height: 2vw;
  border-top: none;
  border-left: none;
  border-right: none;
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
  font-size: calc(12px + 1vw);
  font-family: Roboto;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  text-align: center;
  line-height: 6vw;
}

.container {
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr auto auto 1fr;
  column-gap: 1.4vw;
}

.item-1 {
  grid-column-start: 6;
  grid-column-end: 8;
  height: 6vw;
  grid-row: 2;
  /* background: pink; */
}

.item-2 {
  grid-column: 5 / 9;
  grid-row: 3;
  height: 25vw;
  margin-left: 3.5vw;
  margin-right: 3.5vw;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  row-gap: 1vw;
  min-width: 400px;
  min-height: 500px;
}
</style>
