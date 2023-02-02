import { Alert } from 'react-native';
import { IAccount } from '../../modules/types/accounts';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { limit } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';

export const handleTransfer = async (fromAccount: IAccount, cardNumber: string) => {
    Alert.prompt('Sum transfer', 'Enter the transfer amount:', async (sum: string) => {
        try {
            //Validate the transfer
            if (!Number(sum)) {
                Alert.alert('Transfer amount must be a number');
                return;
            }

            if (Number(sum) <= 0) {
                Alert.alert('Transfer amount must be greater than 0');
                return;
            }

            if (fromAccount.balance <= Number(sum)) {
                Alert.alert('You don\'t have enough money to transfer');
                return;
            }

            let accountToId = '';
            let currentToBalance = '';

            //Get account
            const querySnapshot = await getDocs(query(
                collection(db, 'accounts'), where('cardNumber', '==', cardNumber), limit(1)
            ));
            querySnapshot.docs.forEach(doc => {
                accountToId = doc.id
            });
            //get account reference
            const docRefTo = doc(db, 'accounts', accountToId);
            const docSnapTo = await getDoc(docRefTo);

            if (docSnapTo.exists()) {
                currentToBalance = docSnapTo.data().balance;
            } else {
                Alert.alert('The card where you are sending money was not found');
                return;
            }

            await updateDoc(docRefTo, {
                balance: currentToBalance + Number(sum)
            });

            const docRefFrom = doc(db, 'accounts', fromAccount._id);

            await updateDoc(docRefFrom, {
                balance: fromAccount.balance - Number(sum)
            });
            return;
        } catch (error: any) {
            Alert.alert('Error transfer', error.message);
        }
    });
}