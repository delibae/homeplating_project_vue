<template>
  <div class="container">
    <div class="fly">
      <div class="lmenu">
        <div class="profile">
          <div class="photo"></div>
          <div class="name">Bae Han Jin</div>
        </div>

        <div class="mbox chosen">
          <div class="icon"></div>
          <div class="mtext">Home</div>
        </div>
        <div class="mbox imsi">
          <div class="icon imsii"></div>
          <div class="mtext imsiii">Create Recipe</div>
        </div>
        <div class="mbox imsi">
          <div class="icon imsii"></div>
          <div class="mtext imsiii">Community</div>
        </div>
        <div class="mbox imsi">
          <div class="icon imsii"></div>
          <div class="mtext imsiii">Management</div>
        </div>
        <div class="border"></div>
        <div class="mbox imsi">
          <div class="icon imsii"></div>
          <div class="mtext imsiii">Main Settings</div>
        </div>
        <div class="mbox imsi">
          <div class="icon imsii"></div>
          <div class="mtext imsiii">Notification</div>
        </div>
      </div>
    </div>
    <div class="rmenu">
      <div class="top">
        <div class="toptext">New Recommendations</div>
        <div class="cardlist">
          <div class="card blue"></div>
          <div class="card green"></div>
          <div class="card orange"></div>
          <div class="card red"></div>
          <div class="card green"></div>
          <div class="card orange"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="unable">
          <div class="untext">Useless Automation</div>
          <div class="discardlist">
            <div class="discard red">
              <div class="dis"></div>
              <div class="dcard"></div>
            </div>
            <div class="discard blue">
              <div class="dis"></div>
              <div class="dcard"></div>
            </div>
            <div class="discard orange" id="sett">
              <div class="dis"></div>
              <div class="dcard"></div>
            </div>
          </div>
        </div>
        <div class="recharge">
          <div class="retext">Device to be Recharged</div>
          <div class="remainlist">
            <!-- <div class="remain red"> -->
            <Progress
              v-bind:radius="acircle"
              :strokeWidth="10"
              v-bind:value="battery[0].stat"
              class="circle"
              id="hanjin"
            ></Progress>
            <!-- </div> -->
            <!-- <div class="remain blue"> -->
            <Progress
              v-bind:radius="acircle"
              :strokeWidth="10"
              v-bind:value="battery[1].stat"
              class="circle"
              id="hanjin"
            ></Progress>
            <!-- </div> -->
            <!-- <div class="remain orange"> -->
            <Progress
              v-bind:radius="acircle"
              :strokeWidth="10"
              v-bind:value="battery[2].stat"
              class="circle"
              id="hanjin"
            ></Progress>

            <!-- </div> -->
          </div>
        </div>
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

/* @media all and (orientation: portrait) {
  .container {
    flex-direction: column-reverse !important;
  }
  .lmenu {
    flex-direction: row !important;
    flex-wrap: wrap !important;
  }
} */
* {
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.vv {
  width: auto;
  height: auto;
}
.dis {
  width: 85%;
  height: 100%;
}

.remain:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}
.remain {
  padding: 20px;
  min-width: 280px;
  min-height: 70px;
  width: 25vw;
  height: 5vw;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}
