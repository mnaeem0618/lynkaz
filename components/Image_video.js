import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl, getFileExtension } from "@/helpers/helper";

export default function Image_video({mp4_file_name, webm_file_name, file_loc='images', poster, img_width = '670',img_height = '447', vid_width = '1880',vid_height = '1224' }){

    let ext = getFileExtension(mp4_file_name);



    return (
        <>
            {ext == "mp4" || ext == "webm" || ext == "mov" ? (
                    <video
                      className="CuAnimation_video__70Pvw"
                      height={vid_height}
                      width={vid_width}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      poster={poster}
                      preload="auto"
                    >

                        <source
                        type="video/webm"
                        src={cmsFileUrl(webm_file_name, file_loc)}
                        data-src={cmsFileUrl(webm_file_name, file_loc)}
                      />
                      <source
                        type="video/mp4"
                        src={cmsFileUrl(mp4_file_name, file_loc)}
                        data-src={cmsFileUrl(mp4_file_name, file_loc)}
                      />

                      

                      {/* <source
                        type="video/webm"
                        src={cmsFileUrl(mp4_file_name, file_loc)}
                        data-src={cmsFileUrl(mp4_file_name, file_loc)}
                      /> */}


                      
                    </video>
                  ) : (
                    <Image
                      src={cmsFileUrl(mp4_file_name, file_loc)}
                      width={img_width}
                      height={img_height}
                      alt="banner"
                    />
                  )}





        </>
    )
}