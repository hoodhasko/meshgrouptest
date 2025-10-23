import { FC, memo } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { TeamListItemResponse } from '../../../app/services';

interface TeamCardProps {
  team: TeamListItemResponse;
  onPress: () => void;
}

export const TeamCard: FC<TeamCardProps> = memo(({ team, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {team.crest && <Image source={{ uri: team.crest }} style={styles.logo} />}

      <Text style={styles.companyName}>{team.name}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F0F0F0',

    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#F8F9FA',
  },
  companyName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1D1D1D',
    marginBottom: 4,
  },
});
