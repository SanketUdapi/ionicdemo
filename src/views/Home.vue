<template>
  <base-layout pagename="ssup">
    <ion-row class="card-content"
      ><ion-col size-lg="10" size-sm="12">
        <ion-card>
          <ion-card-content>
            <div class="wrap">
              <ion-item
                ><ion-label>state</ion-label>
                <ion-select
                  ><ion-select-option>1</ion-select-option>
                  <ion-select-option>2</ion-select-option>
                  <ion-select-option>3</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item
                ><ion-label>district</ion-label>
                <ion-select
                  ><ion-select-option>1</ion-select-option>
                  <ion-select-option>2</ion-select-option>
                  <ion-select-option>3</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item
                ><ion-label>town</ion-label>
                <ion-select
                  ><ion-select-option>1</ion-select-option>
                  <ion-select-option>2</ion-select-option>
                  <ion-select-option>3</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item
                ><ion-label>experience</ion-label>
                <ion-select
                  ><ion-select-option>1</ion-select-option>
                  <ion-select-option>2</ion-select-option>
                  <ion-select-option>3</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item
                ><ion-label>type of report</ion-label>
                <ion-select
                  ><ion-select-option>1</ion-select-option>
                  <ion-select-option>2</ion-select-option>
                  <ion-select-option>3</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item><ion-button>searchbutton</ion-button></ion-item>
            </div>
            <div class="wrap">
              <ion-item>Sr.NO</ion-item>
              <ion-item>Name</ion-item>
              <ion-item>Years of Experience</ion-item>
              <ion-item>district</ion-item>
              <ion-item>View Profile</ion-item>
              <ion-item>Select</ion-item>
            </div>
            <div class="wrap" v-for="i in 4" :key="i">
              <ion-item>Sr.NO</ion-item>
              <ion-item>Name</ion-item>
              <ion-item>Years of Experience</ion-item>
              <ion-item>district</ion-item>
              <ion-item>View Profile</ion-item>
              <ion-checkbox></ion-checkbox>
            </div>
            <ion-button class="submit-button">Submit</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-col></ion-row
    >
  </base-layout>
</template>

<script >
import {} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.drop2 {
  max-width: 500px;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>