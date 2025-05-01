import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import { useFetch } from '@/hooks/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch({
    endpoint: 'search',
    query: {
      query: 'developer',
      page: 1,
      num_pages: 1,
    },
  });
  console.log('data', data);

  const handleCardPress = (item) => {
    setSelectedJob(item.job_id);
    router.push(`/job-details/${item.job_id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity onPress={refetch}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Something went wrong</Text>
        ) : (
         
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              //handleCardPress={() => handleCardPress(job)}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
