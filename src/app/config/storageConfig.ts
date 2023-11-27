import { useCallback } from "react";
import fire from "./firebaseConfig";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage(fire);


export default storage
