import UserRepository from '~/assets/javascripts/repositories/user_repository';
import MainHeader from '~/components/MainHeader.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data: function() {
    return {currentUser: null};
  },
  mounted: function() {
    const repository = new UserRepository();

    repository.fetch().then(user => {
      this.currentUser = user;
    });
  }
};
