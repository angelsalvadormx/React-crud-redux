import firebase from "./Firestore";

const api = {
  list(nameApi) {
    const db = firebase.firestore();
    /* db.settings({
      timestampsInSnapshots: true
    }); */
    return db
      .collection(nameApi)
      .orderBy("nombre")
      .get()
      .then(querySnapshot => {
        let data = querySnapshot.docs.map(
          doc => (doc = { ...doc.data(), id: doc.id })
        );
        //console.log(data);
        return data;
      });
  },
  create(nameApi, data) {
    const db = firebase.firestore();
    /* db.settings({
      timestampsInSnapshots: true
    }); */

    return db
      .collection(nameApi)
      .add(data)
      .then(function() {
        console.log("Document successfully added!");
        return true;
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        return false;
      });
  },
  read(nameApi, id) {},
  update(nameApi, id, updates) {
    const db = firebase.firestore();
    /*  db.settings({
      timestampsInSnapshots: true
    }); */
    return db
      .collection(nameApi)
      .doc(id)
      .update(updates)
      .then(function() {
        console.log("Document successfully edited!");
        return true;
      })
      .catch(function(error) {
        console.error("Error editing document: ", error);
        return false;
      });
  },
  // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
  remove(nameApi, id) {
    const db = firebase.firestore();
    /*  db.settings({
      timestampsInSnapshots: true
    }); */

    return db
      .collection(nameApi)
      .doc(id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
        return true;
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
        return false;
      });
  }
};

export default api;
