<script>
import Navbar from "./components/Navbar.vue";
import SearchBar from "./components/SearchBar.vue";
import Utilities from "./components/Utilities.vue";
import Modal from "./components/Modal.vue";
import { db } from "./config/firebase.js";
import { collection, getDocs } from 'firebase/firestore';

export default {
  name: "App",
  data() {
    return {
      modalOpen: false,
      utilitiesFetched: [],
    };
  },
  components: {
    Navbar,
    SearchBar,
    Utilities,
    Modal,
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    async fetchUtilities() {
      try {
        const utilitiesRef = collection(db, "utilities");
        const querySnapshot = await getDocs(utilitiesRef);

        querySnapshot.forEach((doc) => {
          this.utilitiesFetched.push(doc.data());
        });

        console.log(`Fetched ${this.utilitiesFetched.length} Utilities`);
      } catch (e) {
        console.error("Error fetching utilities: ", e);
        throw e;
      }
    },
  },
  beforeMount() {
    this.fetchUtilities()
  }
};
</script>

<template>
  <div class="container">
    <div>
      <Navbar />
    </div>
    <div>
      <SearchBar @open="toggleModal" />
    </div>
    <div>
      <Utilities :utilities="utilitiesFetched" />
    </div>
  </div>
  <div v-if="modalOpen">
    <Modal @close="toggleModal" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
}
</style>
