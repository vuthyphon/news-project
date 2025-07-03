<template>
<HeaderNav />
<router-view></router-view>
<FooterPage />

</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import MobileMenu from '@/components/MobileMenu.vue';
import HomePage from '@/pages/home/HomePage.vue';
import HeroSection from '@/pages/home/HeroSection.vue';
import Footer from '@/components/Footer.vue';
export default {
  components:{
    HeaderNav,
    MobileMenu,
    HeroSection,
    HomePage,
    FooterPage: Footer,
  },
  data() {
    return {


    }
  }
}
</script>

