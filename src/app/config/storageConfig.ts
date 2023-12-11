import fire from "./firebaseConfig";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

const storage = getStorage(fire);

export type arrVideo = {
    url: string,
    filename: string,
}

export async function listVideosInRoot() {
    try {
        const storageRef = ref(storage);
        const files = await listAll(storageRef);
        const arrVideos: Array<arrVideo> = []

        // Filtra os arquivos para encontrar os vídeos
        const videoFiles = files.items.filter(item => {
            const fileName = item.name.toLowerCase();
            return (
                fileName.endsWith('.mp4') ||
                fileName.endsWith('.mov') ||
                fileName.endsWith('.avi') ||
                fileName.endsWith('.mkv')
            );
        });
        
        videoFiles.forEach(async file => {
            const downloadURL = await getDownloadURL(ref(storage, file.fullPath));
            console.log(file.fullPath)
            const extension = file.name.split('.').pop()
            const fileNameOnly = file.name.replace(`.${extension}`, '')
            arrVideos.push({url: downloadURL, filename: fileNameOnly})
        });

        return arrVideos;
    } catch (error) {
        console.error('Erro ao listar vídeos:', error);
    }
}
