interface FormEncodeData {
  [key: string]: string;
}

export const encode = (data: FormEncodeData) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
