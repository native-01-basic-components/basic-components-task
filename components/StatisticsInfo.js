import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoCard from './InfoCard';
import words from '../data/words';

const StatisticsInfo = () => {
  // Helper to count entries matching target values across potential key names
  const countByStatus = (targetValues) => {
    return words.filter((item) => {
      if (typeof item === 'string') {
        return targetValues.includes(item.toLowerCase());
      }
      const val = item.status || item.state || item.type || item.category || '';
      return targetValues.includes(String(val).toLowerCase());
    }).length;
  };

  const toLearnCount = countByStatus(['to learn', 'tolearn', 'to_learn', '1']);
  const inProcessCount = countByStatus(['in process', 'inprocess', 'in_process', '2']);
  const learnedCount = countByStatus(['learned', '3']);

  return (
    <View style={styles.container}>
      <InfoCard caption="To learn" color="hotpink" number={toLearnCount} />
      <InfoCard caption="In process" color="lightgreen" number={inProcessCount} />
      <InfoCard caption="Learned" color="lightblue" number={learnedCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});

export default StatisticsInfo;