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

export default function Overview() {
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
      className="section-container flex items-center justify-center text-primaryText dark:text-darkPrimaryText text-[clamp(5px,2.3vw,17px)]"
    >
      <div className="flex items-center justify-center w-[40vw] ">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex items-center justify-evenly p-6 mb-6">
            <div className="mr-6 h-[clamp(15vh,36vh,48vh)] w-[clamp(15vh,36vh,48vh)] flex justify-center items-center">
              {imageUrl && <img src={imageUrl} className="object-contain" />}
            </div>

            <div className="w-[30vw]">
              <h2 className="font-bold">Francisco Martinez</h2>
              <h3>Bachelor of Science, Computer Science</h3>
              <p className="font-light">
                California State University, Dominguez Hills
              </p>
              <p className="font-light">Carson, CA</p>
              <p className="font-light">April 2021 - Dec 2024</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly bg-primaryBg dark:bg-darkPrimaryBg p-6 mb-6  rounded-lg shadow-lg  ">
            <p className="italic">
              Aspiring Software Engineer with hands-on experience developing
              React.js, React Native and Java full-stack applications ranging
              from pet care mobile apps to healthcare management systems and
              personal portfolios.
            </p>
          </div>

          <div className="flex justify-evenly  gap-4  w-[50vw] h-[7vh] ">
            {links.map((link, index) => (
              <motion.div
                whileHover={{
                  scale: [null, 1.1, 1.2],
                  transition: {
                    duration: 0.7,
                    delay: 0,
                    times: [0, 0.3, 0.7],
                    ease: ["easeIn", "easeOut"],
                  },
                }}
                key={index}
                className="font-bold bg-primaryBg dark:bg-darkPrimaryBg  text-center  flex items-center justify-center p-6 mb-6 rounded-lg shadow-lg"
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
      </div>
    </section>
  );
}

const links: string[] = ["GitHub", "LinkedIn", "Download Resume"];
