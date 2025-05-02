import React from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useState, useCallback } from "react";
import { COLORS, icons, SIZES } from "@/constants";
import { useFetch } from "@/hooks/useFetch";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch({
    endpoint: "job-details",
    query: {
      job_id: typeof params.id === "string" ? params.id : params.id?.[0] ?? "",
    },
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }/>
            </>
    </SafeAreaView>
  );
};

export default JobDetails;
