import { FC } from "react";

import styles from "./Footer.module.css";

import { Anchor, Box, Container, Flex, rem } from "@mantine/core";
import { FooterBottom } from "./FooterBottom/FooterBottom";
import { Logo } from "@shared/ui/icons/logo/logo";
import { Link } from "react-router-dom";

// const data = [
//   {
//     title: "About",
//     links: [
//       { label: "Features", link: "#" },
//       { label: "Pricing", link: "#" },
//       { label: "Support", link: "#" },
//       { label: "Forums", link: "#" },
//     ],
//   },
//   {
//     title: "Project",
//     links: [
//       { label: "Contribute", link: "#" },
//       { label: "Media assets", link: "#" },
//       { label: "Changelog", link: "#" },
//       { label: "Releases", link: "#" },
//     ],
//   },
//   {
//     title: "Community",
//     links: [
//       { label: "Join Discord", link: "#" },
//       { label: "Follow on Twitter", link: "#" },
//       { label: "Email newsletter", link: "#" },
//       { label: "GitHub discussions", link: "#" },
//     ],
//   },
// ];

const FOOTER_PHONE_NUM = "+7 (333) 444-55-66";

export const Footer: FC = () => {
  // const groups = data.map((group) => {
  //   const links = group.links.map((link, index) => (
  //     <Text<"a">
  //       key={index}
  //       className={classes.link}
  //       component="a"
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </Text>
  //   ));

  //   return (
  //     <div className={classes.wrapper} key={group.title}>
  //       <Text className={classes.title}>{group.title}</Text>
  //       {links}
  //     </div>
  //   );
  // });

  return (
    <footer className={styles.root}>
      <Container className={styles.inner} fluid>
        <Link to={"/"}>
          <Logo style={{ width: rem(45), height: rem(45) }} />
        </Link>
        <Flex
          mih={rem(50)}
          gap={rem(20)}
          justify="space-between"
          align="center"
          w={"100%"}
        >
          <div>
            <Anchor
              href={"mailto:" + FOOTER_PHONE_NUM}
              fz="lg"
              fw={700}
              c="gray.6"
            >
              {FOOTER_PHONE_NUM}
            </Anchor>
          </div>
          <div>right</div>
        </Flex>
        {/* <div className={classes.groups}>{groups}</div> */}
      </Container>

      <FooterBottom />
    </footer>
  );
};
