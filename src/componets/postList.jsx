import { useEffect } from "react";
import { useState } from "react";
import { usePostURL } from "../utilis/postUrljsx";
function Postlist() {
  const { data, error, loading } = usePostURL();
  return <></>;
}
