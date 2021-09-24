import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { User } from "@/backend/User";
import { Game } from "@/backend/Game";

export interface State {
  user: User;
  game: Game;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    user: {},
    game: {},
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    },
    setGame(state, game: Game) {
      state.game = game;
    },
  },
  actions: {},
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
