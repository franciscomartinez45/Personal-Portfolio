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
      className="section-container  "
    >
      <div className="py-20 flex flex-col justify-center items-center justify-self-center  ">
        <h1 className="font-semibold mb-6 text-headerFontColor">ABOUT</h1>

        <motion.div
          className="flex items-center justify-evenly mb-[clamp(0px,24px,24px)] p-[clamp(0px,24px,24px)]  w-[90vw] rounded-lg lg:w-[40vw] bg-white/10 backdrop-blur-sm "
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="mr-[clamp(0px,24px,24px)] flex justify-center items-center ">
            {imageUrl && (
              <img
                src={imageUrl}
                className="object-contain rounded-xl w-[45vw] lg:w-[15vw] "
              />
            )}
          </div>

          <div className=" text-[clamp(12px,2vw,14px)] text-primaryText">
            <h1 className="">
              <strong>Francisco Martinez</strong>
            </h1>
            <h3>Master of Computer Science Student</h3>
            <p className="font-bold ">
              University of California, Irvine
            </p>
            <p className="font-normal">Irvine, CA</p>
            <p className="font-light">Sept 2025 - Dec 2026</p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-evenly text-[clamp(12px,2vw,14px)] rounded-lg  p-6 mb-6   w-[90vw] lg:w-[40vw] bg-white/10 backdrop-blur-lg "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="">
            I am an Aspiring Software Engineer with hands-on experience
            developing personal projects React.js, React Native. I have
            knowledge and proficiency cleaning data for Machine Learning models.
            I will be attending UCI's Master of Computer Science Program this
            upcoming fall.
          </p>
        </motion.div>

        <div className="flex justify-evenly gap-4 w-[80vw] lg:w-[40vw]">
          {links.map((link, index) => {
            const linkToUse =
              link.name === "Resume" && resumeUrl ? resumeUrl : link.link;
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                variants={{
                  hidden: { y: 0 },
                  visible: {
                    y: [0, -40, 0],
                    transition: { duration: 0.7, delay: (index + 1) * 0.3 },
                  },
                  hover: { scale: 1.1, transition: { delay: 0 } },
                  tap: { scale: 0.9, transition: { delay: 0 } },
                }}
                className=" text-center text-[clamp(10px,1.2vw,14px)] py-3 w-[25vw]  bg-linkButtonBg text-buttonText font-semibold rounded shadow-lg cursor-pointer mt-5  "
                key={index}
              >
                <a href={linkToUse} target="_blank">
                  {link.name}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
interface Links {
  name: string;
  link: string;
}

const links: Links[] = [
  { name: "GitHub", link: "https://github.com/franciscomartinez45" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/francisco-martinez-405512218/",
  },
  {
    name: "Resume",
    link: "",
  },
];
