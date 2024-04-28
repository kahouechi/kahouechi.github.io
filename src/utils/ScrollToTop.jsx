import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function scrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })}, [pathname]);

  return null;
};