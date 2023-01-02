const initialState = {
    language: "en",
    menu: false
};

function rootReducer(state = initialState, { type }) {

    switch (type) {

        case "CHANGE_LANGUAGE":

            let language = state.language;

            return {
                language: language === "en" ? "es" : "en"
            }

        case "CHANGE_MENU":

            return {
                ...state,
                menu: !state.menu
            }

        default:
            return state;
    }

}

export default rootReducer;