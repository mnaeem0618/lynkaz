import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import { cmsFileUrl, getFileExtension } from "@/helpers/helper";

const VideoSection = ({
    mp4_file_name,
    webm_file_name,
    file_loc = "images",
    poster,
    img_width = "670",
    img_height = "447",
    vid_width = "1880",
    vid_height = "1224",
}) => {
    const videoRef = useRef(null);
    const router = useRouter();

    const expression = /(Mac|iPhone|iPod|iPad)/i;
  const [platform, setPlatform] = useState();
  useEffect(() => {
    setPlatform(navigator.platform);
  });

    useEffect(() => {
        const handleRouteChange = () => {
            // Reset video playback state when navigating to a new page
            if (videoRef.current) {
                videoRef.current.load();
            }
        };

        // Subscribe to the router's "routeChangeStart" event
        router.events.on('routeChangeStart', handleRouteChange);

        // Clean up the event listener on component unmount
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <div>
        {expression.test(platform) ? (
            <video
                ref={videoRef}
                src={cmsFileUrl(mp4_file_name, file_loc)}
                className="CuAnimation_video__70Pvw"
                id="lazy-video"
                height={vid_height}
                width={vid_width}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
            // poster={poster}
            // preload="auto"
            />
        ) : <video
                ref={videoRef}
                src={cmsFileUrl(webm_file_name, file_loc)}
                className="CuAnimation_video__70Pvw"
                id="lazy-video"
                height={vid_height}
                width={vid_width}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
            // poster={poster}
            // preload="auto"
            />}
           
        </div>
    );
};

export default VideoSection;
