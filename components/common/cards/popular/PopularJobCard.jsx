import React from 'react'
import { View, Text , TouchableOpacity, Image} from 'react-native'
import styles from './popularjobcard.style'
import { checkImageURL } from '@/app/(tabs)/utils'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={ ()=> handleCardPress(item)}>
    <TouchableOpacity
    
      style={styles.logoContainer(selectedJob, item)}
      onPress={ ()=> handleCardPress(item)}>
     {/* // <Image
      //   source={{ uri: checkImageURL(item.employer_logo)
      //     ? item.employer_logo
      //    : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
      //    }}
      //   resizeMode="contain"
      //   style={styles.logoImage}/> */}
      <Image
  source={
    checkImageURL(item.employer_logo)
      ? { uri: item.employer_logo }
      : require('@/assets/icons/defaultCompanyLogo.png')
  }
  resizeMode="contain"
  style={styles.logoImage}
/>
    
    </TouchableOpacity>



    <Text style={styles.companyName} numberOfLines={1}>
      {item.employer_name}
    </Text>
    <Text style={styles.jobName} numberOfLines={1}>
      {item.job_title}
    </Text>


    <View style={styles.location}>
      <Text style={styles.location} numberOfLines={1}>
        {item.job_country}
      </Text>
      <Text style={styles.time} numberOfLines={1}>
        {item.job_employment_type}
      </Text>
      <Text style={styles.salary} numberOfLines={1}>
        {item.job_salary}
      </Text>
    </View>



    </TouchableOpacity>
  )
}

export default PopularJobCard