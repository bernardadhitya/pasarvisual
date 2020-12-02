import React from "react";
import { AuthProvider } from "../../Helper/AuthProvider";
import { Routes } from "./Routes";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export const Providers = () => {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ApplicationProvider>
    </>
  );
};