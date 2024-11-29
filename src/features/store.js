import { configureStore } from "@reduxjs/toolkit";

// * Reducers
import trademarkRegistrationReducer from "./trademarkRegistration/trademarkRegistrationSlice";

export default configureStore({
  reducer: {
    trademarkRegistration: trademarkRegistrationReducer
  }
})