const initialState = {
    language: "en"
};

function rootReducer(state = initialState, { type }) {

    switch (type) {

        case "CHANGE_LANGUAGE":

            let language = state.language;

            return {
                language: language === "en" ? "es" : "en"
            }

        default:
            return state;
    }

}

export default rootReducer;