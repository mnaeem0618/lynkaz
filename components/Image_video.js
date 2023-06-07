import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Text from "@/components/text";
import Image from "next/image";
import { cmsFileUrl, getFileExtension } from "@/helpers/helper";

export default function Image_video({file_name, file_loc='images'}){

    let ext = getFileExtension(file_name);

    return (
        <>
            {ext == "mp4" || ext == "webm" ? (
                    <video
                      className="CuAnimation_video__70Pvw"
                      height="1224"
                      width="1880"
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      poster="images/logo.svg"
                      preload="auto"
                    >
                      <source
                        type="video/webm"
                        src={cmsFileUrl(file_name, file_loc)}
                        data-src={cmsFileUrl(file_name, file_loc)}
                      />
                    </video>
                  ) : (
                    <Image
                      src={cmsFileUrl(file_name, file_loc)}
                      width={670}
                      height={447}
                      alt="banner"
                    />
                  )}





        </>
    )
}