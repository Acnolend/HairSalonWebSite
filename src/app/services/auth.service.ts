import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  async register(email: string, password: string, username: string, dateOfBirth: Date): Promise<void> {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user?.uid;
      if (uid) {
        await this.firestore.collection('users').doc(uid).set({
          username,
          email,
          dateOfBirth
        });
        console.log("Registro exitoso.");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert('Fallo al intentar registrarse, la cuenta ya existe');
      throw error;
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log("Inicio de sesión exitoso.");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert('Fallo al intentar iniciar sesion, no se ha encontrado ningun usuario');
      throw error;
    }
  }

  async getCurrentUserDataFromFirestore(): Promise<{ name: string | null, email: string | null, dateOfBirth: string | null }> {
    try {
      const user = await this.afAuth.currentUser;
      if (!user) throw new Error("User is not authenticated.");

      const userData = await user;
      if (!userData) throw new Error("User data is undefined.");

      const uid = userData.uid;
      const userDoc = await this.firestore.collection('users').doc(uid).get().toPromise();

      if (userDoc?.exists) {
        const userData = userDoc.data() as { username: string | null, email: string | null, dateOfBirth: string | null };
        return {
          name: userData.username || null,
          email: userData.email || null,
          dateOfBirth: userData.dateOfBirth || null
        };
      } else {
        return { name: null, email: null, dateOfBirth: null };
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
}
