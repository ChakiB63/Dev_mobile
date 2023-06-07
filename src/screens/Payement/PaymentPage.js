
/*import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Constants';
import PayedCourse from '../Course/PayedCourse'

const PaymentPage = () => {
  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [ownerName, setOwnerName] = useState('');

  const handleCardNumberChange = (value) => {
    setCardNumber(value);
  };

  const handleExpirationDateChange = (value) => {
    setExpirationDate(value);
  };

  const handleCvcChange = (value) => {
    setCvc(value);
  };

  const handleOwnerNameChange = (value) => {
    setOwnerName(value);
  };

  const handlePaymentSubmit = async () => {
    const paymentData = {
      cardNumber,
      expirationDate,
      cvc,
      ownerName,
    };

    try {
      // Perform your API call here
      // ...

      // Navigate to a success screen or perform any necessary actions
      navigation.navigate('PayedCourse');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Fill up your personal information:</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={handleCardNumberChange}
        placeholderTextColor={colors.grey}

      />
      <TextInput
        style={styles.input}
        placeholder="Expiration Date"
        value={expirationDate}
        onChangeText={handleExpirationDateChange}
        placeholderTextColor={colors.grey}

      />
      <TextInput
        style={styles.input}
        placeholder="CVC"
        value={cvc}
        onChangeText={handleCvcChange}
        placeholderTextColor={colors.grey}

      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={ownerName}
        onChangeText={handleOwnerNameChange}
        placeholderTextColor={colors.grey}

      />
      
     
      <Button title="Submit" onPress={handlePaymentSubmit} style={styles.button}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGrey,

  },
  button:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:colors.lightblue,
    width:80,
    borderRadius:30,
    marginHorizontal:270, 
  },

});

export default PaymentPage;*/
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Constants';
import PayedCourse from '../Course/PayedCourse';
import { db, firebase } from '../../firebase/config';

const PaymentPage = () => {
  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [ownerName, setOwnerName] = useState('');

  const handleCardNumberChange = (value) => {
    setCardNumber(value);
  };

  const handleExpirationDateChange = (value) => {
    setExpirationDate(value);
  };

  const handleCvcChange = (value) => {
    setCvc(value);
  };

  const handleOwnerNameChange = (value) => {
    setOwnerName(value);
  };

  const handlePaymentSubmit = async () => {
    const paymentData = {
      cardNumber,
      expirationDate,
      cvc,
      ownerName,
    };

    try {
      // Perform your Firestore query here
      const paymentRef = db.collection('payment');
      const query = paymentRef
        .where('cardNumber', '==', cardNumber)
        .where('expirationDate', '==', expirationDate)
        .where('cvc', '==', cvc)
        .where('ownerName', '==', ownerName);

      const querySnapshot = await query.get();

      if (!querySnapshot.empty) {
        Alert.alert('Payment Approved', 'Your payment has been successfully processed.');

        // Navigate to PayedCourse
        navigation.navigate('PayedCourse');
      } else {
        // Show alert for incorrect information
        Alert.alert('Information Incorrect', 'Please enter correct payment information.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Fill up your personal information:</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={handleCardNumberChange}
        placeholderTextColor={colors.grey}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiration Date"
        value={expirationDate}
        onChangeText={handleExpirationDateChange}
        placeholderTextColor={colors.grey}
      />
      <TextInput
        style={styles.input}
        placeholder="CVC"
        value={cvc}
        onChangeText={handleCvcChange}
        placeholderTextColor={colors.grey}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={ownerName}
        onChangeText={handleOwnerNameChange}
        placeholderTextColor={colors.grey}
      />
      <Button title="Submit" onPress={handlePaymentSubmit} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGrey,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightblue,
    width: 80,
    borderRadius: 30,
    marginHorizontal: 270,
  },
});

export default PaymentPage;
