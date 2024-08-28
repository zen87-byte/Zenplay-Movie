import axios from "axios";
import { useState, useEffect } from "react";

export interface detailsType{
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  rating: number
}

export const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDAwODZmMjExMGJhODMwZDEwZDM3ZDhjYTM0ZGFhMiIsInN1YiI6IjY0OGM4OWFhMDc2Y2U4MDBhZDcyYjlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GBTW1UV81mVUui2vRmHF7HL31dcH_VJPtDfTaI5eBII",
  },
};

export async function fetchCategory(endpoint: string) {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/${endpoint}`,
    fetchOptions
  );
  return res.json();
}

export async function fetchDetails(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    fetchOptions
  );
  return res.json();
}

export async function fetchReviews(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    fetchOptions
  );
  return res.json();
}

export async function fetchQuerySearch(endpoint: string, page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${endpoint}&page=${page}`,
    fetchOptions
  );
  return res.json();
}