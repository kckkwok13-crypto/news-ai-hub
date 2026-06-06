"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

interface RatingsContextType {
  ratings: Record<string, { sum: number; count: number }>;
  userRatings: Record<string, number>;
  rate: (slug: string, rating: number) => void;
  getAverageRating: (slug: string) => number;
  getUserRating: (slug: string) => number | null;
}

const RatingsContext = createContext<RatingsContextType | undefined>(undefined);

export function RatingsProvider({ children }: { children: ReactNode }) {
  const [ratings, setRatings] = useState<Record<string, { sum: number; count: number }>>({});
  const [userRatings, setUserRatings] = useState<Record<string, number>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedRatings = localStorage.getItem("newsflow-ratings");
    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }
    const savedUserRatings = localStorage.getItem("newsflow-user-ratings");
    if (savedUserRatings) {
      setUserRatings(JSON.parse(savedUserRatings));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("newsflow-ratings", JSON.stringify(ratings));
    }
  }, [ratings, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("newsflow-user-ratings", JSON.stringify(userRatings));
    }
  }, [userRatings, mounted]);

  const rate = useCallback((slug: string, rating: number) => {
    setRatings((prev) => {
      const existing = prev[slug] || { sum: 0, count: 0 };
      const oldUserRating = userRatings[slug];

      let newSum = existing.sum;
      let newCount = existing.count;

      if (oldUserRating) {
        newSum -= oldUserRating;
        newCount -= 1;
      }

      newSum += rating;
      newCount += 1;

      return { ...prev, [slug]: { sum: newSum, count: newCount } };
    });
    setUserRatings((prev) => ({ ...prev, [slug]: rating }));
  }, [userRatings]);

  const getAverageRating = useCallback((slug: string) => {
    const data = ratings[slug];
    if (!data || data.count === 0) return 0;
    return data.sum / data.count;
  }, [ratings]);

  const getUserRating = useCallback((slug: string) => {
    return userRatings[slug] || null;
  }, [userRatings]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <RatingsContext.Provider value={{ ratings, userRatings, rate, getAverageRating, getUserRating }}>
      {children}
    </RatingsContext.Provider>
  );
}

export function useRatings() {
  const context = useContext(RatingsContext);
  if (!context) {
    throw new Error("useRatings must be used within a RatingsProvider");
  }
  return context;
}