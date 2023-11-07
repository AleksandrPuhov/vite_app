import { FC } from "react";

import { Button, Container, Group, Title } from "@mantine/core";

import styles from "./PageError.module.css";

export const PageError: FC = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.root}>
      <Container>
        <Title fz="36" ta="center" mb="50">
          Что-то пошло не так.
        </Title>
        <Group justify="center">
          <Button variant="filled" size="md" onClick={reloadPage}>
            Перезагрузить страницу
          </Button>
        </Group>
      </Container>
    </div>
  );
};
