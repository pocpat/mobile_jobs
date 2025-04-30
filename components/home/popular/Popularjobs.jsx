import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
const router = useRouter();
const isLoading= false;
const error = false;
  return (
    <View style={styles.container}>
       <View style={styles.header}>
       <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
       </View>
       <View style={styles.cardsContainer}>
       {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary}  />
       ) :  error? (
      <Text style={styles.error}>Something went wrong</Text>
       ): (
        <FlatList
          data={[1,2,3,4,5,6,7,8,9,10]}
          renderItem={({ item }) => (
            <PopularJobCard
              item={item}
              selectedJob={item}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          )}
          keyExtractor={(item) => item?.job_id} // the job_id is one of the data array properties
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
       )
       }
       </View>
    </View>
  )
}

export default Popularjobs