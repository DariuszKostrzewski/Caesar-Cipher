function caesar(s) {
  if (s !== "" || s.typeof !== "string") {
    s.replace(/[a-zA-Z]/g, function (char) {
      return String.fromCharCode(
        (char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13)
          ? char
          : char - 26
      );
    });
  }
}
export default caesar;
