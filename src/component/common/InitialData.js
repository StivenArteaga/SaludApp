import React, { Fragment, useEffect } from "react";

const nameKeyFamily = "family-collection";

export const getUser = () => {
  const storage = localStorage.getItem(data_user.nameKey);
  if (!storage) {
    return setUser();
  }

  return JSON.parse(storage);
};

const setUser = () => {
  localStorage.setItem(data_user.nameKey, JSON.stringify(data_user));
  return getUser();
};

export const setNewUser = (objectUser) => {
  localStorage.setItem(data_user.nameKey, JSON.stringify(objectUser));
  return getUser();
};

export const getFamilyCollection = () => {
  const storage = localStorage.getItem(nameKeyFamily);
  if (!storage) {
    return setFamilyCollection(getFamilyDefault());
  }

  return JSON.parse(storage);
};

export const setFamilyCollection = (itemFamily) => {
  const collection = [data_user.objectUser, ...itemFamily];
  localStorage.setItem(nameKeyFamily, JSON.stringify(collection));
  return getFamilyCollection();
};

export default function InitialData(props) {
  useEffect(() => {
    initialSession();
    initialGroupFamily();
  });

  const initialSession = () => {
    const user = getUser();
    if (!user) {
      console.log("Error! connect user data");
      return;
    }

    console.log("Success! connect user data");
    getTimeSession();
  };

  const getTimeSession = () => {
    setTimeout(() => {
      initialSession();
    }, 7000);
  };

  const initialGroupFamily = () => {
    const family = getFamilyCollection();
    console.table(family);
  };

  return <Fragment>{props.children}</Fragment>;
}

export const data_user = {
  nameKey: "data-session",
  objectUser: {
    identifier: 1,
    fullName: "Brayan Stiven Mora Arteaga",
    minName: "BM",
    email: "stiv_mos@yopmail.com",
    urlPicture: "",
  },
};

const getFamilyDefault = () => [
  createFamily(2, "Vicky Juliana Coa Medrano", "VJ", "vicky@yopmail.com", ""),
  createFamily(
    3,
    "Enilda Isabel Arteaga Solano",
    "EA",
    "enilda@yopmail.com",
    ""
  ),
  createFamily(4, "Anastacia Medrano", "AM", "ana@yopmail.com", ""),
  createFamily(5, "Elder guerra", "EG", "elderg@yopmail.com", ""),
];

const createFamily = (identifier, fullName, minName, email, urlPicture) => {
  return { identifier, fullName, minName, email, urlPicture };
};
