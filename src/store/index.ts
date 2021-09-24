import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { User } from "@/backend/User";
import { RoomInfo } from "@/backend/RoomInfo";

export interface State {
  user: User;
  roomInfo: RoomInfo;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    user: {},
    roomInfo: {},
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    },
    setRoomInfo(state, roomInfo: RoomInfo) {
      state.roomInfo = roomInfo;
    },
  },
  actions: {},
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
