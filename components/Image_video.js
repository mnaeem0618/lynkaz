import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl, getFileExtension } from "@/helpers/helper";
// import ReactPlayer from 'react-player';
import VideoSection from "./must-video-player";

export default function Image_video({
  mp4_file_name,
  webm_file_name,
  file_loc = "images",
  poster,
  img_width = "1800",
  img_height = "447",
  vid_width = "1880",
  vid_height = "1224",
}) {
  const videoRef = useRef();
  let ext = getFileExtension(mp4_file_name);
  // const expression = /(Mac|iPhone|iPod|iPad)/i;
  // const [platform, setPlatform] = useState();
  // useEffect(() => {
  //   setPlatform(navigator.platform);
  // });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [mp4_file_name, webm_file_name]);

  return (
    <>
      {ext == "mp4" || ext == "webm" || ext == "mov" ? (
     
        
        <VideoSection
          mp4_file_name={mp4_file_name}
          file_loc={file_loc}
          webm_file_name={webm_file_name}
        />


      ) : (
        <Image
          src={cmsFileUrl(mp4_file_name, file_loc)}
          width={img_width}
          height={img_height}
          alt="banner"
        />
      )}
    </>
  );
}
