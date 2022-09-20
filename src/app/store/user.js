import defaultStore from '@/app/arch/store/defaultStore';
import UserRequest from '@/app/request-classes/UserRequest';
import { DATA_TO_CHANGE, LOADING } from '@/app/arch/store/types.js';

const { store } = defaultStore(UserRequest);

store.getters.getList = (state) => {
  if (Object.keys(state.filters).length > 0) {
    return state.list.filter((el) =>
      el.login.toUpperCase().includes(state.filters.userName.toUpperCase())
    );
  }
  return state.list;
};

store.actions.setDataByUser = ({ commit, state }, data) => {
  commit(LOADING, true);
  const user = state.list.find(
    (el) => el.login.toUpperCase() == data.toUpperCase()
  );
  if (user) {
    console.log('asdfa', user);
    commit(DATA_TO_CHANGE, {
      data: user,
    });

    return new Promise((resolve, reject) => {
      //get repos
      UserRequest.getRepos(data)
        .then((response) => {
          console.log(response);
          commit(DATA_TO_CHANGE, {
            data: { ...state.data, repos: response.data },
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit(LOADING, false);
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      // get user data
      UserRequest.get(data)
        .then((response) => {
          commit(DATA_TO_CHANGE, {
            data: response.data,
          });

          //get repos
          UserRequest.getRepos(data).then((response) => {
            console.log(response);
            commit(DATA_TO_CHANGE, {
              data: { ...state.data, repos: response.data },
            });
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit(LOADING, false);
        });
    });
  }
};

store.actions.setReposData = ({ commit, state }, data) => {
  commit(LOADING, true);
  return new Promise((resolve, reject) => {
    UserRequest.getRepos(data)
      .then((response) => {
        console.log(response);
        commit(DATA_TO_CHANGE, {
          data: { ...state.data, repos: response.data },
        });
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        commit(LOADING, false);
      });
  });
};

export default {
  ...store,
};
