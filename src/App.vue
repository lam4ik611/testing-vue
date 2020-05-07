<template>
  <div
          class="page-wrapper"
          :class="modalState ? 'page-wrapper--hidden' : ''"
          @click="toggle"
  >
    <Aside></Aside>
    <div class="page-wrapper__content">
      <Header></Header>
      <main class="main">
        <div class="main__container">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <Modal></Modal>
  </div>
</template>

<script>
  import Header from './modules/Header/Components/Header';
  import Aside from './modules/Aside/Components/Aside';
  import Modal from './components/Modal';
  /*import Notes from './modules/Notes/Components/Notes';*/

  import {mapState, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapState(['modalState']),
    },
    methods: {
      ...mapActions({
        setToggle: 'Header/setToggle',
      }),
      toggle($event) {
        if ($event.target) {
          return;
        }

        this.setToggle();
      },
    },
    components: {
      Header,
      Aside,
      Modal,
    },
  }
</script>

<style>
  @import '~normalize.css';
  @import './assets/css/index.css';
</style>
