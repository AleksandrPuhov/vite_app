import { FC, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

import { VKIcon } from "@shared/ui/icons/socials/vk";

import { ActionIcon, Container, Group, rem, Text } from "@mantine/core";

const FOOTER_SOCIALS_ICONS = [
  {
    variant: "vk",
    to: "https://vk.com/",
  },
];

export const Footer: FC = () => {
  const icon = useCallback(
    (
      link: { variant: string; to: string },
      style?: React.CSSProperties | undefined
    ) => {
      switch (link.variant) {
        case "vk": {
          return <VKIcon style={style} />;
        }
        default:
          return null;
      }
    },
    []
  );

  const socialsIcons = useMemo(() => {
    return FOOTER_SOCIALS_ICONS.map((link) => {
      return (
        <Link to={link.to} target="_blank" key={link.to}>
          <ActionIcon size="lg" variant="subtle" radius="xl">
            {icon(link, { width: rem(18), height: rem(18) })}
          </ActionIcon>
        </Link>
      );
    });
  }, [icon]);

  return (
    <footer className={styles.root}>
      <Container className={styles.inner} fluid>
        top Footer
        {/* <div className={classes.logo}>
          <MantineLogo size={30} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div> */}
        {/* <div className={classes.groups}>{groups}</div> */}
      </Container>
      <Container className={styles.afterFooter} fluid>
        <Text c="dimmed" size="sm">
          © 2023 Mantine project.
        </Text>
        <Group gap={0} justify="flex-end" wrap="nowrap">
          {socialsIcons}
        </Group>
      </Container>
    </footer>
  );
};
