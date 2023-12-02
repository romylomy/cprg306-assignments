import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc,where, query,onSnapshot } from "firebase/firestore";


export const getItems = async (userId) => {
  try {
    const q = query(
      collection(db, 'users', userId, 'items')
      
    );
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot); 
    
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log(items)
    return items;
  } catch (error) {
    console.error('Error in getItems: ', error);
    throw error; 
  }
};


export const subscribeToItems = (userId, onUpdate) =>{
  const  itemsCollection = collection(db, 'users', userId, 'items')
  
  const unsubscribe = onSnapshot(itemsCollection, (querySnapshot)=>{
    const fetchItem = querySnapshot.docs.map((doc) =>({
      id:doc.id,
      ...doc.data(),
    }
      
    ));

    onUpdate( fetchItem)
  })
  return unsubscribe;
}



export const addUserItem = async (userId, newItem) =>{
  try{
    const userItemsCollectionRef = collection(db,"users", userId,"items" )
    const docRef = await addDoc(userItemsCollectionRef,{
    newItem
  }); 
  } catch (error){
    console.log("Error in addingUserItem", error);
  }
  
 }




