import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoCard = ({ color, caption, number }) => {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <Text style={[styles.number, { color }]}>{number}</Text>
      <Text style={[styles.caption, { color }]}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Optional subtle overlay
  },
  number: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  caption: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default InfoCard;