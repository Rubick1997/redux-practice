export default function breed(state = "Corgie", action) {
    switch (action.type) {
      case "CHANGE_BREED":
        return action.payload;
      default:
        return state;
    }
  }
  