.circle {
}
.red {
  background: linear-gradient(244.91deg, #fb1d1f 0%, #ff6b6d 100%);
}
.green {
  background: linear-gradient(244.91deg, #02a50b 0%, #67c56c 100%);
}
.blue {
  background: linear-gradient(64.91deg, #00b0f5 0%, #0085ff 100%);
}
.orange {
  background: linear-gradient(241.89deg, #ffa01d -1.79%, #ffc26d 103.12%);
}
.chosen:hover {
  border-radius: 12px;
  border: 1px solid lightskyblue;
}
.imsi:hover {
  border-radius: 12px;
  border: 1px solid black;
}
.remainlist {
  width: calc(100% - 50px);
  height: auto;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  padding-left: 50px;
}
.device:hover {
}
.device {
  min-width: 320px;
  min-height: 110px;
  width: 25vw;
  height: 5vw;
  margin-bottom: 30px;
  display: grid;

  transition: all 0.2s;
}

.retext {
  position: static;
  width: calc(100% - 50px);
  height: 144px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 144px;
  padding-left: 50px;
  color: rgba(0, 0, 0, 0.54);
  flex: none;
  order: 1;
  flex-grow: 0;
}

.untext {
  position: static;
  width: calc(100% - 50px);
  height: 144px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 144px;
  padding-left: 50px;
  color: rgba(0, 0, 0, 0.54);
  flex: none;
  order: 1;
  flex-grow: 0;
}

.discard:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}
.discard {
  padding: 20px;
  min-width: 280px;
  min-height: 70px;
  width: 25vw;
  height: 5vw;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}
.discardlist {
  width: calc(100% - 50px);
  height: auto;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  padding-left: 50px;
}
.unable {
  width: 50%;
  height: auto;
}

.recharge {
  width: 50%;
  height: auto;
}

.card {
  padding: 20px;
  min-width: 280px;
  min-height: 110px;
  width: 20vw;
  height: 7.8vw;
  display: grid;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  margin-bottom: 40px;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.cardlist {
  position: static;
  width: calc(100% - 125px);
  height: auto;
  flex: none;
  order: 1;
  flex-grow: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 75px;
  padding-left: 50px;
}

.toptext {
  position: static;
  width: 640px;
  height: 144px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 144px;
  padding-left: 50px;
  color: rgba(0, 0, 0, 0.54);
  flex: none;
  order: 1;
  flex-grow: 0;
}
.bottom {
  display: flex;
  flex-direction: row;

  position: static;
  width: 100%;
  height: auto;
  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}
.top {
  display: flex;
  flex-direction: column;
  position: static;

  height: auto;
  width: 100%;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.border {
  border-bottom: 2px solid #e5e5e5;
  width: 100%;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 10px;
}
.imsiii {
  color: gray !important;
}
.imsii {
  background: lightgray !important;
}
.imsi {
  background-color: #ffffff !important;
}
.mtext {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  height: 14px;
  width: 100px;

  line-height: 13px;
  color: #2196f3;

  margin: 2px 10px 2px 10px;

  font-weight: 500;
  font-size: 14px;
}
.icon {
  width: 20px;
  height: 20px;
  background-color: lightblue;
  border-radius: 50%;
  position: static;
  margin: 2px 25px 2px 10px;
}

.mbox {
  position: static;
  height: 40px;
  /* Inside auto layout */
  width: calc(100% - 19px);
  flex: none;
  order: 1;
  flex-grow: 0;

  margin: 10px 10px 0px 10px;

  /* Primary / 50 */

  background-color: #e3f2fd;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.name {
  position: static;
  width: 100%;
  height: 26px;

  /* H6 - med 20 (30px, 0.15px) */

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  letter-spacing: 0.15px;

  /* Black / High Emphasis */

  color: rgba(0, 0, 0, 0.87);

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 20px 0px;
}
.photo {
  position: static;
  width: 40px;
  height: 40px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  /* margin: 20px 0px; */

  border-radius: 50%;

  background-color: navy;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0px 0px 20px;

  position: static;
  width: calc(100% - 20px);
  height: 120px;

  /* Inside auto layout */

  flex: none;

  border-bottom: 2px solid #e5e5e5;
}

.fly {
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 1px;
  width: auto;
  height: 100%;
  background-color: white;
}

.lmenu {
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  min-width: 255px;
  max-width: 255px;
  height: 100%;
  background-color: white;
  /* Inside auto layout */
}

.rmenu {
  /* Frame 13 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: calc(100vw - 255px);
  min-width: 1185px;
  height: auto;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 1px;

  background-color: #fbfcfd;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  width: 100vw;
  height: 100%;

  background: #fbfcfd;
}
</style>
 