import firebase from './firebase';

const auth = firebase.auth();
const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export const signInWithCredentials = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const signUpWithCredentials = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithGithub = () => auth.signInWithPopup(githubProvider);
export const signOut = () => auth.signOut();

export const onAuthChange = callback => auth.onAuthStateChanged(callback);
export const createUserDoc = async (user, additionalData) => {
	if (!user) return;

	const userRef = firestore.doc(`users/${user.uid}`);
	const userSnapshot = await userRef.get();

	if (!userSnapshot.exists) {
		const { displayName, email, photoURL } = user;
		const createdAt = new Date();
		try {
			await userRef.set({ displayName, email, createdAt, photoURL, ...additionalData });
		} catch (e) {
			console.log('error creating user doc', e.message);
		}
	}
	return userRef;
};
