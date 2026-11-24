import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export type UserRole = 'teacher' | 'student' | 'admin';
export async function registerUser(name: string, email: string, password: string, role: UserRole) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName: name });
  await setDoc(doc(db, 'users', credential.user.uid), { uid: credential.user.uid, name, email, role, xp: 0, coins: 0, level: 1, createdAt: serverTimestamp() });
  return credential.user;
}
export async function loginUser(email: string, password: string) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const snapshot = await getDoc(doc(db, 'users', credential.user.uid));
  if (!snapshot.exists()) throw new Error('Profil pengguna belum tersedia. Hubungi administrator.');
  return { user: credential.user, profile: snapshot.data() as { role: UserRole } };
}
export async function logoutUser() { await signOut(auth); }
