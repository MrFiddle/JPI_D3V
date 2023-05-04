function onClickURL(url: string) {
  window.open(url, "_blank");
}

function consoleLog(message: string) {
  console.log(message);
}

export { onClickURL, consoleLog };
