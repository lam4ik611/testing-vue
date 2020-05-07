<template>
    <header class="header">
        <div class="header__content">
            <div class="header__logo">
                <router-link :to="{name: 'Home'}" class="logo">
                    <img
                        src="../../../assets/image/journal.svg"
                        class="img-responsive"
                        alt="Logo"
                    >
                </router-link>
            </div>
           <div class="header__toggle">
                <div
                    class="toggle"
                    :data-active="toggleState"
                    @click="toggle"
                >
                    <div class="toggle__icon">
                        <span class="toggle__line"></span>
                        <span class="toggle__line"></span>
                        <span class="toggle__line"></span>
                        <span class="toggle__line"></span>
                    </div>
                </div>
           </div>
        </div>
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapState('Header', ['toggleState']),
        },
        methods: {
            ...mapActions({
                doToggle: 'Header/doToggle',
            }),
            toggle() {
                this.doToggle();
            },
        },
    }
</script>

<style>

</style>