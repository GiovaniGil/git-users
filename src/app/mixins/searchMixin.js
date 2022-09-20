import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      userSetDataToList: 'userStore/setDataToList',
      setFilter: 'userStore/setFilter',
    }),
    async searchUser(search) {
      if (search) await this.setFilter({ userName: search });
      else await this.setFilter();
    },
    async handleDados(data) {
      await this.userSetDataToList(data);
    },
  },

  destroyed() {
    this.setFilter();
  },
};
