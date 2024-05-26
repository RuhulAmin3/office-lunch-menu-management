/* eslint-disable @typescript-eslint/no-explicit-any */

export const setIntoLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getIntoLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  const properties = propertyPath.split(".");

  let value = obj;

  for (let prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }

  return value.message;
};

export function generateRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
