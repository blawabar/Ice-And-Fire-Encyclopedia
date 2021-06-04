import { createStore, applyMiddleware, Action } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { charactersReducer } from "./reducer";

export default function configureStore() {
  const storeEnhancer = composeWithDevTools(applyMiddleware(thunk));

  const store = createStore(charactersReducer, storeEnhancer);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducer.ts", () =>
      store.replaceReducer(charactersReducer),
    );
  }

  return store;
}

export type RootState = ReturnType<typeof charactersReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
