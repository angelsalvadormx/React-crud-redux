import firebase from "./Firestore";
const BASE_URL = "http://localhost:2000";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 50, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
}

const api = {
  list(nameApi) {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    return db
      .collection(nameApi)
      .get()
      .then(querySnapshot => {
        let data = querySnapshot.docs.map(
          doc => (doc = { ...doc.data(), id: doc.id })
        );
        console.log(data);
        return data;
      });
  },
  getById(nameApi, id) {
    return callApi(`/${nameApi}/${id}`);
  },
  create(nameApi, data) {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    return db.collection(nameApi).add(data);
  },
  read(nameApi, id) {
    return callApi(`/${nameApi}/${id}`);
  },
  update(nameApi, id, updates) {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    return db.collection(nameApi).doc(id).update(updates);
  },
  // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
  remove(nameApi, id) {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    return db
      .collection(nameApi)
      .doc(id)
      .delete();
  }
};

export default api;
