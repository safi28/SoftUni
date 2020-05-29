import * as firebase from "firebase/app";
class DataService {
  createData(col) {
    return firebase.firestore().collection(col);
  }
}
export default new DataService();
