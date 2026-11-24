import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from './firebase';

export async function uploadLearningMaterial(file: File, ownerId: string, classId: string, onProgress?: (value:number)=>void) {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const fileRef = ref(storage, `classes/${classId}/materials/${Date.now()}-${safeName}`);
  const task = uploadBytesResumable(fileRef, file, { contentType: file.type });
  const url = await new Promise<string>((resolve,reject)=>{
    task.on('state_changed', s=>onProgress?.(Math.round(s.bytesTransferred/s.totalBytes*100)), reject, async()=>resolve(await getDownloadURL(task.snapshot.ref)));
  });
  const record = await addDoc(collection(db,'materials'), { name:file.name, url, storagePath:fileRef.fullPath, size:file.size, mimeType:file.type, ownerId, classId, createdAt:serverTimestamp() });
  return { id:record.id, url };
}
