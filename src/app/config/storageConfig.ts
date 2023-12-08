import { useCallback } from "react";
import fire from "./firebaseConfig";
import { getStorage, listAll, ref } from "firebase/storage";

const storage = getStorage(fire);
const listRef = ref(storage)

async function getAlgo() {
    const list = await listAll(listRef)
    const listNameFolder = list.prefixes.forEach((folders) => console.log(folders))
    const listItems = list.prefixes.forEach((files) => console.log(files.fullPath))
    
    return {listItems, listNameFolder}
}

export default getAlgo
