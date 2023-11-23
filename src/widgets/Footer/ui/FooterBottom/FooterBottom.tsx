import { FC, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

import styles from "./FooterBottom.module.css";

import { VKIcon } from "@shared/ui/icons/socials/vk";

import { ActionIcon, Container, Group, rem, Text } from "@mantine/core";

const FOOTER_SOCIALS_ICONS = [
  {
    variant: "vk",
    to: "https://vk.com/",
  },
];

const FOOTER_BOTTOM_TEXT = "© 2023 Mantine project.";

export const FooterBottom: FC = () => {
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
    <Container className={styles.bottomFooter} fluid>
      <Text c="dimmed" size="sm">
        {FOOTER_BOTTOM_TEXT}
      </Text>
      <Group gap={0} justify="flex-end" wrap="nowrap">
        {socialsIcons}
      </Group>
    </Container>
  );
};
