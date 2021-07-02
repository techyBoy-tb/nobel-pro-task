import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './FormInputStyles';

export default function FormInput({ labelValue, placeholderText, ...rest }) {
    return (
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#666'
        {...rest}
      />
    );
  }
  