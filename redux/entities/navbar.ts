import { createSlice } from "@reduxjs/toolkit";

const navbar = createSlice({
  name: "navbar",
  initialState: {
    categories: false,
    brands: false,
    collections: false,
    deals_and_offers: false,
    support: false,
    options: false,
    search: false,
    cart: false,
    hasMobile: false,
    mobilemenu: false
  },
  reducers: {
    changeNav: (state, action) => {
      switch (action.payload.type) {
        case "1":
          return {
            ...state,
            categories: !state.categories,
            brands: false,
            collections: false,
            deals_and_offers: false,
            support: false,
            options: false,
            search: false,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: action.payload.hasMobile || false
          };
        case "2":
          return {
            ...state,
            categories: false,
            brands: !state.brands,
            collections: false,
            deals_and_offers: false,
            support: false,
            options: false,
            search: false,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: action.payload.hasMobile || false
          };
        case "3":
          return {
            ...state,
            categories: false,
            brands: false,
            collections: !state.collections,
            deals_and_offers: false,
            support: false,
            options: false,
            search: false,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: action.payload.hasMobile || false
          };
        case "4":
          return {
            ...state,
            categories: false,
            brands: false,
            collections: false,
            deals_and_offers: !state.deals_and_offers,
            support: false,
            options: false,
            search: false,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: action.payload.hasMobile || false
          };
        case "5":
          return {
            ...state,
            categories: false,
            brands: false,
            collections: false,
            deals_and_offers: false,
            support: !state.support,
            options: false,
            search: false,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: action.payload.hasMobile || false
          };
        case "6":
          return {
            ...state,
            categories: false,
            brands: false,
            collections: false,
            deals_and_offers: false,
            support: false,
            options: !state.options,
            search: false,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: action.payload.hasMobile || false
          };
        case "7":
          return {
            ...state,
            categories: false,
            brands: false,
            collections: false,
            deals_and_offers: false,
            support: false,
            options: false,
            search: !state.search,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: false
          };
        case "8":
          return {
            ...state,
            categories: false,
            brands: false,
            collections: false,
            deals_and_offers: false,
            support: false,
            options: false,
            search: false,
            cart: !state.cart,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: false
          };
        case "9": 
          return {
            ...state,
            categories: false,
            brands: false,
            collections: false,
            deals_and_offers: false,
            support: false,
            options: false,
            search: false,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: !state.mobilemenu
          };
        default:
          return {
            categories: false,
            brands: false,
            collections: false,
            deals_and_offers: false,
            support: false,
            options: false,
            search: false,
            cart: false,
            selectedText: action.payload.selectedText,
            hasMobile: action.payload.hasMobile,
            mobilemenu: false
          };
      }
    },
  },
});

export const { changeNav } = navbar.actions;
export default navbar.reducer;
