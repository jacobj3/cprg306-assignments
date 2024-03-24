import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

async function getItems(userId) {
  const items = [];

  try {
    const querySnapshot = await getDocs(
      collection(db, `users/${userId}/items`)
    );

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error getting user items:", error);
    throw error;
  }
}

async function addItem(userId, item) {
  try {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}

export { getItems, addItem };
