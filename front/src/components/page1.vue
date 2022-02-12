<template>
  <div class="container">
    <div class="lmenu">
      <div class="profile">
        <div class="photo"></div>
        <div class="name">Bae Han Jin</div>
      </div>
      <div class="mbox">
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
    <div class="rmenu">
      <div class="top">
        <div class="toptext">New Recommendations</div>
        <div class="cardlist">
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
        </div>
      </div>
      <div class="bottom"></div>
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

@media (max-width: 1000px) {
  .cardlist {
    justify-content: center !important;
  }
}

* {
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.card {
  margin: 20px;
  padding: 20px;
  width: 500px;
  min-height: 150px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.cardlist {
  position: static;
  width: 100%;
  height: 389px;
  flex: none;
  order: 1;
  flex-grow: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  position: static;
  width: 100%;
  height: 543px;

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

  height: 543px;
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

.lmenu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  min-width: 255px;
  max-width: 255px;
  height: 1086px;
  background-color: white;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 1px;
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
  min-width: 740px;
  height: 1086px;

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
  height: 1086px;

  background: #fbfcfd;
}
</style>
 