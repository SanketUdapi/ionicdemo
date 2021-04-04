<template>
  <ion-Page>
    <ion-header>
      <ion-toolbar>
        <div class="buttons" slot="end">
          <div class="inner-div">
            <img src="" alt="" />
            <ion-text class="hover-inner"> All orders</ion-text>
          </div>
          <div class="inner-div">
            <img src="" alt="" /><ion-text class="hover-inner">
              Create A Order</ion-text
            >
          </div>
          <div class="inner-div">
            <img src="" alt="" /><ion-text class="hover-inner">
              Allot a lawyer</ion-text
            >
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-Page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent } from "@ionic/vue";
export default {
  props: ["pagename"],
  components: {
    IonPage,
    IonHeader,

    IonContent,
    IonToolbar,
  },
};
</script>

<style scoped >
.title {
  font-size: 3.5rem;
}
.buttons {
  margin: 20px;
  padding: 20px;
  width: 400px;
  display: flex;
  justify-content: space-between;
}

.inner-div {
  display: flex;
  flex-direction: column;
}

.hover-inner:hover {
  padding: 10px;
  font-size: 20px;
  transition: ease-in-out 0.3s;
}
</style>