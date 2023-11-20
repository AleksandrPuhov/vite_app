import { FC } from "react";

import styles from "./Footer.module.css";

import { ActionIcon, Container, Group, rem } from "@mantine/core";
import { VKIcon } from "@shared/ui/icons/socials/vk";

export const Footer: FC = () => {
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
        <div>left</div>
        {/* <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text> */}
        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <VKIcon style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};
