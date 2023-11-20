import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc,where, query } from "firebase/firestore";


export const getItems = async (userId) => {
  try {
    const q = query(
      collection(db, 'users', userId, 'items'),
      where("quantity", ">=", 1)
    );

    const querySnapshot = await getDocs(q);

    // Access the documents using the `docs` property
    const mappedItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return mappedItems;
  } catch (error) {
    console.error("Error in getItems: ", error);
    throw error; // Rethrow the error for further handling if needed
  }
};


 const addUserItem = async (userId, newItem) =>{
  try{
    const userItemsCollectionRef = collection(db,"users", userId,"items" )
    const docRef = await addDoc(userItemsCollectionRef,{
    newItem
  }); 
  } catch (error){
    console.log("Error in addingUserItem", error);
  }
  
 }

 export { addUserItem}


