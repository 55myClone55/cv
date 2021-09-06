
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

    dialogs: [
        { id: 1, name: 'Kent' },
        { id: 2, name: 'Brat' },
        { id: 3, name: 'Marat' },
        { id: 4, name: 'Yaya' },
        { id: 5, name: 'Malena' },
        { id: 6, name: 'Drunya' }
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'Mahai' },
        { id: 3, message: 'Zaryazai' },
        { id: 4, message: 'Za' },
        { id: 5, message: 'Zay' }

    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };

        default:
            return state;
    }


}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;