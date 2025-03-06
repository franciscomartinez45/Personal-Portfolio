import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import s3 from "../client/s3client";
export const getResumeUrl = async () => {
  try {
    const resumeCommand = new GetObjectCommand({
      Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
      Key: import.meta.env.VITE_RESUME_NAME,
    });
    const signedResumeUrl = await getSignedUrl(s3, resumeCommand, {
      expiresIn: 3600,
    });
    return signedResumeUrl;
  } catch (error) {
    console.error("Error fetching signed URL:", error);
  }
};

export default function OverviewSection() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [resumeUrl, setResumeUrl] = useState<string>("");
  const getBucketData = async () => {
    try {
      const imageCommand = new GetObjectCommand({
        Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
        Key: import.meta.env.VITE_IMAGE_NAME,
      });

      const signedImageUrl = await getSignedUrl(s3, imageCommand, {
        expiresIn: 3600,
      });

      setImageUrl(signedImageUrl);
    } catch (error) {
      console.error("Error fetching signed URL:", error);
    }
  };
  const fetchResumeUrl = async () => {
    try {
      const resumeUrl = await getResumeUrl();

      if (resumeUrl) {
        setResumeUrl(resumeUrl);
      }
    } catch (error) {
      console.log("Error fetching Resume Url");
    }
  };
  useEffect(() => {
    getBucketData();
    fetchResumeUrl();
  }, []);
  return (
    <section
      id="overview"
      className="section-container text-[clamp(8px,2vw,16px)]"
    >
      <div className="py-20 flex flex-col justify-center items-center justify-self-center">
        <h1 className="text-2xl font-semibold text-secondaryText mb-6 ">
          ABOUT
        </h1>

        <div className="flex items-center justify-evenly mb-6 p-6 bg-secondaryBg  text-secondaryText rounded-xl w-[50vw]">
          <div className="mr-6 flex justify-center items-center ">
            {imageUrl && (
              <img
                src={imageUrl}
                className="object-contain rounded-xl w-[25vw]"
              />
            )}
          </div>

          <div className="">
            <h2 className="font-medium mb-4">Francisco Martinez</h2>
            <h3>Bachelor of Science, Computer Science</h3>
            <p className="font-normal">
              California State University, Dominguez Hills
            </p>
            <p className="font-normal">Carson, CA</p>
            <p className="font-normal">April 2021 - Dec 2024</p>
          </div>
        </div>
        <div className="flex items-center justify-evenly bg-secondaryBg text-secondaryText p-6 mb-6  rounded-lg shadow-lg w-[50vw] ">
          <p className="">
            I am an Aspiring Software Engineer with hands-on experience
            developing personal projects React.js, React Native. I have
            knowledge and proficiency cleaning data for Machine Learning models.
            Currently, I am hosting this site on Vercel and have a mobile
            application used as a capstone project hosted on Expo.
          </p>
        </div>

        <div className="flex justify-evenly  gap-4 w-[40vw] ">
          {links.map((link, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" text-center py-3 w-[25vw]  bg-linkButtonBg text-primaryText  font-semibold rounded shadow-lg cursor-pointer mt-5 "
              key={index}
            >
              {link.includes("GitHub") && (
                <a
                  href="https://github.com/franciscomartinez45"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {link.includes("LinkedIn") && (
                <a
                  href="https://www.linkedin.com/in/francisco-martinez-405512218/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              )}
              {link.includes("Resume") && (
                <a href={resumeUrl} download target="_blank">
                  View Resume
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const links: string[] = ["GitHub", "LinkedIn", "Download Resume"];
