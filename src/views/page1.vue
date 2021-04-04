<template>
  <base-layout pagename="ssup">
    <div class="blur">
      <ion-row class="card-content"
        ><ion-col size-lg="8">
          <ion-card>
            <ion-card-header>
              <ion-card-title>
                Which Order do you wish to Create?
              </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="flex">
                <div class="flex-row">
                  <div class="categories">Search Order</div>
                  <ion-checkbox></ion-checkbox>
                </div>
                <ion-item>
                  <ion-label>DEED</ion-label>
                  <ion-button @click="$refs.fileInput1.click()" fill="clear">
                    Upload PDF
                  </ion-button>
                  <input
                    ref="fileInput1"
                    type="file"
                    multiple
                    style="display: none"
                    @change="onchange"
                  />
                </ion-item>
                <ion-item>
                  <ion-label>Aditional Documents</ion-label>
                  <ion-button @click="$refs.fileInput1.click()" fill="clear">
                    Upload PDF
                  </ion-button>
                  <input
                    ref="fileInput1"
                    type="file"
                    multiple
                    style="display: none"
                    @change="onchange"
                  />
                </ion-item>
                <ion-item
                  ><ion-label>Select a Lawyer</ion-label>
                  <ion-select
                    ><ion-select-option>1</ion-select-option>
                    <ion-select-option>2</ion-select-option>
                    <ion-select-option>3</ion-select-option>
                  </ion-select>
                </ion-item>
              </div>
              <div class="flex">
                <div class="flex-row">
                  <div class="categories">Litigation</div>
                  <ion-checkbox></ion-checkbox>
                </div>
                <ion-item
                  ><ion-label position="floating">First Name</ion-label
                  ><ion-input></ion-input
                ></ion-item>
                <ion-item
                  ><ion-label position="floating">Last Name </ion-label
                  ><ion-input></ion-input
                ></ion-item>
                <ion-item
                  ><ion-label position="floating">Address</ion-label
                  ><ion-input></ion-input
                ></ion-item>
                <ion-item
                  ><ion-label>Select a Lawyer</ion-label>
                  <ion-select @click="home()"
                    ><ion-select-option>1</ion-select-option>
                    <ion-select-option>2</ion-select-option>
                    <ion-select-option>3</ion-select-option>
                  </ion-select>
                </ion-item>
              </div>
              <div class="flex">
                <div class="flex-row">
                  <div class="categories">CERSAI</div>
                  <ion-checkbox></ion-checkbox>
                </div>
                <ion-item
                  ><ion-label position="floating">PAN ID</ion-label
                  ><ion-input></ion-input
                ></ion-item>
              </div>
              <div class="flex">
                <div class="flex-row">
                  <div class="categories">ROC</div>
                  <ion-checkbox></ion-checkbox>
                </div>
                <ion-item
                  ><ion-label position="floating">CIN .No</ion-label
                  ><ion-input></ion-input
                ></ion-item>
              </div>
              <ion-button class="submit-button">Submit</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col></ion-row
      >
    </div>
  </base-layout>
</template>

<script>
import {
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonInput,
  IonCheckbox,
} from "@ionic/vue";
export default {
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonInput,
  IonCheckbox,
  methods: {
    onchange(e) {
      this.file = e.target.files[0];
      this.url = URL.createObjectURL(this.file);
      this.name = this.file.name;
      this.image = this.url;
    },
    home() {
      setTimeout(() => {
        this.$router.push("/whichOrderInner");
      }, 3000);
    },
  },
};
</script>

<style>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.flex-row {
  display: flex;
  justify-content: space-evenly;
}
.categories {
  font-size: 20px;
}
ion-card-header {
  display: flex;
  align-items: center;
  flex-direction: column;
}
ion-button {
  margin-top: 20px;

  float: right;
}

ion-card-title {
  font-size: 30px;
}

.card-content {
  display: flex;
  justify-content: center;
}

.submit-button {
  border-radius: 20px;
  margin: 30px;
}
</style>