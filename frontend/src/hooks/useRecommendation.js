import {

    useMemo
 
 } from "react";
 
 export default function
 useRecommendation(
 
    recommendations,
 
    selectedFilter
 
 ) {
 
    // =========================
    // FILTERS
    // =========================
 
    const filters =
       useMemo(() => {
 
          return [
 
             "All",
 
             ...new Set(
 
                recommendations.flatMap(
 
                   (item) => [
 
                      ...(item.style_tags || []),
 
                      ...(item.hair_types || []),
 
                      item.formality
                   ]
                )
             )
          ];
 
       }, [recommendations]);
 
    // =========================
    // FILTERED RECOMMENDATIONS
    // =========================
 
    const filteredRecommendations =
       useMemo(() => {
 
          return recommendations
 
          .filter((item) => {
 
             if (
                selectedFilter
                === "All"
             ) {
 
                return true;
             }
 
             const matchesStyleTag =
 
                item.style_tags
                ?.includes(
                   selectedFilter
                );
 
             const matchesHairType =
 
                item.hair_types
                ?.includes(
                   selectedFilter
                );
 
             const matchesFormality =
 
                item.formality
                === selectedFilter;
 
             return (
 
                matchesStyleTag ||
 
                matchesHairType ||
 
                matchesFormality
             );
          })
 
          // =====================
          // SORT BY COMPATIBILITY
          // =====================
 
          .sort(
 
             (a, b) =>
 
                b.compatibility_rank
 
                -
 
                a.compatibility_rank
          );
 
       }, [
 
          recommendations,
 
          selectedFilter
       ]);
 
    return {
 
       filters,
 
       filteredRecommendations
    };
 }