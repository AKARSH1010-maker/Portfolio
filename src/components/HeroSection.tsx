"use client";

import { motion } from "framer-motion";
import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Row,
} from "@once-ui-system/core";
import { home, about } from "@/resources";
import styles from "./HeroSection.module.scss";

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

// Glowing background animation
const glowVariants = {
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Button hover animation
const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

// Featured badge animation
const badgeVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const HeroSection = () => {
  const headlineText = typeof home.headline === "string" ? home.headline : "Full Stack Developer";
  const words = headlineText.split(" ");

  return (
    <Column fillWidth horizontal="center" gap="m">
      {/* Glowing background blur effect */}
      <div className={styles.glowingBg}>
        <motion.div
          className={styles.glow}
          variants={glowVariants}
          animate="animate"
          aria-hidden="true"
        />
      </div>

      <Column maxWidth="s" horizontal="center" align="center" className={styles.heroContent}>
        {/* Featured Badge */}
        {home.featured.display && (
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            style={{ width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "64px",
                paddingBottom: "128px",
                paddingLeft: "48px",
              }}
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </div>
          </motion.div>
        )}

        {/* Heading with staggered word animation */}
        <motion.div
          style={{ width: "100%" }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Heading wrap="balance" variant="display-strong-l" className={styles.heading}>
            {words.map((word, i) => (
              <motion.span key={i} variants={textRevealVariants} custom={i}>
                {word}{" "}
              </motion.span>
            ))}
          </Heading>
        </motion.div>

        {/* Subline with fade-up */}
        <motion.div
          style={{ width: "100%" }}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <div style={{ paddingBottom: "128px", paddingTop: "64px" }}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              className={styles.subline}
            >
              {home.subline}
            </Text>
          </div>
        </motion.div>

        {/* CTA Button with hover animation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          style={{ paddingTop: "48px" }}
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={buttonHoverVariants}
            style={{ display: "inline-block" }}
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              {about.title}
            </Button>
          </motion.div>
        </motion.div>
      </Column>
    </Column>
  );
};
