"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import createGlobe from "cobe";
import { Lock } from "lucide-react";

export function Features() {
  return (
    <div
      id="features"
      className="w-full  mx-auto bg-[#016145] dark:bg-[#016145] py-20 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-8000 dark:text-neutral-100 text-neutral-800">
          Notre promesse
        </h2>
      </Header>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-200">
        Un amour sincère et durable
      </p>
      <div className="mt-20  grid cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem] max-w-7xl mx-auto [&>*:last-child]:md:row-span-2">
        <Card className="flex flex-col justify-between md:col-span-3">
          <CardSkeletonBody>
            <SkeletonOne />
          </CardSkeletonBody>
          <CardContent className="h-40">
            <CardTitle>{"Un meilleur accompagnement."}</CardTitle>
            <CardDescription className={"sm:max-w-lg text-white dark:text-white/80"}>
              {"Parce que la recherche de l'amour authentique est difficile, nous avons créer un algorithme pour ne plus que vous perdiez votre temps. Créer avec des professionnels."}
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between md:col-span-2">
          <CardContent className="h-40">
            <CardTitle>{"Vérification d'identité"}</CardTitle>
            <CardDescription className={"sm:max-w-lg text-white dark:text-white/80"}>
              {"Vérification d'identité pour s'assurer que les personnes rencontrées sont authentiques."}
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
              <Lock className="w-10 h-10" />
            </div>
          </CardSkeletonBody>
        </Card>

        {/* <Card className="flex flex-col justify-between md:col-span-2">
          <CardContent className="h-40">
            <CardTitle>Une liberté de création inégalée</CardTitle>
            <CardDescription className={"sm:max-w-md"}>
              {"Importez vos exercices, photos, vidéos ou bien partez d'une page blanche pour créer votre contenu d'entrainement."}
            </CardDescription>
          </CardContent>
          <CardSkeletonBody className={"relative sm:px-6"}>
            <video width={450} controls autoPlay muted loop className={"rounded-lg"}>
              <source src="https://storage.googleapis.com/ressources-site-public/demo-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/*<SkeletonTwo />*/}
          {/* </CardSkeletonBody>
        </Card> */} 
        <Card className="flex flex-col md:col-span-5">
          <CardContent className="flex-shrink-0">
            <CardTitle>{"Stop aux swipes, bonjour le slow dating."}</CardTitle>

          </CardContent>
          <CardSkeletonBody className="flex-1 min-h-[40rem]">
            <div className="relative w-full h-full rounded-lg bg-neutral-100 mt-2 overflow-hidden">
              <Image
                src="/vue_ensemble.png"
                alt="Dashboard"
                layout="fill"
                className="object-cover"
              />
            </div>
          </CardSkeletonBody>
        </Card>
      </div>
    </div>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
      <motion.div
        initial={{
          width: 0,
          height: 0,
          borderRadius: 0,
        }}
        whileInView={{
          width: "100%",
          height: "100%",
        }}
        style={{
          transformOrigin: "top-left",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full border border-neutral-200 dark:border-[#f7cbe5] w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 dark:bg-[#f7cbe5] bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 dark:bg-[#f7cbe5] bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-[#f7cbe5] bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-[#f7cbe5] bg-neutral-200"
        />
      </motion.div>
      {children}
    </div>
  );
};

// Skeletons

export const SkeletonOne = () => {
  const Container = ({
    children,
    ...props
  }: { children: React.ReactNode } & React.ComponentProps<
    typeof motion.div
  >) => {
    return (
      <motion.div
        {...props}
        className={cn(
          "w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg flex items-center bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 justify-center",
          props.className
        )}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div className="relative flex items-center justify-center  w-full h-full">
      <svg
        width="128"
        height="69"
        viewBox="0 0 128 69"
        fill="none"
        className="absolute left-1/2 -translate-x-[90%]  -top-2 text-neutral-200 dark:text-neutral-800"
      >
        <path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="url(#gradient-2)"
          strokeWidth="1"
        />

        <defs>
          <motion.linearGradient
            initial={{
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "0%",
            }}
            animate={{
              x1: "100%",
              y1: "90%",
              x2: "120%",
              y2: "120%",
            }}
            id="gradient-2"
            transition={{
              duration: Math.random() * (7 - 2) + 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop stopColor={"#fa4b0a"} stopOpacity={`0`} />
            <stop offset="1" stopColor={"#fa4b0a"} />
            <stop offset="1" stopColor={"#fa4b0a"} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="105"
        viewBox="0 0 62 105"
        fill="none"
        className="absolute left-1/2 -translate-x-0  -bottom-2 dark:text-neutral-800 text-neutral-200"
      >
        <path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="url(#gradient-1)"
          strokeWidth="1"
        />
        <defs>
          <motion.linearGradient
            initial={{
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "0%",
            }}
            animate={{
              x1: "100%",
              y1: "90%",
              x2: "120%",
              y2: "120%",
            }}
            id="gradient-1"
            transition={{
              duration: Math.random() * (7 - 2) + 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop stopColor={"#fa4b0a"} stopOpacity={`0`} />
            <stop offset="1" stopColor={"#fa4b0a"} />
            <stop offset="1" stopColor={"#fa4b0a"} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto w-full relative z-30 [perspective:1000px] [transform-style:preserve-3d] p-8 sm:p-0">
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="overflow-hidden px-2 flex-col justify-center"
        >
          <p className="text-md text-center bg-transparent ">{"Audios de professionnels partenaires"}</p>
        </Container>
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
        >
          <p className="text-md text-center bg-transparent ">{"Questionnaire +100 questions"}</p>
        </Container>
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-md text-center bg-transparent ">{"Des profils sélectionnés pour vous"}</p>
        </Container>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-0 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.0, 0.2, 0.6],
      markerColor: [0, 0, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("overflow-hidden relative w-full h-full", className)}>
      {children}
    </div>
  );
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-sans  text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100",
        className
      )}
    >
      {children}
    </h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col rounded-2xl bg-white dark:bg-[#f7cbe5]/10 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
