<script>
import { db } from '../config/firebase.js';
import { collection, addDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      name: "",
      url: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    async sendForm () {
        const utilData = {
            name: this.name,
            url: this.url
        };

        try {
            const utilRef = collection(db, `utilities`);
            const docRef = await addDoc(utilRef, utilData);

            console.log(`Utility created with doc id: ${docRef.id}`);
        } catch (e) {
            console.error('Error creating utility: ', e);
            throw e;
        }

        this.closeModal();
    }
  },
};
</script>

<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <form @submit.prevent="sendForm">
        <div class="textInputWrapper">
          <input
            type="text"
            v-model="name"
            placeholder="Utility Name"
            class="textInput"
            required
          />
        </div>
        <div class="textInputWrapper">
          <input
            type="text"
            v-model="url"
            placeholder="URL to download page"
            class="textInput"
            required
          />
        </div>
        <button class="button" type="submit">
          <span class="button-content">Submit</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  top: 0px;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal {
  width: 500px;
  height: 300px;
  margin: 100px auto;
  background: rgb(40, 40, 40);
  border-radius: 10px;
}

.textInputWrapper {
  position: relative;
  width: 70%;
  top: 85px;
  margin: 12px auto;
  --accent-color: #69e9fd;
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper:before,
.textInputWrapper:after {
  content: "";
  left: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  bottom: -1px;
  z-index: 4;
  width: 100%;
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:focus-within:after {
  border-bottom: 2px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:after {
  content: "";
  transform: scaleX(0);
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  will-change: transform;
  border-bottom: 2px solid var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.textInput::placeholder {
  transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  opacity: 1;
  user-select: none;
  color: rgba(255, 255, 255, 0.582);
}

.textInputWrapper .textInput {
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  max-height: 36px;
  background-color: #252525;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #e8e8e8;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
}

.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  outline: none;
}

.textInputWrapper:focus-within .textInput,
.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  background-color: #353535;
}

.textInputWrapper:focus-within .textInput::placeholder {
  opacity: 0;
}
</style>
