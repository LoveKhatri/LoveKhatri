import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
} from "react-icons/fa6";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiDrizzle,
  SiDocker,
  SiGit,
  SiNginx,
  SiApachekafka,
  SiRabbitmq,
  SiFigma,
} from "react-icons/si";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  go: SiGo,
  python: SiPython,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  prisma: SiPrisma,
  drizzle: SiDrizzle,
  docker: SiDocker,
  git: SiGit,
  nginx: SiNginx,
  apachekafka: SiApachekafka,
  rabbitmq: SiRabbitmq,
  figma: SiFigma,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
